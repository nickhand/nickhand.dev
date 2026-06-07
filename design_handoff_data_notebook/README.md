# Handoff: nickhand.dev — Homepage redesign (Public Data Notebook direction)

## Overview
This is a redesign of the **nickhand.dev** homepage. It replaces the current splash-page treatment (giant name, blue gradient, typing animation, large outlined buttons) with a calm, scannable, single-page layout. The chosen direction is **"Public Data Notebook"**: a serious, technical-but-not-hacker aesthetic built on a monospace/sans pairing, §-numbered sections, thin dividers, and a restrained ink-blue accent.

The page must answer, within ~10 seconds: who Nick is, what he does, what connects his background, what he has built/written, and how to reach him.

Tone targets: understated, clear, serious, human. **Distinctive but quiet. Designed, not decorated.**

## About the Design Files
The file in this bundle — `02-data-notebook.html` — is a **design reference created in HTML**. It is a prototype showing the intended look, layout, type, spacing, and behavior. **It is not production code to ship directly.**

The current site is **Vue + Tailwind CSS**. The task is to **recreate this design in that existing environment** using its established patterns: build it as Vue single-file components, use the project's compiled Tailwind config (not the Play CDN the prototype loads), and wire links/assets to real data. Treat the HTML as the source of truth for *appearance and structure*, and translate it idiomatically into Vue.

## Fidelity
**High-fidelity (hifi).** Colors, typography, spacing, dividers, and interactions are final and intended to be matched closely. Exact values are listed under **Design Tokens** below. Recreate the UI faithfully using the codebase's Tailwind setup.

## Layout & Structure

Single scrolling page. One centered column.

- **Container:** `max-w-3xl` (768px), horizontal padding `px-6`, centered (`mx-auto`).
- **Page background:** `zinc-50` (`#fafafa`).
- **Body text color:** `zinc-800` (`#27272a`).
- **Vertical rhythm:** each section is separated by a `border-b border-zinc-200` hairline and padded `py-12` (hero `py-14`).
- **Two-column section pattern (desktop):** About, Work, Writing, and Contact use a CSS grid `md:grid-cols-[5rem_1fr]` with `gap-x-6`. The left 5rem column holds the section marker (`§01 / about`); the right column holds content. Below `md` (768px) it collapses to a single column with the marker stacked above the content.
- **Selection color:** text selection uses a 15%-opacity ink tint (`selection:bg-ink/15`).

### Sticky header (nav)
- Sticky to top, `z-10`, background `zinc-50` at 85% opacity with `backdrop-blur`, bottom hairline `border-zinc-200`.
- Inner row: `max-w-3xl`, `px-6`, `py-3`, flex space-between.
- Left: wordmark `nickhand.dev` — IBM Plex Mono, 13px, medium (500), `zinc-900`.
- Right: nav links — IBM Plex Mono, 12px, `zinc-500`, gap 20px (`gap-5`): `work`, `writing` (hidden below `sm`), `contact`, and `resume` (colored ink `#355f7d`). Hover → ink. Lowercase labels intentionally.

### Section 1 — Hero (`py-14`, bottom hairline)
1. **Metadata line** (`mb-6`, flex, items-center, `gap-3`, IBM Plex Mono 12px, `zinc-500`): the text `Philadelphia, PA` followed by a flexible 1px rule (`h-px flex-1 bg-zinc-200`) running to the right edge. Quiet and literal — no code cell here.
2. **H1:** `Nick Hand, PhD` — IBM Plex Sans, semibold (600), `text-3xl` mobile → `sm:text-[40px]` desktop, `leading-tight`, `tracking-tight`, color `zinc-900`. The `, PhD` portion is colored ink (`#355f7d`).
3. **Role line:** `Technologist, data scientist, and educator based in Philadelphia.` — Plex Sans, `text-lg` (18px), `leading-7`, `zinc-700`, `max-w-xl`, `mt-3`.
4. **Statement:** `My work focuses on data, technology, and public accountability. I care about the public sector and the practical work of making government function better.` — 15px, `leading-7`, `zinc-600`, `max-w-xl`, `mt-4`.
5. **Link pills** (`mt-7`, flex, `flex-wrap`, `gap-2`, Plex Mono 12.5px): `resume`, `github`, `linkedin`, `email` — each `rounded-sm border border-zinc-300 px-3 py-1.5 text-zinc-700`, hover border → ink. `email` is a `mailto:`; the rest link out.

