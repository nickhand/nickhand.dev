import { readFile, writeFile } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'
import { build } from 'vite'
import { verifyPrerenderedHtml } from './verify-prerender.mjs'

// Keep server-only code outside the directory uploaded to Cloudflare.
await build()
await build({
  build: {
    ssr: 'src/entry-server.js',
    outDir: 'dist-ssr',
    emptyOutDir: true,
    copyPublicDir: false,
    rollupOptions: { output: { entryFileNames: 'entry-server.mjs' } },
  },
})

const { render } = await import(pathToFileURL(resolve('dist-ssr/entry-server.mjs')))
const markup = await render()
const path = resolve('dist/index.html')
const template = await readFile(path, 'utf8')
const outlet = '<div id="main"></div>'
if (template.split(outlet).length !== 2) {
  throw new Error('Expected exactly one empty app outlet before prerendering')
}
const html = template.replace(outlet, () => `<div id="main">${markup}</div>`)
verifyPrerenderedHtml(html)
await writeFile(path, html)
console.log('Prerendered and verified complete homepage HTML')
