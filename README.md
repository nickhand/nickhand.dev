# nickhand.dev

Code behind the personal webpage of Nick Hand at [nickhand.dev](https://www.nickhand.dev)

## Development

Use Node 22.19+ or 24.11+ and npm. The repository intentionally has one lockfile.

```bash
npm ci
npm run check
```

`VITE_POSTHOG_KEY` is optional and is read at build time. Copy `.env.example`
to `.env.local` for a local production-analytics build. Cloudflare staging builds
deliberately omit analytics and return `X-Robots-Tag: noindex, nofollow`.

The production sitemap is generated during every build. Its `lastmod` is the
latest Git commit date that changed meaningful homepage copy, links, or
search-facing images. Documentation, tests, analytics, deployment, and routing
changes do not claim that the public page changed, and builds fail closed when
that history is unavailable.

## Rendering and search discovery

Every production and staging build renders the Vue homepage to complete HTML at
build time, then hydrates it in the browser. Navigation, project links, writing,
and contact work without JavaScript. The SSR bundle lives in ignored `dist-ssr/`;
only `dist/` is uploaded. No request-time rendering server is required.
`scripts/verify-prerender.mjs` rejects builds with missing content, contact links,
section targets, or an empty app outlet. Analytics initializes only in the browser
and loads separately from the page's main JavaScript.

The HTML head supplies a canonical URL, consistent search/social descriptions,
and linked Person, WebSite, WebPage, Organization, and Service entities. Structured
data must match the visible copy. `robots.txt` allows crawling and advertises the
homepage and the two independently hosted project sitemaps. Staging stays noindex.
There is no separate AI-only content or crawler-specific page. Search Console and
Bing Webmaster Tools ownership, sitemap submission, and indexing status are
account-side checks; an accessible page does not itself prove indexing or AI citation.

## Social image

`public/og-image.png` is rendered from HTML with headless Chrome. Edit the tagline
in `scripts/build_og_image.mjs` when the site's framing changes, then run:

```bash
node scripts/build_og_image.mjs
```

Pass `--chrome /path/to/chrome` if Chrome is not in `/Applications`. Update
`og:image:alt` and `twitter:image:alt` in `index.html` to match the image text.

## Resume

Edit `resume/resume.json`, then regenerate the downloadable PDF:

```bash
python3 -m pip install -r resume/requirements.txt
python3 scripts/build_resume.py
```

The generator uses Calibri regular and bold fonts from a local Microsoft Office
installation. On another machine, pass `--font-dir /path/to/calibri/fonts`.
The fonts are not included in this repository. The checked-in `public/resume.pdf`
is served as-is; website builds do not require Python or these fonts.
Review both PDF pages after regenerating to check wrapping and page breaks.

## Cloudflare deployment

The site deploys as a Worker with static assets. Fair Measure and the Philadelphia
gun-violence dashboard are owned by dedicated Cloudflare Workers on the more
specific `/fair-measure` and `/philly-gun-violence-map` routes. Each application
rolls back to a retained Worker version rather than a Netlify origin. The archived
`/parking-jawn` path permanently redirects to its canonical standalone domain;
proxying it would break its root-relative asset URLs.

```bash
npm run dry-run:cloudflare:staging
npm run deploy:cloudflare:staging
```

Before `deploy:cloudflare:production`, run `npm run check`, capture the active
Worker version as the rollback target, and verify the apex redirect preserves
every path and query string at `www`. The production `VITE_POSTHOG_KEY` must be
present in the build environment.

## Wissahickon Analytics redirect

`deploy/wissahickon-redirect/` is the complete static publish directory for the
separate Netlify project `wissahickon-analytics-redirect`
(site ID `d2fa3821-cea2-4fac-ac3f-6fea55afe0b5`). Its forced permanent redirect sends
all paths to `https://www.nickhand.dev/#consulting`. Upload this directory, or a
ZIP with its two files at the archive root, to that project when changing the
redirect. Do not upload the personal-site build to this project.

The Netlify DNS zone for `wissahickonanalytics.com` retains its existing name
servers and mail records. Only the apex and `www` website records point to this
redirect project. The previous `www.wissahickonanalytics.com` alias was removed
from the paused legacy project `resilient-salamander-beb17c`, whose shared
certificate could no longer renew after nickhand.dev moved to Cloudflare.

The project also serves the alternate domains `wissahickonanalytics.co` and
`wissdata.co` as domain aliases, so they redirect to the same consulting section.
Their `www` hosts need no separate alias: Netlify DNS points them at the project,
the Let's Encrypt certificate covers `*.wissahickonanalytics.co` and
`*.wissdata.co`, and Netlify sends them to the primary domain, which then
redirects. Both domains are registered at Namecheap but use Netlify DNS
(`nsone.net` name servers), so redirects and records are managed in Netlify, not
Namecheap. Their Google Workspace MX records stay in those Netlify DNS zones.

Those aliases previously sat on the legacy project, as `www.wissahickonanalytics.co`
and `www.wissdata.co`, and were removed on October 5, 2026. A domain can be
attached to only one Netlify project, and removing an alias also deletes the
website records Netlify had created for it (mail records are untouched). Adding
the alias to this project recreates them. Netlify limits domain-alias changes to
three per hour on this plan. The legacy project still lists `nickhand.dev`
and `www.nickhand.dev`; they are stale but harmless, because nickhand.dev's
DNS now points at Cloudflare.

The approved consulting copy (source commit `5ca79e0`) was deployed on October 5,
2026, to production Worker version `7e3b683e-1f94-4ed1-9e50-eea481595772`.
The previous retained version is `62eb8765-59ea-49ac-befd-12af714a8c71`:

```bash
npx wrangler rollback 62eb8765-59ea-49ac-befd-12af714a8c71 --env production
```

That rollback predates the consulting section, so coordinate the redirect
if restoring it. Fair Measure and the gun-violence dashboard have independent
Worker versions and routes and are not rolled back by this command.

The subsequent homepage review removed the repeated About section, retained its
education sentence in the hero, aligned the consulting section with the existing
section grid, and shared the outlined action-link style. Source `95cad65` was deployed
in production version `6d3e395d-cc8c-42a6-957b-cc1940722b70`; the immediately preceding
version is `4a9397e8-6388-4c62-a7ad-0de71894dbfc` (same layout, before the map's
reduced-motion correction). The original consulting layout remains available as
version `7e3b683e-1f94-4ed1-9e50-eea481595772`.

The redirect certificate was issued October 5, 2026, and currently expires
January 3, 2027; Netlify manages renewal. Both HTTP and HTTPS on the apex and www
hosts were verified, including legacy paths and query strings. Browser navigation
from the firm domain lands at the consulting section beneath the sticky header.

The earlier October 5 layout revision shortens the opening to two equally sized paragraphs
(18px desktop, 17px mobile) and orders the page: introduction, consulting, selected
work, writing, contact. Degrees remain in the résumé. Source `6a840b2` was deployed in
Worker version `00b679c4-417a-4c47-ba28-5a4470d7808e`. The preceding version,
`72c6cc2b-8113-4c36-a2cf-f30611412ec9`, retains the shorter introduction with the
portfolio before consulting. Lint, ten tests, production build, desktop/mobile
inspection and the live bundle/section order were verified.

The SEO/rendering release is source `001db41`, production Worker version
`6948681c-0f73-4a15-a614-a0e5ae7b9f83`. Its immediate rollback target is
`00b679c4-417a-4c47-ba28-5a4470d7808e` (the same layout before static rendering).
Staging version `9cd09870-28af-4c70-bdd5-2d4c3e0c09b0` was checked first. Lint,
15 tests, the build-time HTML gate, no-JavaScript browser rendering/navigation,
mobile layout, hydration, and an interactive event handler passed. The live page
has complete text, one h1, five linked structured-data entities, and valid assets.
Missing URLs and the unpublished server entry return 404; both dedicated project
apps and all three sitemaps remain available. Production has no noindex header;
staging retains noindex. Public probes using Googlebot, OAI-SearchBot,
Claude-SearchBot, and PerplexityBot user-agent strings returned complete HTML.
These probes do not establish access from verified crawler IPs or actual indexing.

The subsequent navbar correction is source `eb43c65`, live in production version
`f5d309db-d657-4617-a327-83275cf2f5c7`; rollback is
`6948681c-0f73-4a15-a614-a0e5ae7b9f83`. All five navigation links share a neutral
`#71717a` default and `#355f7d` hover/keyboard-focus state. Staging computed-style
checks verified both interactions and the focus outline; production verified all
five defaults. Lint, 15 tests, and the static-render build passed.

The consulting button's live click handler emitted exactly one `contact_click`
event with `method: email` and `section: consulting`, followed by transport retries.
Receipt is not verified: local DNS resolves `us.i.posthog.com` to `0.0.0.0`, and
both the browser and curl report connection refusal. This is consistent with a
local/network privacy filter. No filter was changed or bypassed. Complete the
receipt check from an unfiltered client and inspect that event in PostHog.
The browser also blocked the external mailto navigation; no email was sent.

The owner declined project case studies; do not add new case-study pages.
