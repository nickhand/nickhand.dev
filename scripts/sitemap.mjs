import { execFileSync } from "node:child_process"

const DATE = /^\d{4}-\d{2}-\d{2}$/

export const HOMEPAGE_SOURCE_PATHS = [
  "index.html",
  "src/App.vue",
  "src/components",
  "src/data",
  "src/assets/logo.png",
  "src/assets/profile.jpg",
  "public/favicon.png",
  "public/og-image.png",
]

function validateDate(value) {
  const timestamp = Date.parse(`${value}T00:00:00.000Z`)
  if (
    !DATE.test(value) ||
    !Number.isFinite(timestamp) ||
    new Date(timestamp).toISOString().slice(0, 10) !== value
  ) {
    throw new Error(`Invalid homepage last-modified date: ${value || "<empty>"}`)
  }
  return value
}

export function resolveHomepageLastModified({
  runGit = (args) =>
    execFileSync("git", args, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    }),
} = {}) {
  const value = runGit([
    "log",
    "-1",
    "--format=%cs",
    "--",
    ...HOMEPAGE_SOURCE_PATHS,
  ]).trim()
  return validateDate(value)
}

export function createSitemap(lastModified) {
  const lastmod = validateDate(lastModified)
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.nickhand.dev/</loc>
    <lastmod>${lastmod}</lastmod>
  </url>
</urlset>
`
}

export function sitemapPlugin({
  resolveLastModified = resolveHomepageLastModified,
} = {}) {
  return {
    name: "homepage-sitemap",
    apply: "build",
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: createSitemap(resolveLastModified()),
      })
    },
  }
}
