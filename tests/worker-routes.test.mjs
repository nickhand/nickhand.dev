import assert from "node:assert/strict"
import test from "node:test"

import worker, { resolveLegacyRoute } from "../worker/index.mjs"

test("preserves the legacy dashboard proxy namespace", () => {
  const route = resolveLegacyRoute(
    "https://www.nickhand.dev/philly-gun-violence-map/data?year=2026",
  )

  assert.equal(route.kind, "proxy")
  assert.equal(
    route.url.href,
    "https://phillygunviolence.netlify.app/philly-gun-violence-map/data?year=2026",
  )
})

test("preserves the Fair Measure proxy and redirects Parking Jawn", () => {
  assert.equal(
    resolveLegacyRoute("https://www.nickhand.dev/fair-measure/results").url.href,
    "https://philly-fair-measure.netlify.app/fair-measure/results",
  )
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
      url: "https://www.nickhand.dev/philly-gun-violence-map?year=2026",
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
