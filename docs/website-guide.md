# Website Guide

> **Last updated:** June 18, 2026
> **Production URL:** clockout.us
> **Deployment:** Vercel (via Nitro SSR)

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Framework** | TanStack Start (SSR) + React | React 19.2 / Start 1.167.50 |
| **Routing** | TanStack Router (file-based) | 1.168.25 |
| **Data Fetching** | TanStack React Query | 5.83.0 |
| **Styling** | Tailwind CSS v4 + tw-animate-css | 4.2.1 |
| **UI Library** | shadcn/ui (New York style, Radix primitives) | via CVA |
| **Icons** | Lucide React | 1.18.0 |
| **Animation** | Motion (Framer Motion successor) | 12.40.0 |
| **Forms** | React Hook Form + Zod | 7.71.2 / 3.24.2 |
| **Build** | Vite 7 + Nitro SSR | 7.3.1 |
| **Runtime** | Bun | — |
| **Language** | TypeScript (strict) | 5.8.3 |
| **Linting** | ESLint 9 flat config + Prettier | — |
| **Toasts** | Sonner | 2.0.7 |

### Key Technical Decisions
- **No `tailwind.config.js`** — Tailwind v4 uses CSS-driven config via `@theme inline` in `src/styles.css`
- **File-based routing** in `src/routes/` — matches URL pattern 1:1 (except `$slug` params)
- **No server backend** — static site + Tally.so form embed. No database, no API routes.
- **Workflow automation tools mentioned on site:** GoHighLevel, Make, n8n, OpenAI, Twilio, Google APIs
- **Deployment target:** Vercel (via Nitro's Vercel preset)

---

## File Structure

```
src/
  lib/utils.ts              # cn() — clsx + tailwind-merge
  lib/config.server.ts      # Server-only env config
  lib/error-capture.ts      # SSR error capture
  lib/error-page.ts         # SSR error page renderer
  lib/api/example.functions.ts  # Server function pattern (unused)
  components/
    site/                   # 18 custom page components
    ui/                     # 49 shadcn/ui components (many unused)
  data/                     # Static content (faqs, industries, offer, serviceArea)
  routes/                   # 13 route files
  styles.css                # Tailwind v4 + design tokens + custom utilities
  router.tsx                # Router instance (do not import directly)
  start.ts                  # TanStack Start instance with middleware
  server.ts                 # SSR entrypoint (Vercel fetch handler)
```

---

## Routes

| File | URL | Description |
|------|-----|-------------|
| `__root.tsx` | (shell) | Root layout — SEO meta, fonts, error pages, `<Outlet />` |
| `index.tsx` | `/` | Homepage — hero, process, calculator, pricing, industries |
| `about.tsx` | `/about` | Founder story — Donovin Sims background |
| `services.tsx` | `/services` | Redirects → `/services/hvac` |
| `services.$slug.tsx` | `/services/:slug` | Dynamic industry landing pages (8 industries) |
| `pricing.tsx` | `/pricing` | Pricing page — $497 beta vs agencies comparison table |
| `faq.tsx` | `/faq` | Full FAQ — all 12 questions |
| `blog.tsx` | `/blog` | Blog index — placeholder posts |
| `contact.tsx` | `/contact` | Contact form (mailto: fallback, no server) |
| `assessment.tsx` | `/assessment` | Lead-gen form — Tally.so embed |
| `audit.tsx` | `/audit` | Redirects → `/assessment` |
| `operator-os.tsx` | `/operator-os` | Operator OS product landing page |
| `privacy.tsx` | `/privacy` | Privacy policy |
| `terms.tsx` | `/terms` | Terms of service |

---

## Key Components

### Site Components (`src/components/site/`)

| Component | Purpose | Notes |
|-----------|---------|-------|
| `SiteShell` | Page wrapper — skip link, Header, `<main>`, Footer, optional sticky CTA | Used by all pages |
| `Header` | Sticky nav — logo, links, industries dropdown, phone, CTA, mobile sheet | Self-contained |
| `Footer` | 4-column footer — brand, industries, pages, service area | Self-contained |
| `Hero` | Homepage hero — headline, CTA, BetaSpots, founder card | Homepage only |
| `PageHero` | Generic hero for sub-routes | Configurable eyebrow/headline/CTAs |
| `HowItWorks` | 3-step process (Audit / Build / Handover) | Reusable |
| `LeakCalculator` | Interactive revenue leak calculator | Animated, homepage |
| `OfferCard` | Pricing card — beta price, outcomes, guarantee | Reused on pricing page |
| `IndustryGrid` | Industry cards + pill-link grid | Homepage |
| `SocialProof` | Trust signals — 3 cards + case study placeholder | Homepage |
| `ProofBar` | Stats row | Industry pages |
| `FounderProof` | Founder bio + tool list | Homepage |
| `GuaranteeBlock` | Guarantee section with shield icon | About, pricing pages |
| `ToolsStrip` | "Built inside" tool name strip (7 tools) | Homepage |
| `CTA` | Reusable CTA link/button (4 variants, 3 sizes) | Site-wide |
| `BetaSpots` | "X of Y beta spots remain" animated pill | Site-wide |
| `FAQ` | Accordion FAQ | Homepage, pricing, dedicated page |
| `FinalCta` | Bottom-of-page CTA section | Most pages |

---

## Design System

### Colors (OKLCH)
Primary (green): `oklch(0.48 0.13 160)` — buttons, links, headings, accents
Signal (amber): `oklch(0.65 0.16 55)` — scarcity/urgency (used sparingly in BetaSpots only)

Full color palette in `src/styles.css` `@theme inline` block.

### Typography
- **Display/Sans:** Geist (300–700 weight) — all headings and body text
- **Mono:** JetBrains Mono (400–600) — phone numbers, stats, prices, code
- **Hero heading:** `clamp(2.4rem, 5.5vw, 4.25rem)` via inline style
- **Section headings:** `text-4xl md:text-5xl`

### Spacing
- Content max-width: 1200px (via `container-x` utility)
- Section padding: `py-16 md:py-20` or `py-20 md:py-28`
- Cards: `p-6` default

### Border Radius
- Standard cards/buttons: `rounded-[12px]` (12px)
- Small elements: `--radius-sm` (8px)
- Large: `--radius-xl` (16px)

### Responsive Breakpoints
- Mobile: `< 768px` (single column, sheet nav, sticky FAB)
- Desktop: `768px+` (multi-column, horizontal nav)
- No tablet-specific breakpoint

---

## Page Layout (Standard)

```
┌──────────────────────────────────────┐
│  Skip Link (visually hidden, focus)  │
├──────────────────────────────────────┤
│  Header (sticky, z-50, blur backdrop)│
│  ┌──Logo──[Nav]────────Phone──CTA──┐ │
│  │        Industries ▼              │ │
│  └──────────────────────────────────┘ │
├──────────────────────────────────────┤
│  <main id="main-content" flex-1>     │
│  ┌────────────────────────────────┐  │
│  │  [Hero Section]                │  │
│  │  [Content Sections]            │  │
│  │  [Final CTA]                   │  │
│  └────────────────────────────────┘  │
├──────────────────────────────────────┤
│  Footer (4-column)                   │
└──────────────────────────────────────┘
│  MobileStickyCta (FAB, bottom-right) │
```

---

## Schema.org / Structured Data

Present on key pages:
- **`/`**: FAQPage schema (first 8 FAQs)
- **`/about`**: Person schema (Donovin Sims)
- **`/faq`**: FAQPage schema (all 12 FAQs)
- **Industry pages**: Service, LocalBusiness schemas

---

## Key Conversion Paths

1. **Homepage → Assessment form → Lead capture** (primary)
2. **Homepage → SMS "AUDIT" → Text conversation**
3. **Industry pages → Assessment form → Lead capture**
4. **Pricing → Assessment form → Lead capture**
5. **All pages → Final CTA → Assessment form**
6. **All pages → Header phone call → Phone conversation**

### Current Limitations
- No backend API / database — leads captured via Tally.so only
- Contact form has no server endpoint — falls back to `mailto:`
- No analytics installed
- No email capture / newsletter
- Blog is placeholder content only

---

## External Integrations

| Integration | Purpose | Implementation |
|-------------|---------|----------------|
| Tally.so | Lead-gen assessment form | Lazy-loaded iframe on `/assessment` |
| Google Fonts | Geist + JetBrains Mono | Preconnect + stylesheet in root |
| Cloudflare R2 | OG image hosting | Static PNG for social sharing |

---

## Known Technical Debt & Optimizations

- 49 shadcn/ui components installed, ~10 used — rest are dead weight
- Phone number constants duplicated across Header and Footer
- `vite.config.ts` uses Lovable config preset — avoid modifying directly
- No image optimization pipeline
- No `prefers-reduced-motion` support
- No CSP headers configured
- OG image URL needs replacing before going live (marked TODO in `__root.tsx`)
