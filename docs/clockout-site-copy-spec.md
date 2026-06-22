# Clockout — Site Copy Implementation Spec

_Final approved copy + implementation guide for clockout.us (repo: github.com/donovinsims/clockout). Hand this file to the coding agent alongside the kickoff prompt._

**Source of truth:** the *Conventions*, *Implementation Guide*, and *Offer Architecture* sections govern voice, the CTA standard, the funnel, pricing, the founding numbers, and the global find-and-replace. **Build targets:** the `/page` sections are the target copy for each route. Implement only what's in this file. Do NOT invent testimonials, Google ratings, or scarcity numbers — leave clearly-marked placeholders where the spec says so.

---

## Conventions & Locked Decisions

Source of truth for every page rewrite. Keep all copy consistent with this.

**Voice:** Direct-response, plain-spoken (talk like a contractor, not a SaaS deck). Short sentences. Loss-framed where honest. Risk-reversed. Confident and warm — the founder voice from /about. No clinical jargon.

**Sitewide CTA button** (every button that links to /assessment): **"Find the Money I'm Losing →"**
Standard subtext beneath it: *"Free 20-minute leak audit. Pick a time — I'll show you exactly where you're losing money."*
(Homepage hero may keep **"Get Your 10 Hours Back →"** as its bespoke hero CTA.)

**The funnel (locked):** /assessment short form → on submit, redirects to **cal.com/donovin** (prefilled) → **free 20-minute call = the live audit** → **free written action plan** delivered ~1 day after → **paid implementation** (done-with-you, client owns everything) → **optional Operator OS Concierge** ($750/mo founding rate).

**"The audit" = the free call + the written action plan after it.** Free during beta (may become a paid diagnostic later, Ganim path). One name everywhere: "audit."

**Delete sitewide (undeliverable / off-model):** "no call required," "report in 48 hours," "no phone tag," "a spec sheet, not a sales funnel," and "no retainer / no subscription, ever." Replace the last one with **"No contracts. Cancel anytime. You own everything."**

**Pricing is NOT shown on /assessment** — its single goal is booking the free call.

**Concierge price (locked): $750/mo founding rate** (cancel anytime). Build: $497 beta / $1,494 standard.

