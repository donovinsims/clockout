# Site Copy: Single Source of Truth (Master Spec)

**This one file is the complete, current spec for the clockout.us copy update.** It contains the offer model, every global rule, the component/data changes, the full ready-to-paste copy for every page, and the verification checklist. You should not need any other document.

---

## PART 0 — HOW TO USE THIS FILE (read first)

- **This file wins.** Where anything in the repo disagrees with this file, this file is correct.
- **The repo's existing docs are STALE — do not copy from them.** `docs/*.md`, `.agents/product-marketing.md`, and `CODEBASE_DOCUMENTATION.md` describe the OLD model ("48-hour audit," "no subscription/no retainer," "$497/quarter," "9-day build," "15 beta spots," Operator OS as a "productivity system"). Ignore them as a copy source. They may be overwritten later; never pull copy from them.
- **Work on a branch and open a PR.** Never commit to `main`.
- **Do NOT:** change routes/URLs; delete `privacy` or `terms`; change the Tally form ID or the `cal.com/donovin` handle; invent pricing numbers; fabricate testimonials, ratings, or scarcity; add unrequested features (this is a copy task — no new popups, lead magnets, or behaviors).
- **When done:** run the verification in PART 5 and paste the grep evidence into the PR.

---

## PART 1 — THE MODEL

**Clockout in one paragraph.** Done-for-you AI workflow automation for local-service trades; solo founder Donovin Sims (Roscoe, IL); beta. The ladder: a **free 20-minute revenue-leak audit call** → a written **"Money-Leak Map"** (theirs to keep) → **The Build, $497 beta** (reg. $1,494, one-time, client owns everything; **10-Hour Guarantee**) → **Operator OS Concierge, $750/mo** founding (cancel anytime, own everything; **Two-Week Guarantee**; optional, never forced).

**The funnel (locked).** `/assessment` short form → on submit, **redirect to `cal.com/donovin`** (prefilled name/email/phone) → **free 20-minute call = the live audit** → **written Money-Leak Map ~1 day later** → **optional paid Build** (done-with-you, client owns everything) → **optional Operator OS Concierge** ($750/mo). "The audit" = the free call + the written Map after it. One name everywhere: "audit." Never promise a no-call report.

