# Codebase Documentation — Clockout Website

> **Generated:** June 16, 2026  
> **Project:** Clockout — Done-for-you automation for local service businesses  
> **Codebase:** `/Users/forex/launch`  
> **Total Files:** 86 (excluding `node_modules`, `.next`, `build`, `.git`, `dist`, `.vinxi`, `.output`, `bun.lock`)

---

## Project Overview

### Technology Stack Summary

| Layer               | Technology                         | Version                                          |
| ------------------- | ---------------------------------- | ------------------------------------------------ |
| **Framework**       | React (TanStack Start)             | React 19.2, `@tanstack/react-start` 1.167.50     |
| **Routing**         | TanStack Router                    | 1.168.25 (file-based, auto-generated route tree) |
| **Data Fetching**   | TanStack React Query               | 5.83.0                                           |
| **Build Tool**      | Vite                               | 7.3.1                                            |
| **Language**        | TypeScript                         | 5.8.3                                            |
| **Styling**         | Tailwind CSS v4 + `tw-animate-css` | 4.2.1                                            |
| **UI Library**      | shadcn/ui (New York style)         | via Radix + CVA                                  |
| **Form Handling**   | React Hook Form + Zod              | 7.71.2 / 3.24.2                                  |
| **Icons**           | Lucide React                       | 1.18.0                                           |
| **Animation**       | Motion (Framer Motion)             | 12.40.0                                          |
| **Package Manager** | Bun                                | with `bunfig.toml`                               |
| **Server Target**   | Cloudflare Workers (Nitro)         | Nitro 3.0.260603-beta                            |
| **Linting**         | ESLint 9 + Prettier                | Flat config                                      |
| **Error Tracking**  | Lovable error reporting            | `@lovable.dev/vite-tanstack-config` 2.3.2        |
| **Calendar**        | react-day-picker                   | 9.14.0                                           |
| **Charts**          | Recharts                           | 2.15.4                                           |
| **Toast**           | Sonner                             | 2.0.7                                            |

### Project Architecture

```
┌──────────────────────────────────────────┐
│           Cloudflare Worker               │
│         (Nitro serverless)                │
│                                           │
│  ┌───────────┐  ┌──────────────────────┐  │
│  │ server.ts  │  │  start.ts           │  │
│  │ (entry)    │  │  (middleware setup)  │  │
│  └─────┬─────┘  └──────────┬───────────┘  │
│        │                   │                │
│        └───────────────────┘                │
│                │                            │
│  ┌─────────────▼────────────────────────┐   │
│  │      TanStack Router + Client        │   │
│  │  ┌─────────────────────────────────┐  │   │
│  │  │  __root.tsx (SEO, Head, Layout) │  │   │
│  │  │  QueryClientProvider            │  │   │
│  │  │  + Toaster                     │  │   │
│  │  └──────────┬──────────────────────┘  │   │
│  │             │                          │   │
│  │  ┌──────────▼──────────┐              │   │
│  │  │    <Outlet />       │              │   │
│  │  │  (page content)     │              │   │
│  │  └────────────────────┘              │   │
│  └─────────────────────────────────────┘   │
└──────────────────────────────────────────┘
```

### Build & Deployment Process

- **Dev:** `bun run dev` → Vite dev server on `localhost:3000`
- **Build:** `bun run build` → Vite + Nitro build for Cloudflare Workers
- **Preview:** `bun run preview` → Vite preview
- **Lint:** `bun run lint` → ESLint flat config
- **Format:** `bun run format` → Prettier

No Vercel config file exists — deployment targets Cloudflare Workers via Nitro.

---

## File Structure

### Complete Directory Tree

