# nickhand.dev

Code behind the personal webpage of Nick Hand at [nickhand.dev](https://www.nickhand.dev)

## Development

Use Node 22 and npm. The repository intentionally has one lockfile.

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
section grid, and shared the outlined action-link style. Source `95cad65` is live
in production version `6d3e395d-cc8c-42a6-957b-cc1940722b70`; the immediately preceding
version is `4a9397e8-6388-4c62-a7ad-0de71894dbfc` (same layout, before the map's
reduced-motion correction). The original consulting layout remains available as
version `7e3b683e-1f94-4ed1-9e50-eea481595772`.

The redirect certificate was issued October 5, 2026, and currently expires
January 3, 2027; Netlify manages renewal. Both HTTP and HTTPS on the apex and www
hosts were verified, including legacy paths and query strings. Browser navigation
from the firm domain lands at the consulting section beneath the sticky header.