### Section 2 — About (`§01 / about`)
Three paragraphs, `max-w-xl`, 15px, `leading-7`. First paragraph `zinc-700`, rest `zinc-600`, each `mt-4`. No footnote — keep the prose clean.

Copy (verbatim):
> I currently lead analytics work at Voyatek, supporting data engineering and analytics tools for IRS anti-money-laundering compliance exams. Previously, I worked as an enforcement technologist at the Consumer Financial Protection Bureau, where I focused on technology issues including AI/ML, algorithmic bias, data security, and privacy.
>
> Before that, I led the Finance, Policy, and Data unit in the Philadelphia City Controller's Office, producing public analysis on property assessments, gun violence, spending, taxes, and city operations. I have also taught geospatial data science in Python at the University of Pennsylvania.
>
> I started my career in astrophysics, earning a PhD from UC Berkeley and a BA from Princeton.

### Section 3 — Selected work (`§02 / selected work`)
A list of 4 entries inside a container with `divide-y divide-zinc-200` and top/bottom `border-y border-zinc-200`. Each entry is an `<a>` row, `py-4`, flex, `gap-4`, `items-start`:
- **Index** (`01`–`04`): Plex Mono 11px, `zinc-300`, `mt-1`.
- **Body** (flex-1):
  - Title: 16px, medium (500), `zinc-900`. On row hover → ink.
  - Description: 13.5px, `leading-6`, `zinc-600`, `max-w-md`, `mt-1`.
  - Tags: Plex Mono 11px, `zinc-400`, `mt-2`, dot-separated, lowercase-hyphenated.
- **Arrow** `→`: Plex Mono, ink, `opacity-0` by default; on row hover → `opacity-1` and translate right 3px (`transition-all`).

Entries (title — description — tags):
1. **Mapping Philadelphia's Gun Violence** — "Interactive public data project tracking shootings using public records, geospatial analysis, and web-based visualization." — `public-data · geospatial · dataviz · philadelphia`
2. **ProgressPHL** — "A neighborhood well-being dashboard developed at the Philadelphia City Controller's Office." — `civic-indicators · public-dashboard · philadelphia`
3. **Geospatial Data Science in Python** — "Course materials for a graduate course I taught at the University of Pennsylvania." — `teaching · python · geospatial · public-policy`
4. **Parking Jawn** — "An older civic data project exploring parking violations in Philadelphia." — `archived · maps · civic-data`

### Section 4 — Writing & public data (`§03 / writing & public data`)
- Intro: 15px, `leading-7`, `zinc-600`, `max-w-xl`. "The Philadelphia Citizen" is emphasized (medium, `zinc-800`).
  > Selected work for **The Philadelphia Citizen**, including an op-ed on the Consumer Financial Protection Bureau and interactive data pieces on the Philadelphia and Pennsylvania budgets.
- List (`mt-6`, `divide-y divide-zinc-200`, `border-y`, Plex Mono 13px). Each item is an `<a>`, `py-3`, flex, baseline, space-between, hover → ink:
  - `Who will protect you now?` — right meta `op-ed · cfpb` (11px, `zinc-400`)
  - `Philadelphia budget interactive` — `dataviz · city`
  - `Pennsylvania budget interactive` — `dataviz · state`

### Section 5 — Contact (`§04 / contact`)
- Line: `Email is the best way to reach me.` — Plex Sans 18px, `leading-7`, `zinc-800`.
- Email link: `nicholas.adam.hand@gmail.com` — Plex Mono 14px, ink, `mailto:`, `mt-2`.
- Pills (`mt-5`, like hero): `github`, `linkedin`, `resume`.