```
/Users/forex/launch/
├── .gitignore                          # Git ignore rules
├── .lovable/
│   └── project.json                    # Lovable project metadata
├── .prettierignore                     # Prettier ignore rules
├── .prettierrc                         # Prettier config (100-width, double quotes, trailing commas)
├── bunfig.toml                         # Bun install config (24-hr supply chain guard)
├── components.json                     # shadcn/ui configuration (New York style)
├── eslint.config.js                    # ESLint flat config (TS strict + Prettier)
├── package.json                        # Dependencies & scripts
├── tsconfig.json                       # TypeScript config (ES2022, bundler mode, strict)
├── vite.config.ts                      # Vite config (via @lovable.dev/vite-tanstack-config)
│
└── src/
    ├── start.ts                        # TanStack Start entry + error middleware
    ├── server.ts                       # Cloudflare Worker fetch handler
    ├── styles.css                      # Global CSS: Tailwind v4, design tokens, utilities
    ├── router.tsx                      # TanStack Router instance + QueryClient
    ├── routeTree.gen.ts                # Auto-generated route tree manifest
    │
    ├── components/
    │   ├── site/                       # 18 custom site components
    │   │   ├── SiteShell.tsx           #   Page shell (header + main + footer + optional sticky CTA)
    │   │   ├── Header.tsx              #   Sticky header (nav, industries dropdown, phone, CTA, mobile sheet)
    │   │   ├── Footer.tsx              #   4-column footer (brand, industries, pages, service area)
    │   │   ├── Hero.tsx                #   Homepage hero (headline, CTA, beta spots, founder card)
    │   │   ├── PageHero.tsx            #   Generic page hero (eyebrow, headline, sub, CTAs)
    │   │   ├── FinalCta.tsx            #   Bottom-of-page CTA section
    │   │   ├── HowItWorks.tsx          #   3-step process section (Audit/Build/Handover)
    │   │   ├── LeakCalculator.tsx      #   Interactive revenue leak calculator with motion animation
    │   │   ├── OfferCard.tsx           #   Pricing card (beta price, outcomes, guarantee)
    │   │   ├── IndustryGrid.tsx        #   Featured industry card + pill-link grid
    │   │   ├── SocialProof.tsx         #   Placeholder case studies (3 "Currently in build" cards)
    │   │   ├── ProofBar.tsx            #   Stats row (configurable stat boxes)
    │   │   ├── FounderProof.tsx        #   Founder bio + tool list
    │   │   ├── GuaranteeBlock.tsx      #   Guarantee section with shield icon
    │   │   ├── ToolsStrip.tsx          #   "Built inside" tool name strip
    │   │   ├── CTA.tsx                 #   Reusable CTA link/button (4 variants, 3 sizes)
    │   │   ├── BetaSpots.tsx           #   Animated scarcity pill ("X of Y beta spots remain")
    │   │   ├── ImageWithFallback.tsx   #   Image with dashed placeholder fallback
    │   │   ├── FAQ.tsx                 #   Accordion FAQ section
    │   │   └── FacebookIcon.tsx        #   Inline Facebook SVG icon
    │   │
    │   └── ui/                         # 49 shadcn/ui components (Radix-based)
    │       ├── accordion.tsx           #   Collapsible accordion
    │       ├── alert-dialog.tsx        #   Confirmation dialog
    │       ├── alert.tsx               #   Inline alert/notice
    │       ├── aspect-ratio.tsx        #   Aspect ratio container
    │       ├── avatar.tsx              #   Avatar with fallback
    │       ├── badge.tsx               #   Status badge/pill
    │       ├── breadcrumb.tsx          #   Semantic breadcrumb nav
    │       ├── button.tsx              #   Core CTA button (variants, sizes, asChild)
    │       ├── calendar.tsx            #   Date picker (react-day-picker)
    │       ├── card.tsx                #   Content card container
    │       ├── carousel.tsx            #   Embla carousel
    │       ├── chart.tsx               #   Recharts wrapper (ChartContainer, Tooltip, Legend)
    │       ├── checkbox.tsx            #   Checkbox input
    │       ├── collapsible.tsx         #   Expand/collapse toggle
    │       ├── command.tsx             #   Command palette (cmdk)
    │       ├── context-menu.tsx        #   Right-click context menu
    │       ├── dialog.tsx              #   Modal dialog
    │       ├── drawer.tsx              #   Mobile bottom drawer (vaul)
    │       ├── dropdown-menu.tsx       #   Dropdown menu
    │       ├── form.tsx                #   React Hook Form adapter
    │       ├── hover-card.tsx          #   Hover popover card
    │       ├── input-otp.tsx           #   OTP code input
    │       ├── input.tsx               #   Text input
    │       ├── label.tsx               #   Form label
    │       ├── menubar.tsx             #   Desktop menu bar
    │       ├── navigation-menu.tsx     #   Navigation menu (used in Header)
    │       ├── pagination.tsx          #   Page navigation
    │       ├── popover.tsx             #   Floating popover
    │       ├── progress.tsx            #   Progress bar
    │       ├── radio-group.tsx         #   Radio button group
    │       ├── resizable.tsx           #   Split panels
    │       ├── scroll-area.tsx         #   Custom scroll area
    │       ├── select.tsx              #   Native-like select
    │       ├── separator.tsx           #   Visual divider
    │       ├── sheet.tsx               #   Side panel (used in Header mobile)
    │       ├── sidebar.tsx             #   App shell sidebar (740 lines, complex)
    │       ├── skeleton.tsx            #   Loading skeleton
    │       ├── slider.tsx              #   Range slider
    │       ├── sonner.tsx              #   Toast provider
    │       ├── switch.tsx              #   Toggle switch
    │       ├── table.tsx               #   Semantic table
    │       ├── tabs.tsx                #   Tabbed interface
    │       ├── textarea.tsx            #   Multiline input
    │       ├── toggle-group.tsx        #   Toggle button group
    │       ├── toggle.tsx              #   Toggle button
    │       └── tooltip.tsx             #   Hover tooltip
    │
    ├── data/                           # 4 static data files
    │   ├── offer.ts                    # Pricing/config data ($497 beta, spots, guarantees)
    │   ├── faqs.ts                     # 12 FAQ items
    │   ├── serviceArea.ts              # Geographic service area (6 towns + region)
    │   └── industries.ts               # 8 industry profiles (HVAC, plumbing, etc.)
    │
    ├── hooks/
    │   └── use-mobile.tsx              # useIsMobile() hook (768px breakpoint)
    │
    ├── lib/
    │   ├── utils.ts                    # cn() — Tailwind class merge utility
    │   ├── config.server.ts            # Server env config (process.env wrapper)
    │   ├── error-capture.ts            # SSR error capture (global listeners)
    │   ├── error-page.ts               # Fallback HTML error page renderer
    │   ├── lovable-error-reporting.ts  # Lovable error bridge
    │   └── api/
    │       └── example.functions.ts    # Example TanStack server function
    │
    ├── imports/
    │   └── about-me-section.md         # Markdown import (Donovin's bio)
    │
    └── routes/                         # 13 route files
        ├── __root.tsx                  # Root layout (SEO, fonts, error/404 pages)
        ├── index.tsx                   # Homepage (/)
        ├── about.tsx                   # About/founder story (/about)
        ├── services.tsx                # Redirect → /services/hvac
        ├── services.$slug.tsx          # Dynamic industry landing (/services/hvac, etc.)
        ├── pricing.tsx                 # Pricing page (/pricing)
        ├── faq.tsx                     # Full FAQ page (/faq)
        ├── blog.tsx                    # Blog index (/blog, all placeholder)
        ├── contact.tsx                 # Contact form (/contact)
        ├── assessment.tsx              # Lead-gen assessment form (/assessment)
        ├── audit.tsx                   # Redirect → /assessment
        ├── operator-os.tsx             # Operator OS product page (/operator-os)
        ├── privacy.tsx                 # Privacy policy (/privacy)
        └── terms.tsx                   # Terms of service (/terms)
```

---

## Components Reference

### Site Components (`src/components/site/`)

#### Shell & Layout

| Component           | File                  | Purpose                                                                          | Props                                          | State                                             | Dependencies                                |
| ------------------- | --------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------- | ------------------------------------------- |
| **SiteShell**       | `SiteShell.tsx`       | Page wrapper: skip link, Header, `<main>`, Footer, optional MobileStickyCta      | `{ children: ReactNode; stickyCta?: boolean }` | None                                              | Header, Footer, MobileStickyCta             |
| **Header**          | `Header.tsx`          | Sticky site header with logo, nav, Industries dropdown, phone, CTA, mobile sheet | None (self-contained)                          | `scrolled` (scroll shadow), `open` (mobile sheet) | NavigationMenu, Sheet, CTA, industries data |
| **Footer**          | `Footer.tsx`          | 4-column footer with brand, industries, pages, service area                      | None                                           | None                                              | industries data, lucide icons               |
| **MobileStickyCta** | `MobileStickyCta.tsx` | Floating FAB (calendar icon) bottom-right on mobile, auto-hides on scroll        | None                                           | `visible` (scroll-based)                          | lucide icons                                |

#### Hero Sections

