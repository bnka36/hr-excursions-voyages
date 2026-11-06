# HR Excursions & Voyages

Premium showcase website for HR Excursions & Voyages (tourist transport, Morocco),
built with Next.js (App Router), Tailwind CSS v4, and MapLibre GL for the
interactive Morocco destinations map. Static site — no backend/database yet
(see "Adding a backend later" below).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 — it redirects to `/fr` (default locale).

## Content you'll likely want to edit

All real-world content lives in plain TypeScript data files, not scattered
across components — this is the main place to update things before launch:

- `src/lib/data/business.ts` — phone numbers, email, WhatsApp number. **Verify
  these against the real, confirmed numbers before publishing.**
- `src/lib/data/destinations.ts` — the 11 cities on the interactive map.
  Toggle `enabled: false` to hide one without deleting it.
- `src/lib/data/excursions.ts` — the excursion catalog (demo content pending
  validation — see the file's header comment). Toggle `published: false` to
  hide one. `priceFrom: null` renders "Sur devis" / "On request".
- `src/lib/data/vehicle.ts` — the Mercedes Vito. Add more vehicles here once
  confirmed; don't invent specs.
- `src/lib/i18n/dictionaries/{fr,en,es,ar}.ts` — all UI copy, one object per
  language, all sharing the same shape (`Dictionary` type from `fr.ts`).
- `src/lib/legal-content.ts` — placeholder legal pages (mentions légales,
  confidentialité, conditions de service). Have these reviewed by a Moroccan
  legal professional before launch.

Photography: pages currently use `PlaceholderPhoto` (an on-brand generated
gradient) wherever a real photo belongs — vehicle, destinations, excursions,
hero banners. Swap these for real photos via `next/image` once available;
search for `PlaceholderPhoto` usages to find every spot.

## Architecture notes

- **Routing**: `app/[locale]/...` — one route tree serves all 4 languages
  (fr/en/es/ar), per [Next.js's documented i18n pattern](https://nextjs.org/docs/app/guides/internationalization).
  URL path segments (`/transferts`, `/excursions`, ...) stay the same across
  locales; only the copy changes.
- **No backend yet**: quote/booking/partner forms build a pre-filled WhatsApp
  (`wa.me`) or `mailto:` link client-side — no server, no database, no
  third-party form service.
- **Map**: `src/components/map/MoroccoMap.tsx` renders a bespoke MapLibre GL
  style (no external basemap/tiles — just the Morocco silhouette from
  `public/data/morocco.geojson`, MIT-licensed data via `@geo-maps/*`, plus
  the destination markers). `scripts/copy-maplibre-worker.mjs` copies
  maplibre's web worker into `/public` at `postinstall` time — Turbopack
  doesn't resolve maplibre's own worker asset reference, so this is required;
  don't remove it.

## Adding a backend later

The brief this site was built from calls for a real admin dashboard,
persisted bookings, and B2B lead storage eventually. The data layer
(`src/lib/data/*`) is already shaped like what a CMS/database would return,
so the natural next step is to swap those static arrays for real
fetches (e.g. from Neon/Postgres via a few server actions or API routes) one
entity at a time, starting with whichever matters most — without touching
the page/component layer.

## Deploying

Static Next.js app, deployable to Vercel like any other. No environment
variables are required for the current (backend-less) version.
