# CLAUDE.md — Nittany Lion Fund Website

## What this project is
The website for the Nittany Lion Fund, a student-run investment fund at Penn State.
Goals: sophisticated and clean, tasteful animations, easy to navigate.
Because student members graduate, the site MUST be simple to maintain and hand off to future cohorts.

## Stack (do not change without discussion)
- **Astro** — static site (output: `static`). No server, no database.
- **Hosting:** GitHub Pages (free). The repo is **public**.
- **Styling:** Tailwind CSS, driven by the design tokens below.
- **Animations:** CSS plus one lightweight library (e.g. Framer Motion or GSAP core). Keep it subtle and performant.
- **Content:** stored as Markdown / MDX / JSON files in the repo (see "Content vs Code").
- **Admin editing (optional, add later):** Sveltia CMS at `/admin`, with login handled by GitHub repo access — no separate user database.

## Content vs Code (the key idea)
- **Code / design** (Claude builds this): layout, navigation, animations, design system, components. Editors never touch it.
- **Content** (easy to edit): analyst/team roster, holdings, performance, news, reports — kept as Markdown/JSON. Updating content must NEVER require editing code.

## Design system (single source of truth — use tokens, not hard-coded values)
**Brand colors (Penn State / Smeal):**
- Nittany Navy `#001E44` — primary
- White `#FFFFFF`
- Pugh Blue (Pantone 284) — secondary/accent *(paste exact hex from brand.psu.edu)*
- Beaver Blue (Pantone 287) — accent *(paste exact hex from brand.psu.edu)*
- Smeal note: Pugh Blue is elevated toward primary; Beaver Blue sits as an accent.

**Type:** one clear, professional, legible pairing; a consistent type scale (e.g. 1.25 ratio).
**Spacing, radii, motion:** define once as tokens and reuse everywhere.

## Animation rules
- Clean, subtle, purposeful — no gratuitous motion.
- Always honor `prefers-reduced-motion` with a reduced/no-motion fallback.
- Never let animation hurt load time or the critical render path.

## Accessibility (required)
- Target **WCAG 2.1 AA**.
- Every text/background pairing must meet contrast minimums.
- Full keyboard navigation, visible focus states, semantic HTML, alt text on all images.

## Performance
- Target Lighthouse 90+ across performance, accessibility, best-practices, and SEO.
- Ship minimal JavaScript, optimize images, watch page weight.

## Working conventions
- One feature at a time; commit with clear, descriptive messages.
- **Never commit secrets or API keys.** The repo is public.
- For anything sizable: propose a short plan, get approval, THEN build.
- Show evidence (dev server output / screenshot) instead of just claiming success.

## Build commands
- `npm install` — install dependencies
- `npm run dev` — local dev server
- `npm run build` — production build (static output)

## What NOT to do
- No third-party "skill" installs, no `npm install -g` of unknown tools, no running unreviewed scripts.
- No backend, database, or paid monthly service. GitHub + a domain only.