| Component    | File           | Purpose                                                                                 | Props                                                     |
| ------------ | -------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| **Hero**     | `Hero.tsx`     | Homepage hero: eyebrow, heading (clamp font), description, CTA, BetaSpots, founder card | None                                                      |
| **PageHero** | `PageHero.tsx` | Generic page hero for sub-routes                                                        | `{ eyebrow?, headline, sub, primaryCta?, secondaryCta? }` |
| **FinalCta** | `FinalCta.tsx` | Bottom-of-page CTA with headline, subtext, audit button, SMS line                       | `{ headline?, sub? }`                                     |

#### Content Sections

| Component          | File                 | Purpose                                                     | Props                                          |
| ------------------ | -------------------- | ----------------------------------------------------------- | ---------------------------------------------- |
| **HowItWorks**     | `HowItWorks.tsx`     | 3-step process (Audit/Build/Handover) with artifacts        | None                                           |
| **LeakCalculator** | `LeakCalculator.tsx` | Interactive revenue leak calculator with motion animation   | None                                           |
| **OfferCard**      | `OfferCard.tsx`      | Pricing card with beta price, outcomes checklist, guarantee | `{ compact?: boolean }`                        |
| **IndustryGrid**   | `IndustryGrid.tsx`   | Featured industry card + pill-link grid for all industries  | `{ heading?: boolean }`                        |
| **SocialProof**    | `SocialProof.tsx`    | Placeholder case studies (3 "Currently in build" cards)     | None                                           |
| **ProofBar**       | `ProofBar.tsx`       | Stats row with configurable stat boxes                      | `{ stats: { stat: string; label: string }[] }` |
| **FounderProof**   | `FounderProof.tsx`   | Founder bio section with ops background story and tool tags | None                                           |
| **GuaranteeBlock** | `GuaranteeBlock.tsx` | Guarantee section with shield icon, data-driven text        | None                                           |
| **ToolsStrip**     | `ToolsStrip.tsx`     | "Built inside" tool name strip (7 tools)                    | None                                           |
| **FAQ**            | `FAQ.tsx`            | Accordion FAQ section using shadcn Accordion                | `{ items?: { q: string; a: string }[] }`       |

#### Reusable Elements

| Component             | File                    | Purpose                                                                             | Props                                                       |
| --------------------- | ----------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **CTA**               | `CTA.tsx`               | Primary call-to-action link/button (4 variants, 3 sizes, renders `<a>` or `<Link>`) | `{ to?, href?, variant?, size?, className?, children }`     |
| **CTAButton**         | (same file)             | `<button>` variant of CTA                                                           | `{ variant?, size?, className?, children, ...buttonAttrs }` |
| **BetaSpots**         | `BetaSpots.tsx`         | Animated "X of Y beta spots remain" pill with pulsing dot                           | `{ className?: string }`                                    |
| **ImageWithFallback** | `ImageWithFallback.tsx` | Image with dashed placeholder fallback on error                                     | `{ src?, alt, width?, height?, label?, className? }`        |
| **FacebookIcon**      | `FacebookIcon.tsx`      | Inline Facebook SVG icon                                                            | `{ className?: string }`                                    |

### UI Components (`src/components/ui/`)

49 shadcn/ui components. All follow the same pattern:

- Import `cn` from `@/lib/utils` for class merging
- Use `React.forwardRef` for ref forwarding
- Apply Tailwind classes via `cn()`
- Use `cva` (class-variance-authority) for variant management where applicable
- Wrap Radix UI primitives for accessibility

**Key components used by site pages:**

- `button.tsx`, `card.tsx`, `badge.tsx`, `accordion.tsx`, `sheet.tsx`, `navigation-menu.tsx`, `avatar.tsx`, `skeleton.tsx`, `separator.tsx`

---

## Pages Reference

| Route             | File                 | Description                                               | Components Used                                                                                               | Data Source                                            |
| ----------------- | -------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| `/`               | `index.tsx`          | Homepage — marketing landing for Clockout's core offering | SiteShell, Hero, ToolsStrip, HowItWorks, FounderProof, LeakCalculator, OfferCard, IndustryGrid, FAQ, FinalCta | faqs (first 8)                                         |
| `/about`          | `about.tsx`          | Founder story page — Donovin Sims' background             | SiteShell, ImageWithFallback, CTA, GuaranteeBlock, FacebookIcon                                               | Static content, about-me-section.md import             |
| `/services`       | `services.tsx`       | Redirect only → `/services/hvac`                          | None                                                                                                          | N/A                                                    |
| `/services/$slug` | `services.$slug.tsx` | Dynamic industry landing pages (HVAC, plumbing, etc.)     | SiteShell, ProofBar, HowItWorks, OfferCard, GuaranteeBlock, FinalCta, CTA, BetaSpots                          | industries data via `getIndustry()` loader             |
| `/pricing`        | `pricing.tsx`        | Pricing page — $497 beta vs SAAS comparison               | SiteShell, OfferCard, GuaranteeBlock, FinalCta                                                                | Static compareRows, faqs (first 6)                     |
| `/faq`            | `faq.tsx`            | Full FAQ page — all 12 FAQs                               | SiteShell, FinalCta                                                                                           | faqs (all 12)                                          |
| `/blog`           | `blog.tsx`           | Blog index — placeholder "Coming soon" posts              | SiteShell, FinalCta                                                                                           | Hardcoded posts array (5 placeholder)                  |
| `/contact`        | `contact.tsx`        | Contact form — name, email, message                       | SiteShell, CTAButton                                                                                          | react-hook-form + zod (mailto: fallback)               |
| `/assessment`     | `assessment.tsx`     | Lead-gen page — Tally.so embed form                       | SiteShell, GuaranteeBlock, BetaSpots                                                                          | Tally.so iframe (lazy-loaded via IntersectionObserver) |
| `/audit`          | `audit.tsx`          | Redirect only → `/assessment`                             | None                                                                                                          | N/A                                                    |
| `/operator-os`    | `operator-os.tsx`    | Product page — Operator OS productivity system            | SiteShell, CTA, FinalCta                                                                                      | Static content arrays                                  |
| `/privacy`        | `privacy.tsx`        | Privacy policy — plain language                           | SiteShell                                                                                                     | Static content                                         |
| `/terms`          | `terms.tsx`          | Terms of service                                          | SiteShell                                                                                                     | Static content                                         |

---

## UX/UI Design System

### Visual Design Elements

#### Color Palette

All colors are defined in OKLCH in `src/styles.css` at `:root` level, then aliased through Tailwind's `@theme inline` directive.

**Primary Brand Colors:**