**Voice.** Direct-response, plain-spoken — talk like a contractor, not a SaaS deck. Short sentences. Loss-framed where honest. Risk-reversed. Confident and warm (the founder's first-person voice). Specific over superlative.

**Banned vocabulary (hard rule).** Never use: game-changing, revolutionary, disruptive, next-level, 10x, secret, unlock, supercharge, seamless, cutting-edge, "AI-powered" as a brag. **No exclamation points.** Never write "$X value" without a real, named comparable.

---

## PART 2 — GLOBAL RULES

### 2.1 Global find-and-replace (apply across ALL files)

Delete these now-false promises wherever they appear (expect **zero** grep hits when done):

- `no call required`
- `in 48 hours` / `48-hour audit` / `48 hours` (as the deliverable or a button)
- `No phone tag`
- `a spec sheet, not a sales funnel`
- `9 day` / `9-day` / `7 day` / `7-day` build framing
- the anti-recurring stance: `No retainer`, `No subscription` / `No subscription. Ever.`, `no monthly fee` (as an absolute), `there is no Clockout subscription`, `quarterly retainer` / `$497/quarter`

Replace the anti-recurring lines with: **"No contracts. Cancel anytime. You own everything."**

### 2.2 CTA standard

- **Sitewide button** (every CTA that links to `/assessment`): **`Find the Money I'm Losing →`** (keep the arrow).
- **Standard subtext beneath it:** **`Free 20-minute leak audit. Pick a time — I'll show you exactly where you're losing money.`**
- **Homepage hero — the ONLY exception:** **`Get Your 10 Hours Back →`**
- Set the standard in `CTA.tsx`, `FinalCta.tsx`, `MobileStickyCta.tsx`.
- **Assessment form submit button:** **`Grab My Call Time →`**
- Do not invent secondary CTA labels (e.g. "See the leaks first") — one button, one subtext.

### 2.3 Naming conventions (use these exact words)

- Free written deliverable = **Money-Leak Map** (everywhere; never "report," "action plan," or "audit report").
- The diagnostic = **the audit** (lowercase, one word) = the free 20-min call + the Map after.
- One-time build = **The Build** ($497 beta / $1,494 standard).
- Recurring offer / AI Concierge = **Operator OS**.
- Guarantees = **The 10-Hour Guarantee** (the Build) · **The Two-Week Guarantee** (Operator OS).

### 2.4 Pricing (locked) + real anchors + scarcity

- Use only these numbers: **Build $497 beta / $1,494 standard (one-time); Operator OS $750/mo founding.** No other prices. The "$497/quarter retainer" must appear nowhere.
- Real, named anchors only (never inflate): the Build stack rents from a GHL/marketing agency for **$797–$1,497/mo**; answering services **$300–$800/mo**; reputation/review tools **$50–$150/mo**; the concierge anchor is a marketing agency at **$2,200–$5,000/mo with a 12-month lock-in**. Cost-of-problem: 3 missed calls/week at a $450 ticket ≈ **$5,400/mo**.
- **Scarcity (real): 8 founding spots, 3 left.** Use this exact count on Home, /pricing, /assessment, /operator-os. Update the "left" number as spots fill; never inflate.

### 2.5 The two named guarantees (exact wording)

- **The 10-Hour Guarantee (the Build):** "if the Build doesn't give you back 10 hours a week within 30 days, I keep working — free — until it does. And step one, the audit, is free, so you're risking 20 minutes, not a dime."
- **The Two-Week Guarantee (the Concierge):** "if I don't ship a working automation in your first two weeks on the concierge, that month is free."

### 2.6 The Build value stack (paste into /pricing Rung 2 + Home offer block)

- 24/7 missed-call text-back + AI front desk — catches the calls you miss on a job (answering services run $300–$800/mo)
- Quote follow-up engine — chases every quote at 1 hour, 1 day, 3 days, 7 days; recovers 20–35% that would've gone cold
- Automatic review engine — turns happy jobs into Google reviews on autopilot (reputation tools run $50–$150/mo)
- Past-customer reactivation — wakes up the list you haven't called in a year
- Owner dashboard — calls answered, quotes recovered, hours saved, in real numbers
- 30 days of tuning after handover
- Your Money-Leak Map from the audit

### 2.7 Social proof — testimonial HARD RULE

We have ONE genuine testimonial: **Shea S.**, from a different field (a client-portal/community build) — **NOT a trades client.**

- **Do NOT disguise it as a trades business**, and **do NOT relabel his title to hide that he's cross-industry.** Fake-feeling proof repels skeptics and risks FTC trouble.
- Frame it honestly as cross-industry proof. The section header carries the frame: _"It works across industries — the outcome's the same."_
- Do not reword his quote (use the canonical version in PART 4). Removing an exclamation point is the only allowed edit.
- Every other testimonial/rating slot is a **placeholder** — leave it as a placeholder. Never invent a Google rating or an in-trade testimonial. (Two real proofs still to collect: a Google rating + one in-trade client quote.)

### 2.8 Scope guardrail

This is a copy task. Do not add features, popups, lead magnets, success-state animations, or data behaviors that weren't requested. If you believe something behavioral is needed, flag it in the PR description — don't ship it.

---

## PART 3 — FILE MAP + COMPONENT / DATA CHANGES

**Stack:** TanStack Start (React 19 + TanStack Router + Vite + Tailwind 4). Copy is hardcoded in route files, data files, and shared components. No CMS. Make shared changes in components/data ONCE; per-page changes in the route file.

**Routes:** `src/routes/index.tsx` (Home), `pricing.tsx`, `about.tsx`, `faq.tsx`, `assessment.tsx`, `operator-os.tsx`, `services.tsx`, `services.$slug.tsx` (single template for all 8 trade pages), `contact.tsx`, `privacy.tsx`, `terms.tsx`. Legacy: `audit.tsx`, `recovery-guide.tsx`.
**Data:** `src/data/faqs.ts`, `src/data/industries.ts`, `src/data/offer.ts`, `src/data/serviceArea.ts`.
**Shared components:** `src/components/site/CTA.tsx`, `FinalCta.tsx`, `MobileStickyCta.tsx`, `Hero.tsx`, `PageHero.tsx`, `OfferCard.tsx`, `GuaranteeBlock.tsx`, `HowItWorks.tsx`, `LeakCalculator.tsx`, `FAQ.tsx`, `Footer.tsx`; `src/components/ui/button.tsx`.

### 3.1 `src/data/offer.ts` (constants — fix once, cascades everywhere)

- `GUARANTEE_TITLE` → **"The 10-Hour Guarantee"**; `GUARANTEE_BODY` → **"if the Build doesn't give you back 10 hours a week within 30 days, I keep working — free — until it does."**; `GUARANTEE` = `${GUARANTEE_TITLE}: ${GUARANTEE_BODY}`. `OfferCard.tsx` reads `GUARANTEE_TITLE` + `GUARANTEE_BODY` directly; `GuaranteeBlock.tsx` reads the combined `GUARANTEE`.
- Primary CTA label → **`Find the Money I'm Losing →`**; CTA subtext → the standard subtext (2.2). Remove any "Reserve Beta Access" / "Book the 48-hour audit" strings.
- Build price: **$497 beta**, **$1,494 standard**. Concierge: **$750/mo**. Remove any `$497/quarter`.
- Founding spots: **8 total, 3 left.**

### 3.2 CTA surfaces

- `CTA.tsx`, `FinalCta.tsx`, `MobileStickyCta.tsx` → label + subtext from 2.2. (A FinalCta headline like "Find out what your phone's been costing you." is acceptable, as long as the button label + subtext are the standard ones.)
- `Hero.tsx` / `index.tsx` hero → keep **`Get Your 10 Hours Back →`**.

### 3.3 `HowItWorks.tsx` — remove the day-countdown entirely

There is **no fixed build-day count** in the current model. Delete any "Day 9 / Day 8 / Handover / 48 hours / 9 days" language. Use the Home ladder's three steps (see Home copy in PART 4):

1. Free 20-minute audit call (the audit) → your Money-Leak Map to keep.
2. I build it with you — installed in your existing tools in days; you own every login and line of code.
3. Keep me on as your concierge, or don't — month to month, your call.

### 3.4 `GuaranteeBlock.tsx` / `OfferCard.tsx`

- Eyebrow / label → **"The 10-Hour Guarantee."** Both must read the `GUARANTEE_TITLE`/`GUARANTEE_BODY`/`GUARANTEE` constants from `offer.ts` (no hardcoded "Money-Back Guarantee").

### 3.5 `LeakCalculator.tsx`

- Any "in 48 hours" CTA → **`Find the Money I'm Losing →`**, resolving to the `/assessment` flow.

### 3.6 `__root.tsx` meta

- Strip the anti-recurring phrases from the global meta descriptions (2.1). Use the new funnel framing (see per-page meta in PART 4).

### 3.7 Legacy routes

- `audit.tsx` → should redirect to `/assessment` (keep it a redirect).
- `recovery-guide.tsx` → **redirect to `/assessment` OR fully align its copy** to the current offer. Do not leave a half-old page live; do not delete the route.

### 3.8 Funnel wiring (`assessment.tsx`)

Keep the Tally form; on submit, **redirect to `cal.com/donovin`** with name/email/phone as URL params (Tally "redirect on completion" + answer piping → cal.com prefill). Cal.com sends confirmation + reminders. Single-column, labels always visible, 44px+ mobile tap targets. **Do not change the Tally form ID.** No pricing on `/assessment`.

---

## PART 4 — FULL PAGE COPY (ready to paste)

### 4.1 `/assessment` (src/routes/assessment.tsx)

**Browser title:** Free 20-Minute Revenue-Leak Audit — Clockout
**Meta description:** Book a free 20-minute call. I'll show you exactly where your business is leaking money — and send you your Money-Leak Map to keep, whether you hire me or not.

**HERO**

- Eyebrow: FREE REVENUE-LEAK AUDIT
- H1: See exactly where your business is leaking money — in one 20-minute call.
- Subhead: Tell me a few things about your shop and grab a time. Before we talk, I'll dig into your business — then on a quick 20-minute call I'll show you exactly where you're losing jobs and dollars: the missed calls, the quotes going cold, the follow-ups that never happen. A day later, you get your Money-Leak Map in writing — yours to keep, whether you hire me or not.
- CTA button: Find the Money I'm Losing →
- CTA subtext: Free 20-minute call · grab a time in 30 seconds · no pitch, no pressure
- Trust line: Built and run by Donovin — local, in Roscoe. Not a call center. No contract.

**WHAT YOU WALK AWAY WITH — FREE, EITHER WAY**

- H2: What you get — free, even if you never hire me
- On the call: a live walkthrough of exactly where you're losing money, in real dollars — not vague "you should use AI" advice.
- A day later: your Money-Leak Map — your biggest leaks, ranked, and the first one I'd plug. Keep it forever.
- Zero obligation: if you never hire me, you've still got a Map you can run yourself.
- Subline: I can't hand you this before we talk — I don't know your business yet. The call is how I earn the right to give it to you.

**WHERE THE MONEY LEAKS**

- H2: Here's what I'm hunting for

| Leak                    | Typical bleed | What it is                                                                            |
| ----------------------- | ------------- | ------------------------------------------------------------------------------------- |
| Missed calls            | ~$5,400/mo    | Every call you can't grab on a roof or under a sink is a job walking to the next guy. |
| After-hours drop-off    | ~$2,800/mo    | Nights and weekends ring out to a voicemail nobody checks until Monday.               |
| Slow quote follow-up    | ~$3,200/mo    | Quotes sent, then silence — 20–35% are recoverable with follow-up alone.              |
| Manual admin & dispatch | ~$1,950/mo    | The hours you burn Sunday night on data entry instead of living your life.            |

_Ranges for a shop your size, based on industry data (ServiceTitan, PMI). Your real number comes out on the call — that's what the Map is for._

**HOW IT WORKS**

- H2: How it works, start to finish
- 01 — Tell me about your shop. 60 seconds, the form below.
- 02 — Grab a time. You'll jump straight to my calendar.
- 03 — I do my homework. I dig into your business before we ever talk.
- 04 — The 20-minute call. I show you the leaks in dollars — then send your Money-Leak Map.

**THE FORM**

- Header above form: Start here — takes about 60 seconds
- Fields: (1) Your name; (2) Business name _(so I can look you up before we talk)_; (3) Trade — HVAC / Plumbing / Roofing / Electrical / Landscaping / Cleaning / Property Management / Real Estate / Other; (4) Email; (5) Phone + Best way to reach you? [Call] [Text]; (6) What's costing you the most right now? — Missed calls / Slow quote follow-ups / Disconnected tools / Scheduling chaos / Chasing payments / Reviews / Not sure — that's why I want the audit; (7) _(optional)_ Team size — Just me / 2–5 / 6–15 / 16+
- Submit button: Grab My Call Time →
- Microcopy under button: You'll go straight to my calendar to pick a time. I'll never share your info — no spam, ever.
- Implementation note: on submit, Tally redirects to cal.com/donovin with name/email/phone passed through. Single-column, labels visible, 44px+ mobile targets.

**STRAIGHT ANSWERS (objections)**

- H2: Straight answers
- "Is this just a sales call?" No. It's 20 minutes, it's free, and you leave with your Money-Leak Map — even if you never hire me. I'd rather give you something useful than pitch you.
- "I don't really have a website or much online." Even better — that's usually where the biggest leaks are hiding. You'll get more out of this than most.
- "What's it going to cost me?" The audit — the call and the Map — is free. If you want the leaks actually fixed, that's the paid part, and it's entirely your call after you've seen the Map.
- "Who am I talking to?" Me. Donovin. I run Clockout solo, out of Roscoe — you won't get handed to a rep.

**SOCIAL PROOF (right above final CTA)**

> "It's saved me 10+ hours a week… complex operations, simplified and automated. Exactly who you want building it." — Shea S., Founder

_(Add a Google rating / review count and an in-trade quote as soon as you have them — placeholders until then.)_

**FINAL CTA**

- H2: Find out what your phone's been costing you.
- Sub: 20 minutes. Free. Your Money-Leak Map to keep. Grab a time.
- Confidence line: If we get on the call and I can't point to real money you're leaving on the table, I'll be shocked — and you keep the Map anyway. You're risking 20 minutes.
- CTA button: Find the Money I'm Losing →
- Scarcity: Only 8 founding spots — 3 left. Book while there's room.

### 4.2 Home (src/routes/index.tsx)

**Browser title:** Clockout — Stop losing jobs to missed calls, cold quotes & dead follow-ups
**Meta description:** I find where your service business is leaking money, build the fixes inside the tools you already use, and hand you the keys. Starts with a free 20-minute audit.

**HERO**

- Eyebrow: FIND IT FREE · FIXED IN DAYS · YOURS FOREVER
- H1: What would you do with 10 extra hours a week?
- Subhead: I find exactly where your business is leaking money — the calls you miss on a roof or under a sink, the quotes that go cold, the follow-ups that never happen — and I build the fixes right inside the tools you already use. You own all of it. It starts with a free 20-minute call where I show you the leaks, in dollars.
- Primary CTA: Get Your 10 Hours Back →
- CTA subtext: Free 20-minute audit call · I show you the leaks, in dollars · no pitch
- Secondary: Or text AUDIT to (608) 713-1651
- Scarcity bar: Only 8 founding spots — 3 left · free audit, your Money-Leak Map either way

**TOOLS STRIP** — keep as-is ("I build inside the tools you already pay for" — Jobber · Housecall Pro · ServiceTitan · Twilio · Make · OpenAI · GoHighLevel)

**HOW IT WORKS (the ladder)**

- H2: Free to start. Fixed in days. Yours to keep.
- 01 — Free 20-minute audit call. I dig into your business, then show you exactly where you're losing money — and send your Money-Leak Map, yours to keep, hire me or not.
- 02 — I build it with you. I install the fixes inside your existing tools in days. Every login and line of code is yours.
- 03 — Keep me on, or don't. Run it solo forever — or keep me in your corner as your AI concierge, building something new every couple weeks. Your call.

**TESTIMONIAL (real)**

- H2: It works across industries — the outcome's the same: 10+ hours a week back.

> "I needed a seamless, professional client portal, and the system Donovin built exceeded every expectation. The automations run perfectly in the background, and the whole client experience is smooth. It's saved me 10+ hours a week and freed me to focus on my clients. If you need complex operations simplified and automated, this is exactly who you want building it." — Shea S., Founder

_[Add a Google rating + review count, and one in-trade client quote when you have it — last proof gap.]_

**FOUNDER PROOF (authority + unity)**
"I ran operations at Uber — live events with 50,000+ attendees and real-time dispatch — and at Walgreens at national retail scale, where a broken system bleeds money by the minute. Now I bring that same playbook to Main Street, built for shops like yours across the Stateline: Rockford, Roscoe, Loves Park, and Beloit." [Keep the rest of the existing bio.]

**LEAK CALCULATOR** — keep ("How much is the phone costing you?" — keep the interactive slider).

**OFFER SECTION (reframe + value stack)**

- Eyebrow: The offer
- H2 (page-level, above the card): A free audit, a fix you own, and 10 hours back in 30 days.
- OfferCard sub-heading (inside the card): Start free. Own what I build. Keep me on only if you want.
- Body: First, the free audit — a 20-minute call where I show you where you're leaking money, plus your Money-Leak Map to keep whether you hire me or not. Want it fixed? I build it with you and hand you the keys — no contract, you own everything.
- What the Build installs: 24/7 missed-call text-back + AI front desk · Quote follow-up engine — recovers 20–35% of quotes that go cold · Automatic Google-review engine · Past-customer reactivation + owner dashboard · 30 days of tuning + your Money-Leak Map
- A GoHighLevel or marketing agency charges $797–$1,497 a month to run this same stack, and you never own it. The Build is $497, once — you own all of it. Three missed calls a week at a $450 ticket is $5,400 walking out the door every month — the kind of number I turn up in a real audit.
- Ladder mini-cards: The Audit — Free (the 20-min call + your Money-Leak Map). · The Build — $497 (beta, reg. $1,494). The full stack above. You own it. 30 days of tuning. · Operator OS Concierge — $750/mo (founding, cancel anytime). I keep building with you.
- The 10-Hour Guarantee: if the Build doesn't give you 10 hours a week back within 30 days, I keep working — free — until it does.
- CTA: Find the Money I'm Losing →
- CTA subtext: Free 20-minute leak audit. Pick a time — I'll show you exactly where you're losing money.
- Below the card: After the build, keep me on as your concierge if you want — $750/mo, month to month, cancel anytime. Or don't. You own everything either way.

**INDUSTRY GRID** — keep (links to the 8 vertical pages).

**FAQ (homepage subset)**

- "Is there a subscription?" Only if you want one. The build is yours to own outright — no contract, no monthly fee required. If you choose the concierge to keep me building, that's month to month and you cancel anytime.
- "What does the free audit cost me?" Nothing. 20 minutes, and you walk away with your Money-Leak Map — even if you never hire me.
- "Who actually does the work?" Me. Donovin. Solo, out of Roscoe.
- "What if I'm not local?" The work's remote — I take builds anywhere in the US during the beta.

**FINAL CTA**

- H2: Find out what your phone's been costing you.
- Sub: Free 20-minute audit. Your Money-Leak Map to keep. Grab a time.
- Scarcity: Only 8 founding spots — 3 left.
- CTA: Find the Money I'm Losing →

### 4.3 `/pricing` (src/routes/pricing.tsx)

**Browser title:** Pricing — Clockout · Start free · Own what I build · No contracts
**Meta description:** Start with a free audit. Pay once for the build and own everything. Keep me on as your concierge only if you want — month to month, cancel anytime.

**HERO**

- Eyebrow: PRICING
- H1: Start free. Own what I build. No contracts, ever.
- Subhead: No rented software. No 12-month lock-in. No dashboard you'll never log into. You start with a free audit, pay once to get it built (and own every bit of it), and keep me on only if it's worth it to you — cancel any month.

**THE LADDER** — H2: Three steps. Stop wherever you want.

RUNG 1 — The Audit

- Free
- For: "I think I'm losing money but I don't know where."
- What you get: A 20-minute call where I show you exactly where you're leaking jobs and dollars, plus your Money-Leak Map — your biggest leaks ranked, with the first one I'd fix. Yours to keep, hire me or not.
- CTA: Find the Money I'm Losing →

RUNG 2 — The Build ⭐ most owners start here

- $497 beta (reg. $1,494) · one-time · you own it
- [Value stack — paste the 7 bullets from 2.6]
- A GoHighLevel or marketing agency charges $797–$1,497 every month to run this same stack — and you never own it. The Build is $497, once. You own all of it, and it keeps running the day you stop paying. Three missed calls a week at a $450 ticket is $5,400 walking out the door every month — the kind of number I turn up in a real audit. The fix is a one-time $497.
- CTA: Find the Money I'm Losing →

RUNG 3 — Operator OS Concierge

- $750/mo — founding rate, locked for life · cancel anytime
- For: "I'd rather keep a pro in my corner than babysit this myself."
- What you get: I stay on as your AI operator — a new automation every couple weeks, biweekly build sessions, on call between, and a running log of everything we've built. You still own all of it. Month to month. Cancel any time and keep everything.
- A marketing agency charges $2,200–$5,000/month to manage this and locks you into a year. Operator OS is $750/month, cancel any time, and you own everything we build.
- First two weeks free if I stall: if I don't ship a working automation in your first two weeks, that month's on me.
- Note: You only get here after the build — never a forced upsell. You decide once you've seen the work.
- CTA: Find the Money I'm Losing →

**THE GUARANTEES**

- The 10-Hour Guarantee (the Build): if the Build doesn't give you back 10 hours a week within 30 days, I keep working — free — until it does. And step one, the audit, is free, so you're risking 20 minutes, not a dime.
- The Two-Week Guarantee (the Concierge): if I don't ship a working automation in your first two weeks on the concierge, that month is free.

**THE COMPARISON** — H2: What an agency rents you vs. what I build you

|                    | Typical agency / SaaS              | Clockout                                                         |
| ------------------ | ---------------------------------- | ---------------------------------------------------------------- |
| Pricing            | $797–$5,000/mo, forever            | Free audit · $497 one-time build · concierge only if you want it |
| Contract           | 12 months, locked in               | None. Cancel any month.                                          |
| Ownership          | They keep it — leave and it's gone | You own everything: logins, code, docs                           |
| If you stop paying | It all shuts off                   | You keep every automation                                        |
| Install time       | 2–6 weeks                          | Days                                                             |
| Guarantee          | 60-day refund, fine print          | 10 hours a week back in 30 days, or I keep working               |

**STRAIGHT ANSWERS (objections)**

- "Why would I pay monthly after I own it?" You don't have to — plenty of owners take the build and run it solo forever. The concierge is for the ones who'd rather keep a pro shipping new automations every couple weeks than do it themselves. No contract, cancel the month it stops being worth it.
- "Why so cheap for the build?" Beta pricing — the first clients get the discount in exchange for a before/after case study. It goes to $1,494 after.
- "What if it doesn't work?" The audit's free, and the build's backed by the 10-Hour Guarantee: 10 hours a week back in 30 days, or I keep working — free.

**PROOF (right above final CTA)**

> "It's saved me 10+ hours a week… complex operations, simplified and automated. Exactly who you want building it." — Shea S., Founder

_[Add a Google rating + an in-trade client quote here as soon as you have them.]_

**FINAL CTA**

- H2: Start with the free audit. Decide the rest later.
- Sub: 20 minutes, free, and your Money-Leak Map to keep.
- Scarcity: Only 8 founding spots — 3 left. Founding pricing locks for life while there's room.
- CTA: Find the Money I'm Losing →

### 4.4 `/operator-os` (src/routes/operator-os.tsx) — the Concierge home

_Repositions this route from the old "personal productivity / two doors" page into the home of the recurring AI Concierge._

**Browser title:** Operator OS — Your AI operator, on retainer | Clockout
**Meta description:** Keep a pro building your business every couple of weeks. Operator OS is Clockout's AI concierge — new automations, on call between, you own everything. Month to month.

**HERO**

- Eyebrow: OPERATOR OS · THE AI CONCIERGE
- H1: Your business, run on a rail — not a fire alarm.
- Subhead: Most owners run the day on memory and missed calls. Operator OS puts a pro in your corner who keeps building the systems that catch the money you're leaving on the table — a new automation every couple of weeks, on call when something breaks or a new idea hits. You own all of it. Month to month, cancel anytime.
- CTA: Find the Money I'm Losing →
- CTA subtext: Starts with a free 20-minute audit · the concierge is your call, after

**WHAT IT IS** — H2: A pro who keeps building — so you don't have to

- Biweekly build sessions: every two weeks we ship a new automation together — missed-call capture, follow-up, reviews, reactivation, dispatch — whatever's leaking most right now.
- On call between: text me when something breaks or you've got a new idea. (Same- or next-business-day response.)
- Your build log: a running record of everything we've shipped, so you see exactly what you're getting every month.
- You own everything: every login, every line of code. Cancel anytime and keep it all.

**WHAT THIS COSTS ELSEWHERE**
A marketing agency charges $2,200–$5,000/month to manage this and locks you into a year. Operator OS is $750/month, cancel any time, and you own everything we build. You're not renting access — you're keeping a pro on call who hands you the keys to everything.

**THE TWO-WEEK GUARANTEE**
If I don't ship a working automation in your first two weeks, that month is free. No long contract to find out if it's worth it — you'll see real work inside 14 days or you don't pay for the month.

**PROOF**

> "The automations run perfectly in the background… it's saved me 10+ hours a week. If you need complex operations simplified and automated, this is exactly who you want building it." — Shea S., Founder

_[Add an in-trade concierge client story as soon as you have one — this page needs it most.]_

**WHO IT'S FOR** — H2: Built for owners who'd rather run the business than the software

- You'd rather work on the business than babysit tools.
- You've seen the leaks (from your audit) and you'd rather keep plugging them than watch them creep back.
- You want a pro on speed-dial — not another contract.

**HOW IT STARTS (no forced upsell)** — H2: You don't start here. You arrive here.

- Everybody starts with the free audit and, if they want it, the one-time build they own outright. The concierge is the door you walk through only if you'd rather keep me building — never a forced step, never a contract. You decide after you've seen the work.

**PRICE** — H2: Founding rate — locked for life

- Operator OS Concierge — $750/mo. Founding rate — only 8 spots, 3 left — locked for life. Cancel anytime, keep everything. Backed by the Two-Week Guarantee above.
- CTA: Find the Money I'm Losing →

**FINAL CTA**

- H2: Keep a pro in your corner.
- Sub: Start with the free audit. Add the concierge when it's worth it to you.
- CTA: Find the Money I'm Losing →

### 4.5 `/about` (src/routes/about.tsx) — surgical edit

Keep almost all of it. KEEP as-is: H1 ("I grew up here. I left for ten years. I came back with the playbook."), the full bio (Roscoe / NIU / Uber Product Ops / Walgreens), the "what those years taught me" section (the seven predictable leaks), and "why I came back." KEEP the founder-signed guarantee line (it applies to the build).

REPLACE the "How it works" paragraph (the one that reads "I don't sell subscriptions… spend 48 hours mapping… No retainer. No monthly fee…") with:

> How it works: I don't lock you into anything. It starts with a free 20-minute call where I show you exactly where your business is leaking money. Want it fixed? I build it right inside your tools and hand you every login — you own it outright, no contract, no monthly fee required. Three missed calls a week at a $450 ticket is $5,400 gone every month. That's what we're fixing. And if you'd rather keep me in your corner after — building something new every couple of weeks — you can. Month to month, cancel anytime. Your call, never a condition.

UPDATE CTAs: primary → "Find the Money I'm Losing →" (standard subtext); keep "Read the FAQ →" as the secondary link.

### 4.6 `/faq` (src/data/faqs.ts) — full final set

[REWRITE] = replace existing · [KEEP] = leave as-is · [NEW] = add.

1. [REWRITE] "What does the free audit actually include?" → It starts with a 20-minute call. Before we talk, I dig into your business; on the call I walk you through exactly where you're losing jobs and money — missed calls, cold quotes, dead follow-ups. A day later you get it in writing: your biggest leaks, ranked, and what I'd fix first. Yours to keep, whether you hire me or not.
2. [REWRITE] "What's the guarantee, in plain words?" → The audit's free — nothing to lose there. And the build is guaranteed: if it doesn't give you back 10 hours a week within 30 days, I keep working until it does, free.
3. [KEEP] "I already use ServiceTitan / Housecall Pro / GHL. Does this replace it?" (No — installs on top.)
4. [REWRITE] "What does 'you own it' actually mean?" → Everything I build is yours — every login, API key, line of code, and doc. No contract, no required monthly fee. If you want to keep me on as your concierge afterward, you can — but that's a choice you make month to month and cancel anytime, never a lock-in. Stop any time and you keep everything I built.
5. [REWRITE] "Is there ongoing support after the build?" → Optional. If you'd rather keep a pro building with you, that's the Operator OS Concierge — a new automation every couple of weeks plus on-call help between, for $750/mo (founding rate, cancel anytime). Most owners start with just the build and add it later, if at all.
6. [KEEP] "How is this $497 when an agency quoted me $4K/month?" (Beta pricing; first clients get the discount for a before/after case study.)
7. [KEEP] "Why can't I just hire a VA for this?"
8. [KEEP] "How long until I see results?" (Missed-call rescue week 1; quote follow-up + reactivation days 14–30; full 10 hrs/week by day 30.)
9. [KEEP] "What if I'm not in Northern Illinois or Wisconsin?" (Remote; US-wide during beta.)
10. [REWRITE] "What if I decide not to move forward after the audit?" → Then you keep the written plan and fix whatever you want with it yourself. The audit's free either way — no pitch, no pressure.
11. [KEEP] "Who's actually doing the work?" (Me. Donovin.)
12. [KEEP] "Is my data safe?"
13. [NEW] "Do I have to sign up for the monthly concierge?" → No. The build is a one-time thing you own outright. The concierge is there only if you want to keep me building — month to month, cancel anytime. You decide after you've seen the work.
14. [NEW] "Is the call just a sales pitch?" → No — it's the audit. You'll leave knowing exactly where you're losing money, with a plan in writing, even if we never work together.

Also: update any footer pricing strip ("$497 beta · normally $1,494…") to drop wording that implies the audit is paid — the audit is free; the guarantee is on the build.

### 4.7 Service pages ×8 (src/routes/services.$slug.tsx + src/data/industries.ts)

All 8 trade pages render from one template fed by per-trade data. Shared changes are made once in the template (+ matching strings in `industries.ts` / `offer.ts`). Trade-specific content stays.

KEEP per trade (from `industries.ts`): the eyebrow, the H1 pain headline, the hero subhead, the proof stats, the pain-points section, and the deliverables list.

CHANGE in the shared template:

1. Offer line — currently "$497, all-in. You own everything. 10 hrs/week back in 30 days or the build is free." → replace with: "Start free. A 20-minute call where I show you exactly where your {trade} shop is leaking money — plus a written plan you keep. Want it fixed? The build's $497 (beta, reg. $1,494) and you own everything — 10 hrs a week back in 30 days or I keep working. Keep me on as your concierge after if you want — $750/mo, month to month, cancel anytime."
2. Primary + final CTA buttons — "Book the 48-hour audit →" → "Find the Money I'm Losing →" (standard subtext). All resolve to the /assessment → cal.com flow.
3. Final-CTA headline — "Tell me about your {trade} shop. I'll show you the leak in 48 hours." → "Tell me about your {trade} shop. I'll show you the leaks — free, in a 20-minute call."
4. Grep `industries.ts` and `offer.ts` for "48-hour", "$497, all-in", "book the audit", "in 48 hours" → align to the above.
   The deliverables list is part of the build (what gets installed) and stays accurate; if any deliverable copy implies delivery without a call, soften it to fit the audit-call-first flow.

The 8 slugs: hvac, plumbing, roofing, electrical, landscaping, cleaning, property-management, real-estate.

---

## PART 5 — VERIFICATION / DEFINITION OF DONE

Run these and paste the results into the PR:

**Expect ZERO hits (grep `src/`):** `48 hour`, `48-hour`, `9 day`, `9-day`, `7 day`, `7-day`, `no subscription`, `no retainer`, `No phone tag`, `spec sheet`, `$497/quarter`, `per quarter`, `Reserve Beta`, `Book the 48-hour`, `15 spots`, `15 beta`, `Money-Back Guarantee`.

**Expect ≥1 hit (grep `src/`):** `Find the Money I'm Losing`, `Get Your 10 Hours Back`, `Money-Leak Map`, `750`, `1,494`, `497`, `Two-Week Guarantee`, `10-Hour Guarantee`, `3 left`, `8 founding`.

**Also confirm:**

- [ ] No exclamation points in visible copy; no banned words (PART 1).
- [ ] Every `/assessment` CTA resolves to the Tally form → `cal.com/donovin`; Tally form ID + cal handle unchanged; no pricing on `/assessment`.
- [ ] `/pricing` renders the 3 rungs with the $1,494 anchor shown and no `$497/quarter` anywhere.
- [ ] `/operator-os` is the concierge home (Two-Week Guarantee, $750/mo, biweekly, optional/never-forced).
- [ ] `GuaranteeBlock` reads the `GUARANTEE` constant and `OfferCard` reads `GUARANTEE_TITLE`/`GUARANTEE_BODY` = The 10-Hour Guarantee.
- [ ] `HowItWorks` has no "Day N / Handover / 48 hours / 9 days" — it uses the 3-step ladder.
- [ ] Shea S. testimonial: quote unedited, attribution honest/cross-industry, framing intact. All other proof = placeholders.
- [ ] `audit.tsx` redirects to `/assessment`; `recovery-guide.tsx` redirected or fully aligned; no routes deleted; `privacy`/`terms` untouched.
- [ ] No unrequested features added.
- [ ] `tsc --noEmit` clean; production build passes.
- [ ] Branch + PR (not `main`).
