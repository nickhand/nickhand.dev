import assert from "node:assert/strict"
import test from "node:test"

import {
  HOMEPAGE_SOURCE_PATHS,
  createSitemap,
  resolveHomepageLastModified,
  sitemapPlugin,
} from "../scripts/sitemap.mjs"

test("derives lastmod from meaningful homepage source history", () => {
  let receivedArgs
  const lastmod = resolveHomepageLastModified({
    runGit: (args) => {
      receivedArgs = args
      return "2026-08-18\n"
    },
  })

  assert.equal(lastmod, "2026-08-18")
  assert.deepEqual(receivedArgs, [
    "log",
    "-1",
    "--format=%cs",
    "--",
    ...HOMEPAGE_SOURCE_PATHS,
  ])
  assert.ok(HOMEPAGE_SOURCE_PATHS.includes("src/components"))
  assert.ok(HOMEPAGE_SOURCE_PATHS.includes("src/data"))
  assert.ok(HOMEPAGE_SOURCE_PATHS.includes("public/og-image.png"))
  assert.ok(!HOMEPAGE_SOURCE_PATHS.includes("public/robots.txt"))
  assert.ok(!HOMEPAGE_SOURCE_PATHS.includes("public/sitemap.xml"))
  assert.ok(!HOMEPAGE_SOURCE_PATHS.includes("worker"))
})

test("emits one canonical sitemap with the derived lastmod", () => {
  const emitted = []
  const plugin = sitemapPlugin({
    resolveLastModified: () => "2026-08-18",
  })

  plugin.generateBundle.call({
    emitFile: (asset) => emitted.push(asset),
  })

  assert.deepEqual(emitted, [
    {
      type: "asset",
      fileName: "sitemap.xml",
      source: createSitemap("2026-08-18"),
    },
  ])
  assert.match(emitted[0].source, /<loc>https:\/\/www\.nickhand\.dev\/<\/loc>/)
  assert.match(emitted[0].source, /<lastmod>2026-08-18<\/lastmod>/)
  assert.doesNotMatch(emitted[0].source, /changefreq|priority/)
})

test("fails closed instead of publishing a fabricated freshness date", () => {
  assert.throws(
    () => resolveHomepageLastModified({ runGit: () => "" }),
    /Invalid homepage last-modified date: <empty>/,
  )
  assert.throws(() => createSitemap("2026-02-31"), /Invalid homepage/)
})