| Token                  | OKLCH Value             | Hex Approx | Usage                                        |
| ---------------------- | ----------------------- | ---------- | -------------------------------------------- |
| `--primary`            | `oklch(0.48 0.13 160)`  | ~#2E7D5B   | Buttons, links, headings, accents, selection |
| `--primary-hover`      | `oklch(0.42 0.14 160)`  | ~#25694A   | Button hover state                           |
| `--primary-foreground` | `oklch(0.98 0.005 150)` | ~#FAFCF8   | Text on primary backgrounds                  |

**Background & Surface:**

| Token          | OKLCH Value              | Usage                                  |
| -------------- | ------------------------ | -------------------------------------- |
| `--background` | `oklch(1 0 0)`           | Page background (white)                |
| `--foreground` | `oklch(0.18 0.02 160)`   | Body text (near-black with green tint) |
| `--surface`    | `oklch(0.985 0.005 150)` | Section backgrounds, card surfaces     |
| `--surface-2`  | `oklch(0.96 0.008 150)`  | Slightly deeper surface variant        |
| `--card`       | `oklch(1 0 0)`           | Card backgrounds                       |

**Semantic Colors:**

| Token                      | OKLCH Value           | Usage                                     |
| -------------------------- | --------------------- | ----------------------------------------- |
| `--signal`                 | `oklch(0.65 0.16 55)` | Amber/orange — BetaSpots only (sparingly) |
| `--signal-foreground`      | `oklch(0.18 0.04 60)` | Text on signal backgrounds                |
| `--destructive`            | `oklch(0.58 0.21 27)` | Red — destructive actions/errors          |
| `--destructive-foreground` | `oklch(0.98 0 0)`     | Text on destructive backgrounds           |

**Neutral & Borders:**

| Token                | OKLCH Value             | Usage                        |
| -------------------- | ----------------------- | ---------------------------- |
| `--border`           | `oklch(0.88 0.008 150)` | Component borders (stronger) |
| `--line`             | `oklch(0.92 0.006 150)` | Section dividers (lighter)   |
| `--muted`            | `oklch(0.96 0.008 150)` | Muted backgrounds            |
| `--muted-foreground` | `oklch(0.42 0.015 160)` | Secondary text               |
| `--input`            | `oklch(0.88 0.008 150)` | Form input borders           |
| `--ring`             | `oklch(0.48 0.13 160)`  | Focus ring (same as primary) |

**Legacy Aliases** (maintained for backward compatibility):
| Alias | Maps To |
|-------|---------|
| `--color-amber` | `--primary` |
| `--color-amber-foreground` | `--primary-foreground` |
| `--color-signal` | `--signal` |
| `--color-line` | `--line` |
| `--color-dim` | `--muted-foreground` |

**Color Usage Observations:**

- `bg-amber`, `text-amber` classes used in legacy code but map to green primary — this is intentional per the CSS comment "Legacy aliases"
- Signal (amber/orange) is used very sparingly — only in BetaSpots component and the 404 page header
- Color system is harmonious with a green-focused palette and warm amber accent for urgency

#### Typography System

**Font Families:**

```css
--font-display: "Geist", "Inter", system-ui, sans-serif;
--font-sans: "Geist", "Inter", system-ui, sans-serif;
--font-mono: "JetBrains Mono", ui-monospace, monospace;
```

Loaded from Google Fonts in `__root.tsx`:

- **Geist:** wght 300-700 (sans-serif, used for all body and display text)
- **JetBrains Mono:** wght 400-600 (monospace, used for code-like elements, stats, phone numbers)

**Font Size Conventions (Tailwind utilities):**
| Element | Size | Class Pattern |
|---------|------|---------------|
| Hero heading | `clamp(2.4rem, 5.5vw, 4.25rem)` | Inline style |
| Section headings | `text-4xl md:text-5xl` / `text-3xl md:text-4xl` | Tailwind |
| Subheadings | `text-xl font-semibold` | Tailwind |
| Body text | `text-sm` (0.875rem) | Tailwind |
| Small text | `text-xs` (0.75rem) | Tailwind |
| Eyebrow labels | `0.72rem` | Custom `eyebrow` utility |

**Font Weights:**
| Weight | Application |
|--------|-------------|
| 300 | Light body text |
| 400 | Normal body text, navigation |
| 500 | Medium emphasis |
| 600 | Headings (`h1-h4`), bold text |
| 700 | Heavy emphasis |

**Typography Patterns:**

- All headings (`h1-h4`) globally use `font-family: var(--font-display); letter-spacing: -0.02em; font-weight: 600;`
- `mono-num` utility: JetBrains Mono + tabular-nums + tight tracking — used for phone numbers, stats, prices
- `eyebrow` utility: 0.72rem uppercase mono, 0.18em letter-spacing, primary color — used for section labels

#### Spacing System

**Layout Container:**

- `container-x` utility: max-width 1200px, centered, `1.25rem` padding on mobile, `2rem` on desktop

**Section Spacing:**
| Pattern | Usage |
|---------|-------|
| `py-16 md:py-20` | Standard section padding |
| `py-20 md:py-28` | Hero sections, major sections |
| `py-20 md:py-24` | Large sections |
| `mt-24` | Footer top margin |
| `gap-12` | Grid gaps between sections |
| `space-y-4`, `space-y-2` | Internal content spacing |
| `mb-3`, `mb-4`, `mb-10` | Heading-to-content spacing |

**Component Spacing:**
| Element | Padding |
|---------|---------|
| Card content | `p-6` |
| Card sections | `p-6 pt-0` (content), `p-6` (header), `p-6 pt-0` (footer) |
| Navigation items | `px-3 py-2.5` |
| Button (default) | `px-5 py-3` |
| Button (sm) | `px-4 py-2` |
| Badge | `px-2.5 py-0.5` |
| Header | `h-16` with `gap-4` between elements |
| Footer columns | `gap-12 md:grid-cols-4` |

#### Borders & Shadows

**Border Radius Scale:**
| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 8px | Small elements |
| `--radius-md` | 10px | Medium elements |
| `--radius-lg` | 12px | Cards, buttons, large containers |
| `--radius-xl` | 16px | Extra large |
| `--radius-2xl` | 20px | Largest rounding |

**Border Patterns:**
| Pattern | Location | CSS |
|---------|----------|-----|
| Section dividers | Between sections | `border-b border-line` |
| Component borders | Cards, containers | `border border-border` |
| Card borders | OfferCard, IndustryGrid | `border border-border bg-background` |
| Section top dividers | Footer top | `border-t border-line` |
| Header bottom | Header separator | `border-b border-line` |