### Footer
- Top hairline `border-zinc-200`, `max-w-3xl`, `px-6`, `py-7`, flex space-between, Plex Mono 12px, `zinc-500`.
- Three spans: `nickhand.dev` (left), `made near the Wissahickon ♥` (center; heart is `ink` with a slow `phlbeat` pulse), `last updated 2026` (right).

## Interactions & Behavior
- **Smooth scroll** on the root (`scroll-behavior: smooth`); nav links are in-page anchors (`#work`, `#writing`, `#contact`). The `id`s live on the section elements: hero wrapper `#top`, plus `#work`, `#writing`, `#contact`.
- **Link hover:** color transitions to ink (`#355f7d`) over ~180ms. Pills transition border color to ink.
- **Work-row hover:** title → ink; arrow fades in and nudges right 3px.
- **No** typing animations, gradients, scroll-jacking, or elaborate card hovers. Keep transitions short and quiet.
- **Responsive:** single source layout; the `md:grid-cols-[5rem_1fr]` section pattern collapses to one column below 768px, markers stacking above content. The `writing` nav link hides below `sm` (640px). Mobile-first is a priority — the first screen on a phone should show name, role, statement, and the link pills without the name dominating (H1 is `text-3xl` on mobile, not larger).

### The Philadelphia map motif (signature element)
A small, accurate silhouette of Philadelphia's city limits is the site's identity mark. It appears twice:

- **Hero metadata line** — a ~40px-tall outline at the right end of the `Philadelphia, PA` rule. It **self-draws once** on load (~0.45s after paint), then sits as a quiet logo. A small brick (`#b4543a`) pin marks Nick's location in the city. *(Pin only here — the creek line is illegible at this size and is reserved for the larger Konami reveal, which carries explanatory text.)*
- **Konami payoff** (see below) — the same geometry at ~116px, redrawn each reveal.

**Geometry & accuracy.** The path is **baked from the official OpenDataPhilly “City Limits” GeoJSON** (dataset `405ec3da942d4e20869d4e1449a2be48_0`, EPSG:4326), simplified with Douglas–Peucker and projected with a cosine-corrected equirectangular projection centered at 40°N. The processed result lives in **`phl_geo.json`** (`{viewBox, width, height, cityPath, creek, pin}`); the raw source is **`city_limits.geojson`**. In the prototype it's inlined as `window.PHL_GEO`. For production: keep it baked (one `<path>`, no runtime D3) or, if you want hoverable neighborhoods later, load the GeoJSON and project live with `d3-geo`. **Do not hand-trace the outline** — Nick teaches geospatial and will spot an inaccurate shape.

**Animation.** Each `<path>` carries `pathLength="1"`; CSS sets `stroke-dasharray:1; stroke-dashoffset:1` and animates offset → 0 (`phldraw`, ~1.7s ease; creek delayed ~0.55s). The pin scales in (`phlpin`) after the outline finishes. All gated on `prefers-reduced-motion: reduce` → fully drawn, no animation. Colors: city stroke `ink #355f7d`, creek `#5b86a3`, pin `#b4543a`.

### Easter eggs (intentional — please keep)
These express personality quietly and should be preserved in the Vue build:
1. **HTML source comment** near the top of `<body>`:
   `<!-- you're reading the source. nice. the rest of the work is public too. say hi → nicholas.adam.hand@gmail.com -->`
