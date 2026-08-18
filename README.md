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

The site deploys as a Worker with static assets. A small Worker entrypoint keeps
the existing Netlify status-200 proxies working for Fair Measure and the legacy
Philadelphia gun-violence dashboard. Keeping the dashboard proxy in this
main-site Worker provides the rollback origin after the new dashboard Worker
takes over the more specific `/philly-gun-violence-map` routes. The archived
`/parking-jawn` path permanently redirects to its canonical standalone domain;
proxying it would break its root-relative asset URLs.

```bash
npm run dry-run:cloudflare:staging
npm run deploy:cloudflare:staging
```

Do not run `deploy:cloudflare:production` until:

1. the complete Netlify DNS zone and build settings have been exported;
2. Cloudflare is authoritative for `nickhand.dev`;
3. the `www` Netlify DNS records are ready to be replaced by the Worker custom
   domain; and
4. a Cloudflare redirect preserves every apex path and query string at `www`.

The production `VITE_POSTHOG_KEY` must be present in the build environment.
Keep the Netlify sites available throughout the rollback window.
