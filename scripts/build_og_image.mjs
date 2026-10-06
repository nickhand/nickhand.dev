// Render public/og-image.png (1200×630) from HTML with headless Chrome.
// Usage: node scripts/build_og_image.mjs [--chrome /path/to/chrome]
import { execFileSync } from 'node:child_process'
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'

const TAGLINE = 'Public servant and data scientist building tools that help government deliver.'

const chromeArg = process.argv.indexOf('--chrome')
const chrome = chromeArg > 0
  ? process.argv[chromeArg + 1]
  : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

const geo = JSON.parse(await readFile(resolve('src/data/phl_geo.json'), 'utf8'))

const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;600&display=block" rel="stylesheet">
<style>
  html, body { margin: 0; width: 1200px; height: 630px; overflow: hidden; background: #fafafa; }
  body { position: relative; font-family: "IBM Plex Sans", sans-serif; -webkit-font-smoothing: antialiased; }
  .text { position: absolute; left: 80px; top: 0; bottom: 0; width: 520px; display: flex; flex-direction: column; justify-content: center; }
  .place { font: 400 20px "IBM Plex Mono", monospace; color: #71717a; }
  h1 { margin: 22px 0 0; font-size: 64px; font-weight: 600; letter-spacing: -0.02em; line-height: 1.05; color: #18181b; }
  h1 span { color: #355f7d; }
  p { margin: 26px 0 0; font-size: 28px; line-height: 1.4; color: #52525b; }
  .site { position: absolute; left: 80px; bottom: 72px; font: 500 22px "IBM Plex Mono", monospace; color: #18181b; }
  .site span { color: #355f7d; }
  svg { position: absolute; right: 70px; top: 45px; }
</style></head>
<body>
  <div class="text">
    <div class="place">Philadelphia, PA</div>
    <h1>Nick Hand<span>, PhD</span></h1>
    <p>${TAGLINE}</p>
  </div>
  <div class="site">nickhand<span>.dev</span></div>
  <svg width="${Math.round(540 * geo.width / geo.height)}" height="540" viewBox="${geo.viewBox}" fill="none">
    <path d="${geo.cityPath}" stroke="#d4d4d8" stroke-width="0.45" stroke-linejoin="round" />
    <circle cx="${geo.pin[0]}" cy="${geo.pin[1]}" r="1.8" fill="#b4543a" />
  </svg>
</body></html>`

const dir = await mkdtemp(join(tmpdir(), 'og-image-'))
try {
  const page = join(dir, 'og.html')
  await writeFile(page, html)
  execFileSync(chrome, [
    '--headless',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--window-size=1200,630',
    '--virtual-time-budget=5000',
    `--screenshot=${resolve('public/og-image.png')}`,
    `file://${page}`,
  ], { stdio: 'pipe' })
  console.log('Built public/og-image.png')
} finally {
  await rm(dir, { recursive: true, force: true })
}