**CRO basis:** Haines `cro` (value-prop clarity, outcome headline, one CTA, objection handling, friction reduction) + `form.md` (Demo-Request pattern) + `marketing-psychology` (loss aversion, reciprocity, zero-price, regret aversion, foot-in-the-door, activation energy, Hick's law, curse of knowledge).

---

## Implementation Guide — For the AI Coding Agent

**Read this first.** This doc is the spec for updating clockout.us. The "Conventions" section is the global source of truth; each "Full Page Copy" section is the target copy for that route. Make shared changes in components/data ONCE; per-page changes in the route file.

**Stack (confirmed):** TanStack Start (React 19 + TanStack Router + Vite + Tailwind 4). Copy is hardcoded in route files, data files, and shared components. No CMS.

**File map:**
- **Routes:** `src/routes/index.tsx` (Home), `pricing.tsx`, `about.tsx`, `faq.tsx`, `assessment.tsx`, `operator-os.tsx`, `services.tsx` (services index), `services.$slug.tsx` (**single template for all 8 trade pages**), `contact.tsx`, `privacy.tsx`, `terms.tsx`. **Also reconcile:** `audit.tsx` and `recovery-guide.tsx` (older funnel pages — check for stale "48-hour audit" / anti-retainer copy and align, or drop from nav if redundant).
- **Data:** `src/data/faqs.ts` (FAQ array), `src/data/industries.ts` (per-trade content for the 8 service pages), `src/data/offer.ts` (offer + pricing values/strings), `src/data/serviceArea.ts`.
- **Shared components:** `src/components/site/CTA.tsx`, `FinalCta.tsx`, `MobileStickyCta.tsx`, `Hero.tsx`, `PageHero.tsx`, `OfferCard.tsx`, `FAQ.tsx`, `Footer.tsx`; `src/components/ui/button.tsx`.

**GLOBAL find-and-replace (apply across ALL files):**
1. **Delete these now-false promises** wherever they appear: "no call required", "in 48 hours" / "48-hour audit" (as the deliverable or a button), "No phone tag", "A spec sheet, not a sales funnel".
2. **Kill the anti-recurring stance** — "No retainer", "No subscription. Ever.", "no monthly fee", "There is no Clockout subscription … never will be", "quarterly retainer (~$497/quarter)" → replace with: **"No contracts. Cancel anytime. You own everything."**
3. **CTA standardization:** every CTA linking to `/assessment` → label **"Find the Money I'm Losing →"** + subtext **"Free 20-minute leak audit. Pick a time — I'll show you exactly where you're losing money."** Update `CTA.tsx`, `FinalCta.tsx`, `MobileStickyCta.tsx`. **EXCEPTION:** the homepage hero (`Hero.tsx` / `index.tsx`) keeps **"Get Your 10 Hours Back →"**.
4. **Deliverable name:** always "audit" = the free call + written plan. Never promise a no-call report.

**Funnel wiring (`src/routes/assessment.tsx`):** keep the Tally form, but on submit **redirect to `cal.com/donovin` with name/email/phone passed as URL params** so the booking is prefilled (Tally "redirect on completion" + answer piping; cal.com prefill params, e.g. `?name=&email=&`). Cal.com sends confirmation + reminders. Form submit button = **"Grab My Call Time →"**. Single-column, labels always visible, 44px+ mobile targets. **Do not change the Tally form ID** without Donovin.

**Pricing values (`src/data/offer.ts`):** Build **$497 beta / $1,494 standard** (current — keep unless Donovin says raise). Concierge **$750/mo founding rate**. Don't introduce other numbers.

**Do NOT:** change routes/URLs; delete `privacy`/`terms`; fabricate testimonials (the /assessment + Home social-proof blocks are placeholders for real quotes/ratings); alter the Tally form ID.

**Verify when done:** grep the repo for each killed phrase → expect zero hits; every /assessment CTA resolves to the form→cal.com flow; /pricing renders the 3 rungs; no page still claims "no retainer/subscription ever"; `audit.tsx` + `recovery-guide.tsx` reconciled.

---

## Offer Architecture (Grand Slam) — Conversion Source of Truth

Built on $100M Offers (value equation, value stack, named guarantee, real scarcity) + Haines `offers` (honest, specific, no hype) + Cialdini influence. The pages below express this. **Offer score: ~5/10 before (price-led, no stack, unnamed guarantee) → ~9/10 after. The last point is real testimonials/case studies — the one true gap.**

**VOICE GUARDRAILS (no hype — this is what converts skeptical trades owners):** Ban "game-changing, revolutionary, 10x, secret, unlock, supercharge, seamless, cutting-edge, AI-powered" and exclamation points. Never write "$X value" without a real, named comparable. Specific numbers and real comparables only. Plain beats loud.

**THE VALUE EQUATION (why this converts):**
- **Dream outcome ↑:** stop losing jobs; get 10 hours a week back. (More money, less chaos — in their words.)
- **Perceived likelihood ↑:** the free audit proves it *before* they pay; the founder's enterprise-ops background; "you own it"; the named guarantee; dollar-specific leaks; (real testimonials = the gap to close).
- **Time delay ↓:** free call now → written plan next day → built in days.
- **Effort & sacrifice ↓:** done-with-you, installed in tools they already use, they own it, no learning curve, no contract.

**THE OFFERS (named):** The Audit (free) · The Build ($497 beta / $1,494) · Operator OS Concierge ($750/mo founding).

---

**THE BUILD — VALUE STACK** *(paste into /pricing Rung 2 and the Home offer block):*
> **Everything the Build installs — and what you'd pay to rent it elsewhere:**
> - **24/7 missed-call text-back + AI front desk** — catches the calls you miss on a job *(answering services run $300–$800/mo)*
> - **Quote follow-up engine** — chases every quote at 1 hour, 1 day, 3 days, 7 days; recovers 20–35% that would've gone cold
> - **Automatic review engine** — turns happy jobs into Google reviews on autopilot *(reputation tools run $50–$150/mo)*
> - **Past-customer reactivation** — wakes up the list you haven't called in a year
> - **Owner dashboard** — calls answered, quotes recovered, hours saved, in real numbers
> - **30 days of tuning** after handover
> - **Your written action plan** from the audit
>
> A GoHighLevel or marketing agency charges **$797–$1,497 every month** to run this same stack — and you never own it. **The Build is $497, once. You own all of it,** and it keeps running the day you stop paying.
>
> The math that matters: three missed calls a week at a $450 ticket is **$5,400 walking out the door every month.** The fix is a one-time $497.

*(Anchors are real and defensible — sourced from the Rockford-market pricing research. Do not inflate them.)*

---

**THE GUARANTEE (named — performance-based, the strongest type):** *Use this exact wording wherever the guarantee appears.*
> **The 10-Hour Guarantee:** if the Build doesn't give you back 10 hours a week within 30 days, I keep working — free — until it does. And step one, the audit, is free, so you're risking 20 minutes, not a dime.

**SCARCITY (real — solo capacity, so it's true):** *Use on Home, /pricing, /assessment, /operator-os.*
> **Founding clients only:** I'm one person, so I take a handful of builds at a time — each gets my full attention. Founding pricing (Build $497, Concierge $750/mo) locks for life while there's room.

**CONCIERGE — VALUE FRAMING** *(paste into /operator-os and /pricing Rung 3):*
> A marketing agency charges **$2,200–$5,000/month** to manage this and locks you into a year. **Operator OS is $750/month, cancel any time, and you own everything we build.**

---

**INFLUENCE PRINCIPLES LAYERED (Cialdini) — where each lives:**
| Principle | Where it lives |
|---|---|
| **Reciprocity** | Free audit + free written plan, given before any ask |
| **Authority** | Founder's Uber / Walgreens ops background (Home founder block, /about) |
| **Social proof** | Testimonials + Google rating near every CTA — **ADD REAL ONES (gap)** |
| **Commitment/consistency** | The form's "what's costing you the most?" micro-commitment |
| **Scarcity** | Founding-clients limit (real) |
| **Unity** | Local — "I grew up here, I build for shops like yours in the Stateline" |
| **Liking** | Plain, warm founder voice throughout |

**AGENT — APPLY ACROSS PAGES:** put the value stack on /pricing Rung 2 + the Home offer block; put the concierge anchor on /operator-os + /pricing Rung 3; use the named "10-Hour Guarantee" wording everywhere the guarantee appears; use the founding-clients scarcity line on Home, /pricing, /assessment, /operator-os.

---

**SOCIAL PROOF (real — one testimonial in hand):** We have ONE genuine testimonial: **Shea S.**, from a different field (a client-portal/community build), NOT a trades ICP. **Do NOT disguise it as a trades business** — fake-feeling proof repels skeptics and risks FTC trouble. Frame it honestly as cross-industry proof, which also proves the method generalizes. The section header carries the frame: *"It works across industries — the outcome's the same."*

Canonical quote (typo cleaned, lightly trimmed, meaning intact) — use site-wide:
> "I needed a seamless, professional client portal, and the system Donovin built exceeded every expectation. The automations run perfectly in the background, and the whole client experience is smooth. It's saved me 10+ hours a week and freed me to focus on my clients. If you need complex operations simplified and automated, this is exactly who you want building it." — **Shea S., Founder**

Short pull-quote (near CTAs): *"Saved me 10+ hours a week… complex operations, simplified and automated. Exactly who you want building it."* — **Shea S.**

**STILL NEEDED (next proof to collect, in priority order):** (1) a Google rating + review count; (2) at least one IN-ICP testimonial — a local trades owner, with a dollars-or-hours result. Keep those slots as placeholders until real. The on-call sales kit's last step is asking your first trades client for the review.

---

**NAMED FREE DELIVERABLE:** the written plan from the audit = **"your Money-Leak Map."** Use this exact name site-wide (the audit produces the Map; the Map ranks the leaks + names the first fix). A named, tangible takeaway raises the value of the free audit.

**FOUNDING SCARCITY (real, current):** **8 founding spots, 3 left.** Use this concrete count wherever scarcity appears (Home scarcity bar + final CTA, /pricing final CTA + price reference, /operator-os price, /assessment final CTA). Update the "left" number as spots fill; never inflate it.

---

## /assessment — Full Page Copy (ready to paste)

**Browser title:** Free 20-Minute Revenue-Leak Audit — Clockout
**Meta description:** Book a free 20-minute call. I'll show you exactly where your business is leaking money — and send you your Money-Leak Map to keep, whether you hire me or not.

---

### HERO
**Eyebrow:** FREE REVENUE-LEAK AUDIT

**H1:** See exactly where your business is leaking money — in one 20-minute call.

**Subhead:** Tell me a few things about your shop and grab a time. Before we talk, I'll dig into your business — then on a quick 20-minute call I'll show you exactly where you're losing jobs and dollars: the missed calls, the quotes going cold, the follow-ups that never happen. A day later, you get your Money-Leak Map in writing — yours to keep, whether you hire me or not.

**CTA button:** Find the Money I'm Losing →
**CTA subtext:** Free 20-minute call · grab a time in 30 seconds · no pitch, no pressure

**Trust line:** Built and run by Donovin — local, in Roscoe. Not a call center. No contract.

---

### WHAT YOU WALK AWAY WITH — FREE, EITHER WAY
**H2:** What you get — free, even if you never hire me

- **On the call:** a live walkthrough of exactly where you're losing money, in real dollars — not vague "you should use AI" advice.
- **A day later:** your **Money-Leak Map** — your biggest leaks, ranked, and the first one I'd plug. Keep it forever.
- **Zero obligation:** if you never hire me, you've still got a Map you can run yourself.

**Subline:** I can't hand you this before we talk — I don't know your business yet. The call is how I earn the right to give it to you.

---

### WHERE THE MONEY LEAKS
**H2:** Here's what I'm hunting for

| Leak | Typical bleed | What it is |
|---|---|---|
| **Missed calls** | ~$5,400/mo | Every call you can't grab on a roof or under a sink is a job walking to the next guy. |
| **After-hours drop-off** | ~$2,800/mo | Nights and weekends ring out to a voicemail nobody checks until Monday. |
| **Slow quote follow-up** | ~$3,200/mo | Quotes sent, then silence — 20–35% are recoverable with follow-up alone. |
| **Manual admin & dispatch** | ~$1,950/mo | The hours you burn Sunday night on data entry instead of living your life. |

*Ranges for a shop your size, based on industry data (ServiceTitan, PMI). Your real number comes out on the call — that's what the Map is for.*

---

### HOW IT WORKS
**H2:** How it works, start to finish

**01 — Tell me about your shop.** 60 seconds, the form below.
**02 — Grab a time.** You'll jump straight to my calendar.
**03 — I do my homework.** I dig into your business before we ever talk.
**04 — The 20-minute call.** I show you the leaks in dollars — then send your Money-Leak Map.

---

### THE FORM
**Header above form:** Start here — takes about 60 seconds

**Fields:**
1. **Your name**
2. **Business name** *(so I can look you up before we talk)*
3. **Trade** — dropdown: HVAC / Plumbing / Roofing / Electrical / Landscaping / Cleaning / Property Management / Real Estate / Other
4. **Email**
5. **Phone** + **Best way to reach you?** [Call] [Text] *(so I can send a reminder before the call)*
6. **What's costing you the most right now?** — dropdown: Missed calls / Slow quote follow-ups / Disconnected tools / Scheduling chaos / Chasing payments / Reviews / Not sure — that's why I want the audit
7. *(optional)* **Team size** — Just me / 2–5 / 6–15 / 16+

**Submit button:** Grab My Call Time →
**Microcopy under button:** You'll go straight to my calendar to pick a time. I'll never share your info — no spam, ever.

**Implementation note:** On submit, Tally redirects to **cal.com/donovin** with name/email/phone passed through so they don't retype anything. Cal.com sends the confirmation + reminders (cuts no-shows). Keep it single-column, labels always visible, 44px+ tap targets on mobile.

---

### STRAIGHT ANSWERS *(objection handling)*
**H2:** Straight answers

- **"Is this just a sales call?"** No. It's 20 minutes, it's free, and you leave with your Money-Leak Map — even if you never hire me. I'd rather give you something useful than pitch you.
- **"I don't really have a website or much online."** Even better — that's usually where the biggest leaks are hiding. You'll get more out of this than most.
- **"What's it going to cost me?"** The audit — the call and the Map — is free. If you want the leaks actually fixed, that's the paid part, and it's entirely your call *after* you've seen the Map.
- **"Who am I talking to?"** Me. Donovin. I run Clockout solo, out of Roscoe — you won't get handed to a rep.

---

### SOCIAL PROOF *(placement: right above the final CTA)*
> "It's saved me 10+ hours a week… complex operations, simplified and automated. Exactly who you want building it." — **Shea S., Founder**

*(Add a Google rating / review count here, and an in-trade client quote, as soon as you have them — review scores near the CTA reduce friction.)*

---

### FINAL CTA
**H2:** Find out what your phone's been costing you.
**Sub:** 20 minutes. Free. Your Money-Leak Map to keep. Grab a time.

**Confidence line:** If we get on the call and I can't point to real money you're leaving on the table, I'll be shocked — and you keep the Map anyway. You're risking 20 minutes.

**CTA button:** Find the Money I'm Losing →
**Scarcity:** Only 8 founding spots — 3 left. Book while there's room.

---

## Home (/) — Full Page Copy (ready to paste)

**Browser title:** Clockout — Stop losing jobs to missed calls, cold quotes & dead follow-ups
**Meta description:** I find where your service business is leaking money, build the fixes inside the tools you already use, and hand you the keys. Starts with a free 20-minute audit.

---

### HERO
**Eyebrow:** FIND IT FREE · FIXED IN DAYS · YOURS FOREVER

**H1:** What would you do with 10 extra hours a week?

**Subhead:** I find exactly where your business is leaking money — the calls you miss on a roof or under a sink, the quotes that go cold, the follow-ups that never happen — and I build the fixes right inside the tools you already use. You own all of it. It starts with a free 20-minute call where I show you the leaks, in dollars.

**Primary CTA:** Get Your 10 Hours Back →
**CTA subtext:** Free 20-minute audit call · I show you the leaks, in dollars · no pitch
**Secondary:** Or text AUDIT to (608) 713-1651

**Scarcity bar:** Only 8 founding spots — 3 left · free audit, your Money-Leak Map either way

---

### TOOLS STRIP — *(keep as-is)*
"I build inside the tools you already pay for" — Jobber · Housecall Pro · ServiceTitan · Twilio · Make · OpenAI · GoHighLevel

---

### HOW IT WORKS *(reframed to the ladder)*
**H2:** Free to start. Fixed in days. Yours to keep.

**01 — Free 20-minute audit call.** I dig into your business, then show you exactly where you're losing money — and send your Money-Leak Map, yours to keep, hire me or not.
**02 — I build it with you.** I install the fixes inside your existing tools in days. Every login and line of code is yours.
**03 — Keep me on, or don't.** Run it solo forever — or keep me in your corner as your AI concierge, building something new every couple weeks. Your call.

---

### TESTIMONIAL — *(real)*
**H2:** It works across industries — the outcome's the same: 10+ hours a week back.
> "I needed a seamless, professional client portal, and the system Donovin built exceeded every expectation. The automations run perfectly in the background, and the whole client experience is smooth. It's saved me 10+ hours a week and freed me to focus on my clients. If you need complex operations simplified and automated, this is exactly who you want building it." — **Shea S., Founder**

*[Add a Google rating + review count here, and one in-trade client quote when you have it — that's the last proof gap.]*

---

### FOUNDER PROOF — *(authority + unity)*
"I ran operations at Uber — live events with 50,000+ attendees and real-time dispatch — and at Walgreens at national retail scale, where a broken system bleeds money by the minute. Now I bring that same playbook to Main Street, built for shops like yours across the Stateline: Rockford, Roscoe, Loves Park, and Beloit." [Keep the rest of the existing bio.]

---

### LEAK CALCULATOR — *(keep)*
"How much is the phone costing you?" [Keep the interactive slider.]

---

### OFFER SECTION *(reframe + value stack)*
**Eyebrow:** The offer
**H2:** Start free. Own what I build. Keep me on only if you want.

**Body:** First, the free audit — a 20-minute call where I show you where you're leaking money, plus your Money-Leak Map to keep whether you hire me or not. Want it fixed? I build it with you and hand you the keys — no contract, you own everything.

**What the Build installs:**
- 24/7 missed-call text-back + AI front desk
- Quote follow-up engine — recovers 20–35% of quotes that go cold
- Automatic Google-review engine
- Past-customer reactivation + owner dashboard
- 30 days of tuning + your Money-Leak Map

A GoHighLevel or marketing agency charges **$797–$1,497 a month** to run this same stack, and you never own it. **The Build is $497, once — you own all of it.** Three missed calls a week at a $450 ticket is **$5,400 gone every month** — the kind of number I turn up in a real audit.

**Ladder mini-cards:**
- **The Audit — Free.** The 20-min call + your Money-Leak Map.
- **The Build — $497** *(beta, reg. $1,494)*. The full stack above. You own it. 30 days of tuning.
- **Operator OS Concierge — $750/mo** *(founding, cancel anytime)*. I keep building with you.

**The 10-Hour Guarantee:** if the Build doesn't give you 10 hours a week back within 30 days, I keep working — free — until it does.

**CTA:** Find the Money I'm Losing →
**CTA subtext:** Free 20-minute leak audit. Pick a time — I'll show you exactly where you're losing money.

---

### INDUSTRY GRID — *(keep — links to the 8 vertical pages)*

---

### FAQ *(homepage subset — updated for the new model)*
- **"Is there a subscription?"** Only if you want one. The build is yours to own outright — no contract, no monthly fee required. If you choose the concierge to keep me building, that's month to month and you cancel anytime.
- **"What does the free audit cost me?"** Nothing. 20 minutes, and you walk away with your Money-Leak Map — even if you never hire me.
- **"Who actually does the work?"** Me. Donovin. Solo, out of Roscoe.
- **"What if I'm not local?"** The work's remote — I take builds anywhere in the US during the beta.

---

### FINAL CTA
**H2:** Find out what your phone's been costing you.
**Sub:** Free 20-minute audit. Your Money-Leak Map to keep. Grab a time.
**Scarcity:** Only 8 founding spots — 3 left.
**CTA:** Find the Money I'm Losing →

---

## /pricing — Full Page Copy (3-rung ladder, ready to paste)

**Browser title:** Pricing — Clockout · Start free · Own what I build · No contracts
**Meta description:** Start with a free audit. Pay once for the build and own everything. Keep me on as your concierge only if you want — month to month, cancel anytime.

---

### HERO
**Eyebrow:** PRICING
**H1:** Start free. Own what I build. No contracts, ever.
**Subhead:** No rented software. No 12-month lock-in. No dashboard you'll never log into. You start with a free audit, pay once to get it built (and own every bit of it), and keep me on only if it's worth it to you — cancel any month.

---

### THE LADDER
**H2:** Three steps. Stop wherever you want.

**RUNG 1 — The Audit**
- **Free**
- *For:* "I think I'm losing money but I don't know where."
- *What you get:* A 20-minute call where I show you exactly where you're leaking jobs and dollars, plus your Money-Leak Map — your biggest leaks ranked, with the first one I'd fix. Yours to keep, hire me or not.
- **CTA:** Find the Money I'm Losing →

**RUNG 2 — The Build** ⭐ *most owners start here*
- **$497** beta *(reg. $1,494)* · one-time · you own it

  **Everything the Build installs — and what you'd pay to rent it elsewhere:**
  - **24/7 missed-call text-back + AI front desk** — catches the calls you miss on a job *(answering services run $300–$800/mo)*
  - **Quote follow-up engine** — chases every quote at 1 hour, 1 day, 3 days, 7 days; recovers 20–35% that would've gone cold
  - **Automatic review engine** — turns happy jobs into Google reviews on autopilot *(reputation tools run $50–$150/mo)*
  - **Past-customer reactivation** — wakes up the list you haven't called in a year
  - **Owner dashboard** — calls answered, quotes recovered, hours saved, in real numbers
  - **30 days of tuning** after handover
  - **Your Money-Leak Map** from the audit

  A GoHighLevel or marketing agency charges **$797–$1,497 every month** to run this same stack — and you never own it. **The Build is $497, once. You own all of it,** and it keeps running the day you stop paying. Three missed calls a week at a $450 ticket is **$5,400 walking out the door every month** — the kind of number I turn up in a real audit. The fix is a one-time $497.
- **CTA:** Find the Money I'm Losing →

**RUNG 3 — Operator OS Concierge**
- **$750/mo** — founding rate, locked for life · cancel anytime
- *For:* "I'd rather keep a pro in my corner than babysit this myself."
- *What you get:* I stay on as your AI operator — a new automation every couple weeks, biweekly build sessions, on call between, and a running log of everything we've built. You still own all of it. Month to month. Cancel any time and keep everything.
- A marketing agency charges **$2,200–$5,000/month** to manage this and locks you into a year. Operator OS is **$750/month, cancel any time, and you own everything we build.**
- **First two weeks free if I stall:** if I don't ship a working automation in your first two weeks, that month's on me.
- *Note:* You only get here after the build — never a forced upsell. You decide once you've seen the work.
- **CTA:** Find the Money I'm Losing →

---

### THE GUARANTEES
**The 10-Hour Guarantee (the Build):** if the Build doesn't give you back 10 hours a week within 30 days, I keep working — free — until it does. And step one, the audit, is free, so you're risking 20 minutes, not a dime.

**The Two-Week Guarantee (the Concierge):** if I don't ship a working automation in your first two weeks on the concierge, that month is free.

---

### THE COMPARISON *(villain re-aimed at lock-in, not "monthly")*
**H2:** What an agency *rents* you vs. what I *build* you

| | Typical agency / SaaS | Clockout |
|---|---|---|
| **Pricing** | $797–$5,000/mo, forever | Free audit · $497 one-time build · concierge only if you want it |
| **Contract** | 12 months, locked in | None. Cancel any month. |
| **Ownership** | They keep it — leave and it's gone | You own everything: logins, code, docs |
| **If you stop paying** | It all shuts off | You keep every automation |
| **Install time** | 2–6 weeks | Days |
| **Guarantee** | 60-day refund, fine print | 10 hours a week back in 30 days, or I keep working |

---

### STRAIGHT ANSWERS *(objection handling)*
- **"Why would I pay monthly after I own it?"** You don't have to — plenty of owners take the build and run it solo forever. The concierge is for the ones who'd rather keep a pro shipping new automations every couple weeks than do it themselves. No contract, cancel the month it stops being worth it.
- **"Why so cheap for the build?"** Beta pricing — the first clients get the discount in exchange for a before/after case study. It goes to $1,494 after.
- **"What if it doesn't work?"** The audit's free, and the build's backed by the 10-Hour Guarantee: 10 hours a week back in 30 days, or I keep working — free.

---

### PROOF *(near the decision — keep right above the final CTA)*
> "It's saved me 10+ hours a week… complex operations, simplified and automated. Exactly who you want building it." — **Shea S., Founder**

*[Add a Google rating + an in-trade client quote here as soon as you have them.]*

---

### FINAL CTA
**H2:** Start with the free audit. Decide the rest later.
**Sub:** 20 minutes, free, and your Money-Leak Map to keep.
**Scarcity:** Only 8 founding spots — 3 left. Founding pricing locks for life while there's room.
**CTA:** Find the Money I'm Losing →

---

> **⚙️ Price reference:** Concierge **$750/mo** founding (locked for life for the first few). Build **$497 beta / $1,494 standard** — raise as the beta closes (see strategy doc). Founding cap: **8 spots, 3 left** (update as they fill). All "rent it elsewhere" figures are real market comparables from the pricing research — keep them honest, never inflate.

---

## /operator-os — Full Page Copy (the Concierge home, ready to paste)

**Browser title:** Operator OS — Your AI operator, on retainer | Clockout
**Meta description:** Keep a pro building your business every couple of weeks. Operator OS is Clockout's AI concierge — new automations, on call between, you own everything. Month to month.

*Repositioning note: this turns /operator-os from the old "personal productivity OS / two doors" page into the home of the recurring AI Concierge — the back-end of the ladder. (If you want a personal-productivity version later, we add it as a secondary section; for now the page sells the concierge.)*

---

### HERO
**Eyebrow:** OPERATOR OS · THE AI CONCIERGE
**H1:** Your business, run on a rail — not a fire alarm.
**Subhead:** Most owners run the day on memory and missed calls. Operator OS puts a pro in your corner who keeps building the systems that catch the money you're leaving on the table — a new automation every couple of weeks, on call when something breaks or a new idea hits. You own all of it. Month to month, cancel anytime.
**CTA:** Find the Money I'm Losing →
**CTA subtext:** Starts with a free 20-minute audit · the concierge is your call, after

---

### WHAT IT IS
**H2:** A pro who keeps building — so you don't have to
- **Biweekly build sessions:** every two weeks we ship a new automation together — missed-call capture, follow-up, reviews, reactivation, dispatch — whatever's leaking most right now.
- **On call between:** text me when something breaks or you've got a new idea. (Same- or next-business-day response.)
- **Your build log:** a running record of everything we've shipped, so you see exactly what you're getting every month.
- **You own everything:** every login, every line of code. Cancel anytime and keep it all.

---

### WHAT THIS COSTS ELSEWHERE
A marketing agency charges **$2,200–$5,000/month** to manage this and locks you into a year. **Operator OS is $750/month, cancel any time, and you own everything we build.** You're not renting access — you're keeping a pro on call who hands you the keys to everything.

---

### THE TWO-WEEK GUARANTEE
If I don't ship a working automation in your first two weeks, that month is free. No long contract to find out if it's worth it — you'll see real work inside 14 days or you don't pay for the month.

---

### PROOF
> "The automations run perfectly in the background… it's saved me 10+ hours a week. If you need complex operations simplified and automated, this is exactly who you want building it." — **Shea S., Founder**

*[Add an in-trade concierge client story here as soon as you have one — this is the page that needs it most.]*

---

### WHO IT'S FOR
**H2:** Built for owners who'd rather run the business than the software
- You'd rather work *on* the business than babysit tools.
- You've seen the leaks (from your audit) and you'd rather keep plugging them than watch them creep back.
- You want a pro on speed-dial — not another contract.

---

### HOW IT STARTS *(no forced upsell — your rule, made explicit)*
**H2:** You don't start here. You arrive here.
**Body:** Everybody starts with the free audit and, if they want it, the one-time build they own outright. The concierge is the door you walk through *only* if you'd rather keep me building — never a forced step, never a contract. You decide after you've seen the work.

---

### PRICE
**H2:** Founding rate — locked for life
- **Operator OS Concierge — $750/mo.** Founding rate — only 8 spots, 3 left — locked for life. Cancel anytime, keep everything. Backed by the Two-Week Guarantee above.
**CTA:** Find the Money I'm Losing →

---

### FINAL CTA
**H2:** Keep a pro in your corner.
**Sub:** Start with the free audit. Add the concierge when it's worth it to you.
**CTA:** Find the Money I'm Losing →

---

## /about — Updates (src/routes/about.tsx)

**The founder story is your equity — keep almost all of it.** Only one paragraph fights the new model. Surgical edit.

**KEEP as-is:** H1 ("I grew up here. I left for ten years. I came back with the playbook."), the full bio (Roscoe / NIU / Uber Product Ops / Walgreens), the "what those years taught me" section (the seven predictable leaks), and "why I came back."

**REPLACE — the "How it works" paragraph** (the one that currently reads *"I don't sell subscriptions… I come in, spend 48 hours mapping… hand it over, and leave. You own everything. No retainer. No monthly fee. Three missed calls a week…"*):

> **How it works:** I don't lock you into anything. It starts with a free 20-minute call where I show you exactly where your business is leaking money. Want it fixed? I build it right inside your tools and hand you every login — you own it outright, no contract, no monthly fee required. Three missed calls a week at a $450 ticket is $5,400 gone every month. That's what we're fixing. And if you'd rather keep me in your corner after — building something new every couple of weeks — you can. Month to month, cancel anytime. Your call, never a condition.

**UPDATE CTAs:** primary button → **"Find the Money I'm Losing →"** (subtext: *Free 20-minute leak audit. Pick a time — I'll show you exactly where you're losing money.*); keep **"Read the FAQ →"** as the secondary link.

**KEEP** the founder-signed guarantee line (it applies to the build).

---

## /faq — Full Q&A (src/data/faqs.ts)

Update the FAQ array in `src/data/faqs.ts`. Below is the full final set — **[REWRITE]** = replace existing, **[KEEP]** = leave as-is, **[NEW]** = add.

**1. [REWRITE] "What does the free audit actually include?"** *(was "the 48-hour audit")*
> It starts with a 20-minute call. Before we talk, I dig into your business; on the call I walk you through exactly where you're losing jobs and money — missed calls, cold quotes, dead follow-ups. A day later you get it in writing: your biggest leaks, ranked, and what I'd fix first. Yours to keep, whether you hire me or not.

**2. [REWRITE] "What's the guarantee, in plain words?"**
> The audit's free — nothing to lose there. And the build is guaranteed: if it doesn't give you back 10 hours a week within 30 days, I keep working until it does, free.

**3. [KEEP] "I already use ServiceTitan / Housecall Pro / GHL. Does this replace it?"** (No — installs on top.)

**4. [REWRITE] "What does 'you own it' actually mean?"** *(kill "no subscription… never will be")*
> Everything I build is yours — every login, API key, line of code, and doc. No contract, no required monthly fee. If you want to keep me on as your concierge afterward, you can — but that's a choice you make month to month and cancel anytime, never a lock-in. Stop any time and you keep everything I built.

**5. [REWRITE] "Is there ongoing support after the build?"** *(replace the $497/quarter retainer)*
> Optional. If you'd rather keep a pro building with you, that's the Operator OS Concierge — a new automation every couple of weeks plus on-call help between, for $750/mo (founding rate, cancel anytime). Most owners start with just the build and add it later, if at all.

**6. [KEEP] "How is this $497 when an agency quoted me $4K/month?"** (Beta pricing; first clients get the discount for a before/after case study.)

**7. [KEEP] "Why can't I just hire a VA for this?"**

**8. [KEEP] "How long until I see results?"** (Missed-call rescue week 1; quote follow-up + reactivation days 14–30; full 10 hrs/week by day 30.)

**9. [KEEP] "What if I'm not in Northern Illinois or Wisconsin?"** (Remote; US-wide during beta.)

**10. [REWRITE] "What if I decide not to move forward after the audit?"** *(audit is free now)*
> Then you keep the written plan and fix whatever you want with it yourself. The audit's free either way — no pitch, no pressure.

**11. [KEEP] "Who's actually doing the work?"** (Me. Donovin.)

**12. [KEEP] "Is my data safe?"**

**13. [NEW] "Do I have to sign up for the monthly concierge?"**
> No. The build is a one-time thing you own outright. The concierge is there only if you want to keep me building — month to month, cancel anytime. You decide after you've seen the work.

**14. [NEW] "Is the call just a sales pitch?"**
> No — it's the audit. You'll leave knowing exactly where you're losing money, with a plan in writing, even if we never work together.

**Also:** update the page's footer pricing strip if present ("$497 beta · normally $1,494…") to drop any "10 hrs/week back in 30 days or the build is free" wording that implies the audit is paid — the audit is free; the guarantee is on the build.

---

## Service Pages ×8 — Updates (services.$slug.tsx + industries.ts)

All 8 trade pages render from **one template** (`src/routes/services.$slug.tsx`) fed by per-trade data (`src/data/industries.ts`). So the shared changes below are made **once in the template** (and any matching strings in `industries.ts` / `offer.ts`). The trade-specific content stays.

**KEEP per trade (from `industries.ts`):** the eyebrow (e.g., "HVAC · Loves Park, Rockford & Roscoe"), the H1 pain headline, the hero subhead, the proof stats, the pain-points section, and the deliverables list. These are strong and trade-specific — don't touch them.

**CHANGE in the shared template (`services.$slug.tsx`):**

**1. Offer line** — currently *"$497, all-in. You own everything. 10 hrs/week back in 30 days or the build is free."* → replace with:
> **Start free.** A 20-minute call where I show you exactly where your {trade} shop is leaking money — plus a written plan you keep. Want it fixed? The build's $497 (beta, reg. $1,494) and you own everything — 10 hrs a week back in 30 days or I keep working. Keep me on as your concierge after if you want — $750/mo, month to month, cancel anytime.

**2. Primary CTA + final CTA buttons** — *"Book the 48-hour audit →"* → **"Find the Money I'm Losing →"** (subtext: *Free 20-minute leak audit. Pick a time — I'll show you exactly where you're losing money.*). All resolve to the /assessment form → cal.com flow.

**3. Final-CTA headline** — currently *"Tell me about your {trade} shop. I'll show you the leak in 48 hours."* → replace with:
> Tell me about your {trade} shop. I'll show you the leaks — free, in a 20-minute call.

**4. Grep `industries.ts` and `offer.ts`** for any per-trade strings containing "48-hour", "$497, all-in", "book the audit", or "in 48 hours" and align them to the above (free-call audit; build you own; optional concierge).

**Note on the deliverables list:** it's part of *the build* (what gets installed) and stays accurate — no change needed. If any deliverable copy implies it's delivered without a call, soften it to fit the audit-call-first flow.

**The 8 slugs:** hvac, plumbing, roofing, electrical, landscaping, cleaning, property-management, real-estate.

---
