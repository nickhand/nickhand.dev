import assert from "node:assert/strict"
import test from "node:test"

import worker, { resolveLegacyRoute } from "../worker/index.mjs"

test("leaves dashboard subtree requests to Cloudflare route ownership", async () => {
  const route = resolveLegacyRoute(
    "https://www.nickhand.dev/philly-gun-violence-map/data?year=2026",
  )

  assert.equal(route, null)

  const assets = {
    fetch: async (request) => new Response(new URL(request.url).pathname),
  }
  const response = await worker.fetch(
    new Request(
      "https://www.nickhand.dev/philly-gun-violence-map/data?year=2026",
    ),
    { ASSETS: assets, INDEXABLE: "true" },
  )
  assert.equal(await response.text(), "/philly-gun-violence-map/data")
})

test("redirects bare dashboard queries into the slash-subtree route", () => {
  const route = resolveLegacyRoute(
    "https://www.nickhand.dev/philly-gun-violence-map?year=2026",
  )

  assert.deepEqual(
    { kind: route.kind, status: route.status, url: route.url.href },
    {
      kind: "redirect",
      status: 301,
      url: "https://www.nickhand.dev/philly-gun-violence-map/?year=2026",
    },
  )

  const withoutQuery = resolveLegacyRoute(
    "https://www.nickhand.dev/philly-gun-violence-map",
  )
  assert.deepEqual(
    {
      kind: withoutQuery.kind,
      status: withoutQuery.status,
      url: withoutQuery.url.href,
    },
    { kind: "redirect", status: 301, url: "https://www.nickhand.dev/philly-gun-violence-map/" },
  )
})

test("redirects bare Fair Measure requests into its slash-subtree route", () => {
  const withQuery = resolveLegacyRoute(
    "https://www.nickhand.dev/fair-measure?source=work",
  )
  assert.deepEqual(
    { kind: withQuery.kind, status: withQuery.status, url: withQuery.url.href },
    {
      kind: "redirect",
      status: 301,
      url: "https://www.nickhand.dev/fair-measure/?source=work",
    },
  )

  const withoutQuery = resolveLegacyRoute(
    "https://www.nickhand.dev/fair-measure",
  )
  assert.deepEqual(
    {
      kind: withoutQuery.kind,
      status: withoutQuery.status,
      url: withoutQuery.url.href,
    },
    { kind: "redirect", status: 301, url: "https://www.nickhand.dev/fair-measure/" },
  )
})

test("leaves the Fair Measure subtree to Cloudflare route ownership", async () => {
  const requestUrl = "https://www.nickhand.dev/fair-measure/results?x=1"
  assert.equal(resolveLegacyRoute(requestUrl), null)
  assert.equal(resolveLegacyRoute("https://www.nickhand.dev/fair-measured"), null)

  const assets = {
    fetch: async (request) => new Response(new URL(request.url).pathname),
  }
  const response = await worker.fetch(new Request(requestUrl), {
    ASSETS: assets,
    INDEXABLE: "true",
  })
  assert.equal(await response.text(), "/fair-measure/results")
})

test("redirects Parking Jawn to its canonical standalone site", () => {
  const parking = resolveLegacyRoute(
    "https://www.nickhand.dev/parking-jawn?source=work",
  )
  assert.deepEqual(
    { kind: parking.kind, status: parking.status, url: parking.url.href },
    {
      kind: "redirect",
      status: 301,
      url: "https://www.parkingjawn.com/?source=work",
    },
  )
})

test("redirects the former dashboard URL without capturing near matches", () => {
  const redirect = resolveLegacyRoute(
    "https://www.nickhand.dev/mapping-gun-violence?year=2026",
  )

  assert.deepEqual(
    { kind: redirect.kind, status: redirect.status, url: redirect.url.href },
    {
      kind: "redirect",
      status: 301,
      url: "https://www.nickhand.dev/philly-gun-violence-map/?year=2026",
    },
  )
  assert.equal(
    resolveLegacyRoute("https://www.nickhand.dev/philly-gun-violence-mapper"),
    null,
  )
})

test("staging responses are noindex and production responses retain HSTS", async () => {
  const assets = {
    fetch: async () => new Response("home", { headers: { "Content-Type": "text/html" } }),
  }

  const staging = await worker.fetch(
    new Request("https://nickhand-dev-staging.example.workers.dev/"),
    { ASSETS: assets, INDEXABLE: "false" },
  )
  assert.equal(staging.headers.get("X-Robots-Tag"), "noindex, nofollow")
  assert.equal(staging.headers.get("Strict-Transport-Security"), null)

  const production = await worker.fetch(
    new Request("https://www.nickhand.dev/"),
    { ASSETS: assets, INDEXABLE: "true" },
  )
  assert.equal(production.headers.get("X-Robots-Tag"), null)
  assert.equal(
    production.headers.get("Strict-Transport-Security"),
    "max-age=31536000",
  )
})