**Shadow:**
| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-card` | `0 1px 2px rgb(0 0 0 / 0.04), 0 24px 48px -24px rgb(15 64 45 / 0.18)` | Cards, containers — green-tinted drop shadow |
| Scroll shadow | `0 1px 0 0 var(--color-line), 0 8px 24px -16px rgb(0 0 0 / 0.08)` | Header on scroll (dynamic) |

#### Icons & Imagery

| Aspect                   | Details                                                                                                                                                                        |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Icon Library**         | Lucide React v1.18.0 (via npm package)                                                                                                                                         |
| **Common Icons**         | Phone, Mail, MapPin, Menu, Check, X, ChevronRight, ChevronDown, ArrowUpRight, FileText, MessageSquare, Key, ShieldCheck, Calendar, Search, Minus, MoreHorizontal, GripVertical |
| **Custom Icons**         | FacebookIcon.tsx — inline SVG for Facebook logo                                                                                                                                |
| **Icon Size Convention** | Standard: `h-4 w-4` (16px), larger: `h-5 w-5` (20px), `h-11 w-11` (44px — FAB)                                                                                                 |
| **Images**               | Use `ImageWithFallback` component for graceful degradation                                                                                                                     |
| **Image Hosting**        | Images appear to be hosted on R2 (`pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev`)                                                                                               |
| **OG Image**             | Static PNG for social sharing (Open Graph, Twitter Card)                                                                                                                       |

### Component Design Patterns

#### Component Library

**Button System** (`CTA.tsx` + `button.tsx`):
| Variant | Usage | Styles |
|---------|-------|--------|
| Primary | Primary CTAs | `bg-primary text-primary-foreground` |
| Outline | Secondary actions | `border border-border text-foreground` |
| Ghost | Subtle actions | Transparent bg |
| Signal/Amber | Urgency/special | Maps to primary via legacy alias |
| Sizes: sm, md, lg | Various contexts | `px-4 py-2` (sm), `px-5 py-3` (md) |
| Base | All variants | `rounded-[12px] inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-all duration-150 active:scale-[.98]` |

**Card System** (`card.tsx`):
| Part | Description |
|------|-------------|
| `Card` | Container: `rounded-xl border bg-card text-card-foreground shadow` |
| `CardHeader` | `flex flex-col space-y-1.5 p-6` |
| `CardTitle` | `font-semibold leading-none tracking-tight` |
| `CardDescription` | `text-sm text-muted-foreground` |
| `CardContent` | `p-6 pt-0` |
| `CardFooter` | `flex items-center p-6 pt-0` |

**Form Controls:**
All form components follow consistent patterns:

- Border: `border border-input` (via `--input` token)
- Focus: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`
- Disabled: `disabled:cursor-not-allowed disabled:opacity-50`
- Sizing: `h-9` for inputs, `min-h-[60px]` for textarea

**Dialog/Modal System:**

- Overlay: `fixed inset-0 z-50 bg-black/80`
- Content: center-positioned with zoom/fade animation
- Close: always has X button top-right
- Variants: Dialog (modal), AlertDialog (confirmation), Sheet (side panel, 4 directions), Drawer (mobile bottom)

#### Component States

| State         | Pattern                      | Implementation                                            |
| ------------- | ---------------------------- | --------------------------------------------------------- |
| Default       | Normal styling               | Base Tailwind classes                                     |
| Hover         | Color/background change      | `hover:bg-surface`, `hover:text-primary`                  |
| Active        | Scale down                   | `active:scale-[.98]` on buttons                           |
| Disabled      | Reduced opacity, no cursor   | `disabled:cursor-not-allowed disabled:opacity-50`         |
| Focus         | Ring outline                 | `:focus-visible` — 2px solid ring, 2px offset, 4px radius |
| Loading       | Gray skeleton                | `animate-pulse rounded-md bg-primary/10`                  |
| Mobile sticky | Opacity/transform transition | `opacity translate-y` based on scroll direction           |

### Layout & Navigation

#### Page Layouts

