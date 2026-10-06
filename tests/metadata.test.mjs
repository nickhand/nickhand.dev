import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import test from "node:test"

import { createSitemap } from "../scripts/sitemap.mjs"

const read = (path) => readFile(new URL(path, import.meta.url), "utf8")
const html = await read("../index.html")
const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1]
assert.ok(head, "The HTML template must include a head")

const decode = (value) => value.replaceAll("&amp;", "&").replaceAll("&quot;", '"')
const metadata = new Map()
for (const match of head.matchAll(/<meta\s+(?:name|property)="([^"]+)"\s+content="([^"]*)"\s*\/?\s*>/g)) {
  assert.ok(!metadata.has(match[1]), `Duplicate metadata: ${match[1]}`)
  metadata.set(match[1], decode(match[2]))
}
const title = decode(head.match(/<title>([^<]+)<\/title>/)[1])
const canonical = head.match(/<link\s+rel="canonical"\s+href="([^"]+)"/)[1]
const scripts = [...head.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
assert.equal(scripts.length, 1, "Keep one connected structured-data graph")
const structured = JSON.parse(scripts[0][1])
const graph = structured["@graph"]
const entity = (type) => {
  const matches = graph.filter((item) => item["@type"] === type)
  assert.equal(matches.length, 1, `Expected one ${type}`)
  return matches[0]
}

// The same page can be read through a search result, a social card, or JSON-LD.
// Fail when one representation silently drifts away from the others.
test("search and social metadata describe the same page", () => {
  const page = entity("WebPage")
  assert.equal(metadata.get("og:title"), title)
  assert.equal(metadata.get("twitter:title"), title)
  assert.equal(page.name, title)
  assert.equal(metadata.get("og:description"), metadata.get("description"))
  assert.equal(metadata.get("twitter:description"), metadata.get("description"))
  assert.equal(page.description, metadata.get("description"))
  assert.match(title, /Nick Hand/)
  assert.match(title, /Data Analysis & Custom Software/)
  assert.match(page.description, /Philadelphia/)
  assert.match(page.description, /Wissahickon Analytics/)
})

test("canonical, social, structured data, and sitemap use one homepage URL", () => {
  assert.equal(canonical, "https://www.nickhand.dev/")
  assert.equal(metadata.get("og:url"), canonical)
  assert.equal(entity("WebPage").url, canonical)
  assert.equal(entity("WebSite").url, canonical)
  assert.equal(entity("Person").url, canonical)
  assert.ok(createSitemap("2026-10-05").includes(`<loc>${canonical}</loc>`))
})

test("structured entities resolve to the correct person, practice, and service", () => {
  assert.equal(structured["@context"], "https://schema.org")
  const ids = new Set(graph.map((item) => item["@id"]))
  assert.equal(ids.size, graph.length, "Entity IDs must be unique")
  const inspect = (value) => {
    if (Array.isArray(value)) return value.forEach(inspect)
    if (!value || typeof value !== "object") return
    if (value["@id"]) {
      assert.ok(value["@id"].startsWith(`${canonical}#`))
      assert.ok(ids.has(value["@id"]), `Unresolved entity: ${value["@id"]}`)
    }
    Object.values(value).forEach(inspect)
  }
  inspect(graph)

  const person = entity("Person")
  const practice = entity("Organization")
  assert.equal(entity("Service").provider["@id"], practice["@id"])
  assert.equal(person.affiliation["@id"], practice["@id"])
  assert.equal(entity("WebSite").publisher["@id"], person["@id"])
  assert.equal(entity("WebPage").mainEntity["@id"], person["@id"])
  assert.equal(entity("WebPage").isPartOf["@id"], entity("WebSite")["@id"])
})

test("practice and identity metadata remain supported by visible page content", async () => {
  const [consulting, hero, contact, links] = await Promise.all([
    read("../src/components/ConsultingSection.vue"),
    read("../src/components/HeroSection.vue"),
    read("../src/components/ContactSection.vue"),
    read("../src/data/links.ts"),
  ])
  const practice = entity("Organization")
  const service = entity("Service")
  const person = entity("Person")
  assert.ok(consulting.includes(practice.name))
  assert.ok(consulting.includes(practice.email))
  assert.ok(consulting.includes(service.name))
  assert.ok(consulting.includes(`id="${new URL(service.url).hash.slice(1)}"`))
  assert.equal(practice.url, service.url)
  assert.ok(hero.replace(/\s+/g, " ").includes(person.worksFor.name))
  assert.ok(contact.includes(person.email))
  for (const profile of person.sameAs) {
    assert.ok(links.includes(profile), `Identity link missing from visible links: ${profile}`)
  }
})

test("social image metadata matches the shipped image", async () => {
  assert.equal(metadata.get("twitter:image"), metadata.get("og:image"))
  assert.equal(metadata.get("twitter:image:alt"), metadata.get("og:image:alt"))
  const imageUrl = new URL(metadata.get("og:image"))
  assert.equal(imageUrl.origin, new URL(canonical).origin)
  const image = await readFile(new URL(`../public${imageUrl.pathname}`, import.meta.url))
  assert.equal(image.subarray(1, 4).toString(), "PNG")
  assert.equal(image.readUInt32BE(16), Number(metadata.get("og:image:width")))
  assert.equal(image.readUInt32BE(20), Number(metadata.get("og:image:height")))
})