2. **Console message** on load — two `console.log` calls (styled with `%c`, ink + zinc), printing an `In [42]: whoami` line and a short friendly "hiring for civic/public-interest data work? say hi" note with the email. In Vue, run this once in the root component's `mounted()`/`onMounted()`.
3. **Konami code** (`↑ ↑ ↓ ↓ ← → ← → B A`): reveals a fixed bottom-center **`Out [42]:`** "output cell" — a `rounded-md border border-zinc-300 bg-white/95 backdrop-blur shadow-xl` card holding the **116px Philadelphia map (drawing itself in)** on the left and, on the right, `Out [42]: you found it. / 271 steps from the Wissahickon. say hi → email`, plus a dismiss `×`. Auto-hides after 12s. In Vue, implement the keydown listener in the root component, toggle a `showEgg` ref, and (re)trigger the map draw on each reveal; clean up the listener on unmount. *(The `271` is a wink at Nick's house number — no street, so not an address. Drop it if undesired.)*
4. **Footer line** — `made near the Wissahickon ♥`, where the heart (`ink`) has a slow ~3.2s heartbeat pulse (`phlbeat`), disabled under reduced-motion.

Note: the earlier `In [42]: whoami` hero cell was **removed** — it now survives only as the console log and the Konami `Out [42]:` callback.

## State Management
Minimal. The page is essentially static content. The only stateful piece is the Konami easter egg:
- `konamiIndex` (number) — progress through the sequence.
- `showEgg` (boolean) — controls the `Out [42]:` cell visibility.
- A timeout handle to auto-hide after 12000ms; clear it on manual dismiss and on unmount.
Content (work entries, writing entries, links) is ideal to model as small arrays/objects and render with `v-for`.

## Design Tokens

**Colors**
| Token | Hex | Use |
|---|---|---|
| ink (accent) | `#355f7d` | accent: `, PhD`, links, markers, hover |
| page bg | `#fafafa` (zinc-50) | page background |
| text strong | `#18181b` (zinc-900) | H1, wordmark |
| text body | `#27272a` (zinc-800) | section lead lines |
| text muted | `#3f3f46`→`#52525b` (zinc-700/600) | role, paragraphs |
| text faint | `#71717a`/`#a1a1aa` (zinc-500/400) | meta, markers, tags |
| hairline | `#e4e4e7` (zinc-200) | dividers, borders |
| pill border | `#d4d4d8` (zinc-300) | pill/chip borders |
| index faint | `#d4d4d8` (zinc-300) | work row indices |

Define `ink` in `tailwind.config.js` under `theme.extend.colors.ink = '#355f7d'`. All other colors are stock Tailwind `zinc`.

**Typography**
- Sans: **IBM Plex Sans** (400/500/600) — body, headings.
- Mono: **IBM Plex Mono** (400/500) — markers, nav, pills, tags, meta.
- Scale used: 40px H1 (desktop) / 30px (mobile); 20px role & contact lead; 17px work titles; 16px paragraphs; 14.5px descriptions; 14px writing list; 13px mono labels/pills; 12px markers/indices/tags/meta.
- `leading-7`/`leading-6` for prose; `tracking-tight` on H1.

**Spacing**
- Container `max-w-3xl`, `px-6`.
- Section padding `py-12` (hero `py-14`); grid gutter `gap-x-6`; left marker column `5rem`.
- Common rhythm: `mt-3`, `mt-4`, `mt-5`, `mt-6`, `mt-7`.

**Radius / borders / elevation**
- Radius: `rounded-sm` (pills/chips), `rounded-md` (easter-egg card).
- Borders: 1px hairlines in `zinc-200`; pill borders `zinc-300`.
- Shadow: only the easter-egg card uses `shadow-xl`. The page deliberately avoids shadows as structure.

## Assets
- **No raster images or icon libraries** are used. Arrows (`→`) and `×` are plain Unicode glyphs. Nothing to export.
- **Fonts:** IBM Plex Sans + IBM Plex Mono. The prototype loads them from Google Fonts; in production, self-host or load via the project's existing font pipeline.
- The prototype loads Tailwind via the Play CDN (`cdn.tailwindcss.com`) — **replace with the project's compiled Tailwind build**; the CDN logs a production warning and is not for shipping.

## Files
- `02-data-notebook.html` — the high-fidelity design reference (this direction). Open it in a browser to see all states; try the Konami code and open devtools for the console egg.

## Notes / open items for the developer
- **Real links:** wire `resume`, `github`, `linkedin` to real URLs (placeholders are `#`). `email` and the contact address use `mailto:nicholas.adam.hand@gmail.com`.
- The four other explored directions (civic editorial, quiet civic, archive/index, warm personal) are not in this bundle — this hands off Option 2 only.