**Standard Page Shell (SiteShell):**

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
│  Footer                              │
│  ┌Brand─┬Industries─┬Pages─┬Area──┐ │
│  │      │           │      │      │ │
│  └──────┴───────────┴──────┴──────┘ │
│  © Clockout          Privacy | Terms │
└──────────────────────────────────────┘
│  MobileStickyCta (FAB, bottom-right) │
└──────────────────────────────────────┘
```

#### Navigation System

| Element        | Desktop                                                                        | Mobile                         |
| -------------- | ------------------------------------------------------------------------------ | ------------------------------ |
| **Logo**       | "C" icon + "Clockout" text, links to `/`                                       | Same                           |
| **Main Nav**   | Inline links: Operator OS, Pricing, About, FAQ                                 | Sheet (side panel, 88vw width) |
| **Industries** | NavigationMenu dropdown (2-column grid, 8 items with name + short description) | Sheet expanded section         |
| **Phone**      | CTA link with Phone icon + number visible                                      | In mobile sheet                |
| **CTA**        | "Book the audit →" button                                                      | In mobile sheet                |

**Mobile Sheet Content Order:**

1. Industries label + 8 industry links
2. Divider
3. Navigation links (Operator OS, Pricing, About, FAQ)
4. Divider
5. Phone link
6. CTA button

#### Responsive Design

| Breakpoint         | Changes                                                                       |
| ------------------ | ----------------------------------------------------------------------------- |
| `< 768px`          | Stacked layouts, single column, mobile nav sheet, sticky FAB, smaller headers |
| `768px+`           | Multi-column grids, horizontal navigation, visible phone number               |
| No tablet-specific | Direct jump from mobile to md breakpoint                                      |

**Responsive Patterns:**

- `md:hidden` / `md:flex` — toggle elements at breakpoint
- `md:grid-cols-2`, `md:grid-cols-3`, `md:grid-cols-4` — responsive grid
- `text-4xl md:text-5xl` — responsive text sizing
- `py-16 md:py-20` — responsive padding
- `md:flex-row md:items-center` — flex direction changes
- `w-[88vw] max-w-sm` — mobile sheet width

### User Experience Guidelines

#### Interaction Patterns

| Pattern                   | Implementation                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------ |
| **Button click feedback** | `active:scale-[.98]` — subtle press effect                                           |
| **Link hover**            | `hover:text-primary` — color change to green                                         |
| **Navigation hover**      | `hover:bg-surface` — background highlight                                            |
| **Focus indicators**      | Global `:focus-visible` ring (2px solid primary, 2px offset)                         |
| **Page transitions**      | TanStack Router scroll restoration                                                   |
| **Skeleton loading**      | `animate-pulse` placeholder while content loads                                      |
| **Scroll effects**        | Header shadow on scroll > 24px; MobileStickyCta visibility based on scroll direction |
| **Accordion**             | Animated open/close with caret rotation                                              |
| **Dropdown menus**        | Animated content with zoom-in/out, slide-in/out                                      |
| **Form feedback**         | Sonner toast (`top-right`), form validation errors below fields                      |

#### Accessibility

| Feature             | Status     | Notes                                                                      |
| ------------------- | ---------- | -------------------------------------------------------------------------- |
| Skip link           | ✅ Present | `SiteShell.tsx` — `skip-link` utility, becomes visible on focus            |
| Semantic HTML       | ✅ Good    | `<header>`, `<footer>`, `<main>`, `<nav>`, `<section>` used properly       |
| ARIA labels         | ✅ Partial | `aria-label` on phone link, menu button; `aria-hidden` on decorative icons |
| Keyboard navigation | ✅ Base    | Focus-visible ring styles, native Radix keyboard support                   |
| Color contrast      | ✅ High    | Green on white (primary), dark text on light backgrounds                   |
| Touch targets       | ⚠️ Minimal | FAB is 44×44px (good), but no systematic mobile target audit               |
| Screen reader       | ⚠️ Minimal | Sheet has `SheetTitle` + `SheetDescription.sr-only`; no systematic audit   |
| Focus management    | ⚠️ Partial | Sheet/dialog focus trapping via Radix; no manual management elsewhere      |

#### Form UX

| Form                       | Validation                        | Feedback                                          | Error Handling                  |
| -------------------------- | --------------------------------- | ------------------------------------------------- | ------------------------------- |
| Contact (`/contact`)       | Zod schema (name, email, message) | `done` state shows success; fallback to `mailto:` | No API call; opens email client |
| Assessment (`/assessment`) | Tally.so handles internally       | N/A (embedded form)                               | Tally.so handles                |
| Pricing FAQ                | No form                           | Static accordion                                  | N/A                             |

---

### Accessibility & Usability Report

#### Accessibility Audit Results

| Criteria                    | Status     | Details                                                                                        |
| --------------------------- | ---------- | ---------------------------------------------------------------------------------------------- |
| Skip link                   | ✅ Pass    | First focusable element, visible on focus                                                      |
| Heading hierarchy           | ✅ Pass    | `h1` per page, logical descending order                                                        |
| Semantic landmarks          | ✅ Good    | `<header>`, `<nav>`, `<main>`, `<footer>` all present                                          |
| Alt text on images          | ⚠️ Partial | ImageWithFallback requires `alt` prop; some decorative images may lack                         |
| ARIA labels                 | ⚠️ Partial | Phone link labeled, decorative icons have `aria-hidden`; some interactive elements lack labels |
| Color contrast              | ✅ Pass    | Green-on-white exceeds 4.5:1 ratio; text-on-surface is high contrast                           |
| Focus indicators            | ✅ Pass    | `:focus-visible` ring applied globally (2px solid, 2px offset)                                 |
| Keyboard navigation         | ⚠️ Partial | Radix components support keyboard nav; custom components may not                               |
| Touch targets               | ⚠️ Partial | FAB is 44×44px (meets WCAG); no systematic check of other touch targets                        |
| Reduced motion              | ❌ Missing | No `prefers-reduced-motion` media query                                                        |
| Screen reader announcements | ⚠️ Partial | Sheet has sr-only description; dynamic content lacks live regions                              |

#### Usability Recommendations

1. **Add `prefers-reduced-motion`** support for animations (LeakCalculator, BetaSpots pulse, scroll effects)
2. **Improve form error UX** on contact page — current mailto: fallback loses form data
3. **Add loading states** to lazy-loaded Tally iframe
4. **Implement systematic keyboard navigation** for all interactive elements
5. **Add focus trapping** to mobile Sheet (check Radix default behavior)
6. **Increase contrast** of subtle `--line` borders against white background

---

## API & Integrations

| Integration              | Purpose                                 | Implementation                                              |
| ------------------------ | --------------------------------------- | ----------------------------------------------------------- |
| **Tally.so**             | Lead-gen assessment form embed          | `/assessment` — lazy-loaded iframe via IntersectionObserver |
| **Tally embed.js**       | Tally form script                       | Dynamic script injection on scroll near form                |
| **Google Fonts**         | Geist + JetBrains Mono                  | `<link>` preconnect + stylesheet in `__root.tsx`            |
| **Schema.org JSON-LD**   | LocalBusiness, FAQPage, Service, Person | Injected in route `head()` functions                        |
| **Open Graph / Twitter** | Social sharing meta                     | Per-route meta tags in `head()` functions                   |
| **Cloudflare R2**        | OG image hosting                        | Static PNG at `pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev` |

**No backend API routes exist yet.** The `example.functions.ts` file shows the pattern for TanStack `createServerFn` but is unused. The contact form uses `mailto:` as a fallback with no server endpoint.

---

## Database Schema

**No database exists.** The project currently uses only static data files and client-side form submissions. No database schema has been defined.

---

## Configuration Files

### Vite Config (`vite.config.ts`)

- Uses `@lovable.dev/vite-tanstack-config` which bundles: tanstackStart, viteReact, tailwindcss, tsConfigPaths, Nitro (Cloudflare target), componentTagger (dev-only), env injection, `@` path alias, dedupe, error logger, sandbox detection
- Custom: server entry → `src/server.ts`

### TypeScript Config (`tsconfig.json`)

- Target: ES2022, jsx: react-jsx
- Module: ESNext, Bundler resolution
- Strict mode enabled
- `noUnusedLocals/Parameters`: false
- Paths: `@/*` → `./src/*`

### ESLint Config (`eslint.config.js`)

- Flat config with `typescript-eslint`
- React hooks plugin, React refresh plugin
- Prettier integration at end of chain
- Custom rule: blocks `server-only` import

### Environment Variables

**No `.env` file or `.env.template` exists.** The only env usage is in `config.server.ts`:

```
NODE_ENV (via process.env)
```

Future keys are commented as placeholders.

---

## Dependencies

### Core Dependencies (68 packages in package.json)

| Package                             | Version  | Purpose                            |
| ----------------------------------- | -------- | ---------------------------------- |
| `react`                             | 19.2.0   | UI framework                       |
| `react-dom`                         | 19.2.0   | React DOM renderer                 |
| `@tanstack/react-router`            | 1.168.25 | Client-side routing                |
| `@tanstack/react-start`             | 1.167.50 | TanStack Start (SSR framework)     |
| `@tanstack/react-query`             | 5.83.0   | Server state management            |
| `@tanstack/router-plugin`           | 1.167.28 | Router build plugin                |
| `tailwindcss`                       | 4.2.1    | Utility CSS framework              |
| `@tailwindcss/vite`                 | 4.2.1    | Tailwind Vite plugin               |
| `tw-animate-css`                    | 1.3.4    | CSS animation library for Tailwind |
| `class-variance-authority`          | 0.7.1    | Component variant management       |
| `clsx`                              | 2.1.1    | Conditional class joining          |
| `tailwind-merge`                    | 3.5.0    | Tailwind class conflict resolution |
| `lucide-react`                      | 1.18.0   | Icon library                       |
| `motion`                            | 12.40.0  | Animation library (Framer Motion)  |
| `react-hook-form`                   | 7.71.2   | Form state management              |
| `zod`                               | 3.24.2   | Schema validation                  |
| `@hookform/resolvers`               | 5.2.2    | React Hook Form + Zod bridge       |
| `sonner`                            | 2.0.7    | Toast notifications                |
| `date-fns`                          | 4.1.0    | Date utilities                     |
| `recharts`                          | 2.15.4   | Chart library                      |
| `embla-carousel-react`              | 8.6.0    | Carousel component                 |
| `cmdk`                              | 1.1.1    | Command menu                       |
| `input-otp`                         | 1.4.2    | OTP input                          |
| `react-day-picker`                  | 9.14.0   | Calendar date picker               |
| `react-resizable-panels`            | 4.6.5    | Resizable split panels             |
| `vaul`                              | 1.1.2    | Drawer component                   |
| `vite-tsconfig-paths`               | 6.0.2    | Vite tsconfig path resolution      |
| `@radix-ui/*` (26 packages)         | Various  | Accessible UI primitives           |
| `@lovable.dev/vite-tanstack-config` | 2.3.2    | Lovable's Vite config preset       |

### Dev Dependencies (18 packages)

| Package                       | Version         | Purpose                         |
| ----------------------------- | --------------- | ------------------------------- |
| `typescript`                  | 5.8.3           | TypeScript compiler             |
| `vite`                        | 7.3.1           | Build tool                      |
| `eslint`                      | 9.32.0          | Linter                          |
| `@eslint/js`                  | 9.32.0          | ESLint JS config                |
| `typescript-eslint`           | 8.56.1          | TS ESLint integration           |
| `eslint-plugin-react-hooks`   | 5.2.0           | React hooks lint rules          |
| `eslint-plugin-react-refresh` | 0.4.20          | React refresh lint rules        |
| `eslint-config-prettier`      | 10.1.1          | ESLint + Prettier compatibility |
| `eslint-plugin-prettier`      | 5.2.6           | ESLint Prettier runner          |
| `prettier`                    | 3.7.3           | Code formatter                  |
| `globals`                     | 15.15.0         | Global variables for ESLint     |
| `nitro`                       | 3.0.260603-beta | Cloudflare Workers build target |
| `@types/node`                 | 22.16.5         | Node.js type definitions        |
| `@types/react`                | 19.2.0          | React type definitions          |
| `@types/react-dom`            | 19.2.0          | ReactDOM type definitions       |
| `@vitejs/plugin-react`        | 5.0.4           | Vite React plugin               |

**Known Issues:**

- `nitro` is a beta version (3.0.260603-beta)
- No test framework installed (no Jest, Vitest, or Playwright)
- No database driver or ORM dependency
- All Radix UI packages present but many are unused (dead code)

---

## Current Features

| Feature                | Status          | Location               | Notes                                                |
| ---------------------- | --------------- | ---------------------- | ---------------------------------------------------- |
| Homepage marketing     | ✅ Complete     | `/`                    | Full landing with hero, process, calculator, pricing |
| Industry landing pages | ✅ Complete     | `/services/$slug`      | 8 industries, dynamic content                        |
| Pricing page           | ✅ Complete     | `/pricing`             | Beta vs standard comparison                          |
| FAQ page               | ✅ Complete     | `/faq`                 | All 12 FAQs                                          |
| About/founder page     | ✅ Complete     | `/about`               | Donovin's story                                      |
| Contact form           | ✅ Complete     | `/contact`             | Client-side form with mailto:                        |
| Lead-gen assessment    | ✅ Complete     | `/assessment`          | Tally.so embed                                       |
| Operator OS page       | ✅ Complete     | `/operator-os`         | Product landing                                      |
| Privacy/Terms          | ✅ Complete     | `/privacy`, `/terms`   | Legal pages                                          |
| Blog index             | ⚠️ Placeholder  | `/blog`                | "Coming soon" items only                             |
| Social proof           | ⚠️ Placeholder  | `SocialProof.tsx`      | 3 placeholder cards                                  |
| Server functions       | ⚠️ Example only | `example.functions.ts` | Unused pattern                                       |
| Real API endpoints     | ❌ Missing      | N/A                    | No backend yet                                       |
| Database               | ❌ Missing      | N/A                    | No persistence layer                                 |
| Auth                   | ❌ Missing      | N/A                    | No authentication                                    |
| Analytics              | ❌ Missing      | N/A                    | No tracking script                                   |
| RSS/Newsletter         | ❌ Missing      | N/A                    | No subscription mechanism                            |
| Test suite             | ❌ Missing      | N/A                    | No tests at all                                      |

---

## Code Quality Notes

### Areas Needing Optimization

1. **Dead code — many unused shadcn/ui components:** 49 UI components installed, only ~10 are used (button, card, badge, accordion, sheet, navigation-menu, avatar, skeleton, separator, form). The rest are unused but add to bundle size.
2. **No tree-shaking verification:** All Radix UI packages are in `dependencies`, not all used at runtime.
3. **Static data in route files:** `/pricing` and `/blog` have hardcoded data arrays inline rather than in the `data/` directory.
4. **Placeholder content:** SocialProof component, blog posts, and some images are placeholder.
5. **No image optimization:** Images loaded directly from R2 without responsive sizes or formats.
6. **No font subsetting:** Full Geist font family loaded (300-700), could be subset.

### Duplicate Code / Patterns

- `PHONE_DISPLAY` and `PHONE_HREF` defined separately in both `Header.tsx` and `Footer.tsx` (duplicated constants)
- Multiple pages import `faqs` from `@/data/faqs` with different slice patterns
- `contact.tsx` form submission has no server endpoint — falls back to `mailto:` which is fragile

### Deprecated Patterns

None detected — all packages use current major versions (React 19, Tailwind v4, TanStack Router v1).

### Security Concerns

- No input sanitization on form fields (though no backend stores the data)
- `mailto:` link could expose email client
- No CSP headers configured
- No rate limiting on form submissions

---

## UX/UI Improvement Recommendations

### Priority Design Improvements

1. **Add loading skeleton** to lazy-loaded Tally iframe (currently blank until iframe mounts)
2. **Improve contact form** — add server endpoint so submissions aren't lost to email client
3. **Add `prefers-reduced-motion`** media query for animations
4. **Consistent heading spacing** — some pages use different padding patterns

### Consistency Fixes

1. **Standardize section padding** — some sections use `py-20 md:py-28`, others `py-16 md:py-20`
2. **Consolidate constants** — PHONE_DISPLAY/PHONE_HREF duplicated across Header, Footer, and potentially pages
3. **Move inline data** from `pricing.tsx` and `blog.tsx` to `/data/` directory
4. **Unify CTA variants** — CTA component uses "amber" mapped to primary via legacy alias; should be consolidated

### Accessibility Enhancements

1. **Add `prefers-reduced-motion`** query to disable automatic animations
2. **Improve skip link visibility** — target size and color contrast
3. **Add live regions** for dynamic content updates
4. **Add form error announcements** for screen readers
5. **Ensure all interactive elements** are keyboard accessible

### Performance Optimizations for UI

1. **Remove unused shadcn/ui components** from bundle
2. **Add responsive images** with srcset
3. **Consider font-display swap** for Google Fonts
4. **Lazy load below-fold** components

### Design System Standardization

1. **Create proper design token file** — move CSS variables to a dedicated theme file
2. **Document component variants** with consistent naming
3. **Standardize on color tokens** — remove legacy "amber" / "line" / "dim" aliases
4. **Add animation design tokens** — consistent duration and easing values

---

## Edit/Change Guidelines

### Safe Areas for Editing

- **Static data files** (`/src/data/`) — adding industries, FAQs, offer config, service area
- **Site components** (`/src/components/site/`) — section content and layout
- **Page content** (`/src/routes/*.tsx`) — adding/removing sections from pages
- **Data-driven content** — industry pages pull from `industries.ts` data
- **CSS utilities** — custom utilities in `styles.css` `@utility` blocks

### Files Requiring Caution

- **`vite.config.ts`** — Lovable config handles many plugins; modifications can break build
- **`__root.tsx`** — affects all pages (SEO, fonts, global layout)
- **`routeTree.gen.ts`** — auto-generated; manual edits will be overwritten
- **`start.ts`** and **`server.ts`** — server entry points; errors cause 500s
- **`router.tsx`** — affects all routing behavior

### Dependency Constraints

- Tailwind v4 uses `@import "tailwindcss"` syntax (not `@tailwind` directives)
- Motion (Framer Motion) v12 API: uses `motion` import path (not `framer-motion`)
- TanStack Router v1: file-based routing with `createFileRoute`, `beforeLoad` for redirects
- Radix primitives: all imported via `@radix-ui/react-*` pattern
- `@lovable.dev/vite-tanstack-config` controls the build pipeline — avoid adding duplicate plugins

### Breaking Change Warnings

- Removing legacy color aliases (`amber`, `line`, `dim`) will break existing components
- Renaming data exports (`faqs`, `industries`, `offer`) will break imports across pages
- Changing the `SiteShell` layout affects ALL pages
- Modifying font loading in `__root.tsx` affects entire site rendering

### Design System Compliance Requirements

- Use `cn()` utility for all class merging (imported from `@/lib/utils`)
- Use `CTA` component for all call-to-action links/buttons
- Use `container-x` utility for page width constraints
- Follow existing spacing scale (Tailwind defaults + custom)
- Use OKLCH color system when adding new colors
- Use existing component library before creating new components

### UX Consistency Maintenance Tips

- Maintain consistent section padding (`py-16 md:py-20` or `py-20 md:py-28`)
- Use `eyebrow` utility for section labels
- Use final CTA pattern (heading + subtext + button + SMS line + pricing disclaimer)
- Keep mobile nav consistent — Sheet with same structure as Header
- Maintain `border-b border-line` between sections
- Use `rounded-[12px]` as standard border radius for cards and buttons

---

## Next Steps Recommendations

### Priority Improvements

1. **Create backend API** with server functions for contact form and assessment submissions
2. **Add database** (SQLite or PostgreSQL) for storing leads
3. **Remove unused shadcn/ui components** to reduce bundle size
4. **Add analytics** (e.g., Plausible, PostHog)
5. **Replace placeholder content** (SocialProof, blog posts) with real content

### Feature Additions

1. **Blog CMS** — markdown-based or headless CMS for blog posts
2. **Case studies** — real client success stories replacing SocialProof placeholders
3. **Email capture** — newsletter/subscription form
4. **Live chat** or booking widget
5. **Customer portal** for assessment results

### Performance Optimizations

1. **Remove unused npm packages** — audit with `depcheck` or similar
2. **Lazy load non-critical components** — dynamic imports for heavy sections
3. **Add image optimization** pipeline (responsive srcset, WebP/AVIF)
4. **Configure caching headers** on Cloudflare

### Design System Enhancements

1. **Complete dark mode** — current `.dark` block is duplicated from `:root`
2. **Create component documentation** — storybook or style guide
3. **Standardize animation tokens** — consistent durations/easings
4. **Add typography scale** — CSS custom properties for font sizes
5. **Create icon usage guidelines**

### Accessibility Improvements

1. **Add `prefers-reduced-motion`** support
2. **Implement keyboard navigation** for all custom components
3. **Add ARIA live regions** for dynamic content
4. **Run Lighthouse audit** and address findings
5. **Add comprehensive alt text** to all images

---

## Audit Summary

| Metric                | Value                                 |
| --------------------- | ------------------------------------- |
| **Total files**       | 86                                    |
| **Source files**      | 78 (excluding config/metadata)        |
| **Pages/Routes**      | 13 (11 content + 2 redirects)         |
| **Site components**   | 18 custom                             |
| **UI components**     | 49 (shadcn/ui)                        |
| **Static data files** | 4                                     |
| **Hooks**             | 1                                     |
| **API routes**        | 0 (no backend)                        |
| **Database**          | None                                  |
| **Tests**             | None                                  |
| **SVG icons**         | 1 custom (Facebook), ~20 via Lucide   |
| **Design tokens**     | 30+ CSS custom properties             |
| **External services** | Tally.so, Google Fonts, Cloudflare R2 |
