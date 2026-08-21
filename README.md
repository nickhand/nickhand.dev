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
