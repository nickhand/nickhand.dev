# Recent changes — since first handoff

The reference file `02-data-notebook.html`, `README.md`, and the geometry files are the source of truth. If you implemented an earlier version, apply these deltas (or just re-diff your Vue components against the current `02-data-notebook.html`).

### Text / type / contrast
1. **Removed the About footnote** — no superscript and no footnote block.
2. **Type scale up one step** — role/contact lead 20px, body paragraphs 16px (`leading-8`), work titles 17px, descriptions 14.5px, writing list 14px, mono labels/pills 13px, markers/indices/tags 12px.
3. **Raised contrast** — work row indices and §-markers/tags to `zinc-500`; section-marker labels to `zinc-600`.
4. **“Résumé” → “resume”** everywhere (no accents): nav, hero pills, contact links.
5. **Writing rows hover** — each row link is `.wlink`; on hover the title (`.wt`) → ink `#355f7d` + `translateX(2px)`, the meta (`.wm`) → `#52525b`, 0.18s transition.

### `In [42]` motif
6. **Removed the `In [42]: whoami` hero/footer cell entirely.** The motif now survives **only** in (a) the on-load console log and (b) the Konami `Out [42]:` callback.

### NEW — Philadelphia map motif (signature element)
7. An **accurate Philadelphia city-limits silhouette**, baked from the official OpenDataPhilly “City Limits” GeoJSON. Geometry files included: `phl_geo.json` (processed: `{viewBox, width, height, cityPath, creek, pin}`) and `city_limits.geojson` (raw source). In the prototype it’s inlined as `window.PHL_GEO`.
   - **Hero:** ~40px outline at the end of the `Philadelphia, PA` rule, self-draws once on load, with a **brick pin** marking Nick’s location. **Pin only** here — the creek line is illegible at this size and was deliberately removed from the hero.
   - **Konami payoff:** the `Out [42]:` card holds the ~116px map drawing itself in — outline **+ Wissahickon Creek line + pin** — beside the text `Out [42]: you found it. / 271 steps from the Wissahickon. say hi → email`. Auto-hides after 12s.
   - **Drawing:** each `<path>` has `pathLength="1"`; CSS animates `stroke-dashoffset` 1→0 (`phldraw` ~1.7s; creek delayed ~0.55s); pin scales in after. All gated on `prefers-reduced-motion: reduce` → fully drawn, no animation.
   - Colors: city stroke `ink #355f7d`, creek `#5b86a3`, pin `#b4543a`. Full spec in README → “The Philadelphia map motif”.
   - **Keep it baked** (one static `<path>`, no runtime D3). Only load the GeoJSON + `d3-geo` live if you later want hoverable neighborhoods. **Do not hand-trace the outline.**

### Footer
8. Added centered **`made near the Wissahickon ♥`**; the heart (ink) has a slow ~3.2s heartbeat (`phlbeat`), disabled under reduced-motion.
9. **Footer is responsive:** `flex-col items-center` (stacked, centered) by default, becoming `sm:flex-row sm:justify-between` at ≥640px. Fixes mobile cramping of the three labels.

### Housekeeping
10. A tiny `window 'error'` listener swallows the benign **“ResizeObserver loop”** browser notice so the console stays clean. Harmless to port or omit.

### Open decisions (confirm with Nick)
- **“271 steps from the Wissahickon”** is a wink at Nick’s house number (no street, so not an address). Keep or drop.
- The pin sits at the **public park area**, deliberately not Nick’s block — keep it that way.

Everything else (layout, sections, copy, design tokens, HTML source comment, console egg) is unchanged from `README.md`.
