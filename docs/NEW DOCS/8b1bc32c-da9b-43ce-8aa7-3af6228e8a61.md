# Clockout — Website & Stack

Reusable context on how clockout.us is built, where copy lives, and how the funnel is wired — for the founder and any AI coding agent working on the site.

## Site at a glance

- **Live site:** clockout.us
- **Repo:** github.com/donovinsims/clockout
- **Stack:** TanStack Start (React 19 + TanStack Router + Vite + Tailwind 4)
- **No CMS.** Copy is hardcoded in route files, data files, and shared components.

## Site map (routes live)

| Route | File | Notes |
|---|---|---|
| `/` | `src/routes/index.tsx` | Home |
| `/pricing` | `src/routes/pricing.tsx` | 3-rung offer ladder |
| `/about` | `src/routes/about.tsx` | Founder story / voice |
| `/faq` | `src/routes/faq.tsx` | Renders `src/data/faqs.ts` |
| `/assessment` | `src/routes/assessment.tsx` | Tally form → cal.com funnel entry |
| `/operator-os` | `src/routes/operator-os.tsx` | Concierge ($750/mo) home |
| `/services` | `src/routes/services.tsx` | Services index |
| `/services/{slug}` | `src/routes/services.$slug.tsx` | **ONE template for all 8 trade pages** |
| `/contact` | `src/routes/contact.tsx` | |
| `/privacy` | `src/routes/privacy.tsx` | Do not delete |
| `/terms` | `src/routes/terms.tsx` | Do not delete |

The 8 service slugs: `hvac`, `plumbing`, `roofing`, `electrical`, `landscaping`, `cleaning`, `property-management`, `real-estate`.

**Legacy/reconcile:** `src/routes/audit.tsx` and `src/routes/recovery-guide.tsx` are older funnel pages. Check them for stale "48-hour audit" / anti-retainer copy and align to the current model, or drop from nav if redundant. Do not silently delete routes.

## Where copy lives

There is no CMS — make shared changes in components/data **once**; make per-page changes in the route file.

**Data files** (`src/data/`):
- `faqs.ts` — FAQ array (drives `/faq`)
- `industries.ts` — per-trade content for the 8 service pages
- `offer.ts` — offer + pricing values/strings (Build $497 beta / $1,494 standard; Concierge $750/mo founding)
- `serviceArea.ts` — service-area content

**Shared components** (`src/components/`):
- `site/CTA.tsx`, `site/FinalCta.tsx`, `site/MobileStickyCta.tsx` — the CTA surfaces
- `site/Hero.tsx`, `site/PageHero.tsx` — hero blocks
- `site/OfferCard.tsx`, `site/FAQ.tsx`, `site/Footer.tsx`
- `ui/button.tsx` — base button

## Funnel wiring (locked)

`/assessment` short **Tally form** → on submit **redirects to `cal.com/donovin`**, prefilled with **name / email / phone** passed as URL params (Tally "redirect on completion" + answer piping → cal.com prefill params, e.g. `?name=&email=&`) → **free 20-minute call = the live audit** → **free written action plan** ~1 day later → **paid implementation** (done-with-you; client owns everything) → **optional Operator OS Concierge** ($750/mo).

- cal.com sends confirmation + reminders.
- Form submit button label: **"Grab My Call Time →"**.
- Pricing is **not** shown on `/assessment` — its single goal is booking the free call.
- **Do NOT change the Tally form ID** without Donovin.

## CTA standard + hero exception

- **Sitewide CTA** (every button linking to `/assessment`): **"Find the Money I'm Losing →"**
  - Subtext: *"Free 20-minute leak audit. Pick a time — I'll show you exactly where you're losing money."*
  - Set in `CTA.tsx`, `FinalCta.tsx`, `MobileStickyCta.tsx`.
- **EXCEPTION — homepage hero** (`Hero.tsx` / `index.tsx`) keeps its bespoke CTA: **"Get Your 10 Hours Back →"**.
- **Deliverable name:** always "audit" = the free call + the written plan. Never promise a no-call report.

The offer ladder reflected across the site: **free audit → Money-Leak Map → $497 Build → $750/mo Operator OS concierge**, with founding scarcity (8 spots / 3 left).

## Canonical copy = the Site Copy doc

Authoritative page copy lives in the Hyperagent doc **"Clockout — Site Copy (Rewrites)"** (id `cmqn6ggcr0fyt07adavuje26x`), which was exported as a spec file for the coding agent. Treat it as the source of truth for page copy. Its **"Implementation Guide — For the AI Coding Agent"** section has the authoritative file map, funnel wiring, and a global find-and-replace list (kill "no call required," "in 48 hours" / "48-hour audit," "No phone tag," "a spec sheet, not a sales funnel," and the anti-recurring stance → replace with **"No contracts. Cancel anytime. You own everything."**).

## Tools connected vs not

- **Connected:** Gmail, Google Sheets/Docs, web + deep research.
- **Not connected:** Airtable, Hunter.io, HeyGen.

## For a coding agent

- Work on a **branch and open a PR** — don't commit straight to main.
- **Don't change routes/URLs**, and don't delete `privacy` / `terms`.
- **Don't change the Tally form ID** (or the cal.com handle) without Donovin.
- **Don't fabricate proof** — testimonials/ratings in the `/assessment` and Home social-proof blocks are placeholders for real quotes; leave them as placeholders.
- Keep pricing numbers to the locked set ($497 / $1,494 / $750/mo); don't invent others.
- After changes: grep for each killed phrase (expect zero hits), confirm every `/assessment` CTA resolves to the form → cal.com flow, and verify `/pricing` renders the 3 rungs.
