# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build (also catches TypeScript errors)
npm run lint     # run ESLint
```

There are no tests. `npm run build` is the best way to catch compile errors before committing.

## Architecture

**Content lives entirely in `lib/*.ts` — not in pages or components.**

Each section (projects, education, work, volunteer) has its own file:
- `lib/projects.ts` — exports `PROJECTS: Project[]`, `getProject(slug)`, `resolveProjectSlug(slug)`
- `lib/education.ts`, `lib/work.ts`, `lib/volunteer.ts` — same pattern with their own types

To add or edit content, modify only those arrays. Pages read from them at build time — no database, no CMS.

**Routing follows a consistent pattern across all four sections:**

- `/section` — list page, reads the full array directly from `lib/`
- `/section/[slug]` — detail page, calls `getProject(slug)` (or equivalent), redirects canonical aliases, returns `notFound()` if missing. All detail pages use `dynamicParams = false` and `generateStaticParams()` so they're fully static.

**Layout:** `app/layout.tsx` wraps everything in `<AppShell>`, which renders a sticky `<Sidebar>` on desktop and a slide-in drawer on mobile. `<AutoAccent>` (also in layout) runs a `requestAnimationFrame` loop that updates `--accent-h` on `<html>` once per minute, driving the hue-shift across the whole design.

**Design system:** All visual tokens are CSS custom properties defined in `app/globals.css` — `--bg`, `--fg`, `--muted`, `--border`, `--surface`, `--surface-2`, `--accent`, `--accent-2`, `--accent-3`. Accent colors are derived from `--accent-h` (a `@property`-registered hue value). Dark mode is the default; light mode applies via `@media (prefers-color-scheme: light)` or `html[data-theme="light"]`. There is no Tailwind config file — Tailwind v4 is configured through `postcss.config.mjs` and `@import "tailwindcss"` in globals.css.

**Shared component: `EntryCard`** — used on the home page preview sections and list pages for education, work, and volunteer. Takes `href`, `eyebrow`, `title`, `meta`, `summary`, `chips[]`.

**`ProjectVisual`** — used on `/projects` list and `/projects/[slug]` detail. Renders a gradient hero header with an icon, thumbnail, and optional KPI strip. The `compact` prop reduces sizing for the list view.

## Adding a new project

1. Add an SVG thumbnail to `public/`
2. Add an entry to the `PROJECTS` array in `lib/projects.ts` — fill `slug`, `title`, `tagline`, `thumbnail`, `stack`, `overview`, `problem`, `solution[]`, `impact[]`, and optionally `visual.icon`, `visual.kpis[]`, `architecture[]`
3. No page changes needed — `generateStaticParams` picks up new slugs automatically

## Adding a new section (e.g. certifications)

Follow the established pattern: create `lib/certifications.ts` with a typed array + `get` / `resolve` helpers, add `app/certifications/page.tsx` (list) and `app/certifications/[slug]/page.tsx` (detail with `dynamicParams = false`), add a nav item to `Sidebar.tsx`.
