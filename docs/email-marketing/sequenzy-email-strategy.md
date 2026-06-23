# Sequenzy Email Marketing Strategy — Clockout.us

> **Canonical reference** for how Clockout uses Sequenzy (Amazon SES) for email marketing, transactional sends, lead nurturing, and funnel automation. Business SSOT: `docs/*.md`. This doc is the email-marketing SSOT.

**Last updated:** 2026-06-21
**Sending domain verified:** clockout.us ✅
**API key:** `SEQUENZY_API_KEY` in `.env`

---

## Table of Contents

1. [Overview & Current State](#1-overview--current-state)
2. [Email Infrastructure & Deliverability](#2-email-infrastructure--deliverability)
3. [Subscriber & List Architecture](#3-subscriber--list-architecture)
4. [Tag & Segmentation Strategy](#4-tag--segmentation-strategy)
5. [Transactional Emails](#5-transactional-emails)
6. [Nurture Sequences](#6-nurture-sequences)
7. [Campaign Strategy](#7-campaign-strategy)
8. [Email Templates & Brand Voice](#8-email-templates--brand-voice)
9. [Prospecting Integration](#9-prospecting-integration)
10. [Conversations / Reply Tracking](#10-conversations--reply-tracking)
11. [Analytics & Optimization](#11-analytics--optimization)
12. [Technical Implementation Plan](#12-technical-implementation-plan)
13. [Appendix: Sequenzy API Reference Map](#13-appendix-sequenzy-api-reference-map)

---

## 1. Overview & Current State

### 1.1 Why email marketing for Clockout

Clockout's funnel already lives partly in email:

- **Post-audit follow-up** (Money-Leak Map delivery) — currently sent manually from Gmail.
- **No-show re-booking** — manual.
- **Cold email prospecting** — from Batch 1 lead-gen, 121 direct emails discovered.
- **Lead nurturing** — leads that book an audit but don't buy; leads that don't book at all.

Sequenzy lets us systematize all of these: track opens/clicks, maintain the founder's voice at scale, segment by trade and stage, and measure what converts.

### 1.2 Current state

| Capability                         | Status                  |
| ---------------------------------- | ----------------------- |
| Sending domain (clockout.us)       | ✅ Verified in Sequenzy |
| DNS records (DKIM, SPF, MX, DMARC) | ✅ Added to Vercel DNS  |
| Amazon SES production access       | Via Sequenzy            |
| API key in `.env`                  | ✅ `SEQUENZY_API_KEY`   |
| Subscriber lists                   | ❌ Not yet created      |
| Email templates                    | ❌ Not yet created      |
| Sequences / automations            | ❌ Not yet created      |
| Website integration                | ❌ Not yet wired        |

---

## 2. Email Infrastructure & Deliverability

### 2.1 Sending domain

`clockout.us` is verified in Sequenzy as a sending domain. The SES region is **us-east-1** (based on the outbound MX record `feedback-smtp.us-east-1.amazonses.com`).

### 2.2 DNS records (already in place)

| Type | Name                              | Value                                                     | Status |
| ---- | --------------------------------- | --------------------------------------------------------- | ------ |
| TXT  | `sequenzy._domainkey.clockout.us` | `k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDDItr...` | ✅     |
| TXT  | `send.clockout.us`                | `v=spf1 include:amazonses.com ~all`                       | ✅     |
| MX   | `send.clockout.us`                | `feedback-smtp.us-east-1.amazonses.com` (priority 10)     | ✅     |
| MX   | `inbound.clockout.us`             | `inbound-smtp.us-east-1.amazonaws.com` (priority 10)      | ✅     |
| TXT  | `_dmarc.clockout.us`              | `v=DMARC1; p=none; sp=none; rua=mailto:...`               | ✅     |

### 2.3 Deliverability rules

- **Warm the domain gradually.** Start with ~10–20 emails/day (transactional + follow-ups). Ramp by ~30% per week. Sequenzy handles SES reputation management but cold-start volume spikes still risk throttling.
- **SPF/DKIM/DMARC are configured at `p=none`** — DMARC reports are being collected. Move to `p=quarantine` after 2–4 weeks of good data. Move to `p=reject` only when confident no legitimate email is spoofed.
- **Bounce handling.** Sequenzy auto-handles hard bounces (invalid addresses). Monitor soft bounces. Clean lists monthly.
- **Complaint handling.** Set up a feedback loop. Unsubscribe links are mandatory on every marketing email. Sequenzy's API auto-suppresses unsubscribes.
- **CAN-SPAM compliance.** Every email: physical address (Donovin Sims, Roscoe IL), clear unsubscribe, truthful subject lines.

### 2.4 Inbound receiving

`inbound.clockout.us` MX points to Amazon SES inbound. This enables:

- **Reply tracking** via Sequenzy Conversations — route replies back into the app.
- **Bounce/complaint processing** via SES notifications → SNS → webhook.

Not yet configured end-to-end. Set up SES receipt rules when reply tracking is prioritized.

---

## 3. Subscriber & List Architecture

### 3.1 Lists to create

| List                            | Purpose                                                               | Source                   |
| ------------------------------- | --------------------------------------------------------------------- | ------------------------ |
| **Audit Leads**                 | Everyone who fills out the `/assessment` form                         | Tally form webhook → API |
| **Cold Prospects**              | Leads from prospecting (Batch 1 + future) who haven't booked an audit | CSV import / manual      |
| **Build Clients**               | Paid Build clients (past and current)                                 | Manual entry             |
| **Operator OS Clients**         | Concierge clients                                                     | Manual entry             |
| **Newsletter / Updates**        | Opt-in subscribers (future — not yet launched)                        | Site signup (future)     |
| **Past Clients (reactivation)** | Clients who bought but aren't on concierge                            | Manual entry             |

### 3.2 Subscriber data model

Each subscriber stores:

- **Email** — primary key
- **First name** — for personalization
- **Business name** — for personalization ("Hey {Business}")
- **Phone** — for multi-channel follow-up
- **Trade** — HVAC / Plumbing / Roofing / Electrical / Landscaping / Cleaning / Property Management / Real Estate — drives segmentation
- **Lead source** — `assessment_form`, `cold_prospecting`, `referral`, `manual`
- **Tags** — see [§4](#4-tag--segmentation-strategy)
- **External ID** — optional, for syncing with CRM or Google Sheets

### 3.3 Import approach

**Cold prospects** (from `docs/lead-gen-and-prospecting.md` — 121 emails from Batch 1):

```
POST /v1/subscribers/import
{
  "listId": "<cold-prospects-list-uuid>",
  "subscribers": [
    {
      "email": "owner@plumbingco.com",
      "firstName": "Mike",
      "businessName": "Mike's Plumbing",
      "phone": "+18155551234",
      "customFields": {
        "trade": "Plumbing",
        "leadSource": "cold_prospecting",
        "tier": "Tier 1",
        "agencyFitScore": 85
      }
    }
  ]
}
```

**Assessment leads** — added in real time via API on Tally form submission (see [§12](#12-technical-implementation-plan)).

---

## 4. Tag & Segmentation Strategy

### 4.1 System tags (applied by automation)

Tags drive sequence enrollment, campaign targeting, and suppression.

| Tag                            | Applied when                   | Removed when      | Purpose                              |
| ------------------------------ | ------------------------------ | ----------------- | ------------------------------------ |
| `stage:audit_booked`           | Form submitted, call booked    | Call completed    | Sequencing post-booking confirmation |
| `stage:audit_completed`        | Audit call done                | Converted or lost | Delivering Money-Leak Map            |
| `stage:build_sold`             | Build payment received         | —                 | Onboarding sequence                  |
| `stage:concierge_active`       | Concierge started              | Canceled          | Concierge lifecycle                  |
| `stage:concierge_canceled`     | Concierge canceled             | Re-enrolled       | Win-back / feedback                  |
| `stage:lost`                   | Lead dead / no response        | Re-engaged        | Long-term nurture                    |
| `lead_source:assessment`       | —                              | —                 | Source-based analysis                |
| `lead_source:cold_prospecting` | —                              | —                 | Source-based analysis                |
| `lead_source:referral`         | —                              | —                 | Source-based analysis                |
| `trade:hvac`                   | From form/import               | —                 | Trade-specific campaigns             |
| `trade:plumbing`               | From form/import               | —                 | Trade-specific campaigns             |
| `trade:roofing`                | From form/import               | —                 | Trade-specific campaigns             |
| ... (per trade)                | —                              | —                 | —                                    |
| `no_website`                   | Imported from prospecting data | —                 | Special no-website play              |
| `scarcity_alerted`             | Founding scarcity email sent   | —                 | Prevent over-contacting              |
| `audit_no_show`                | Missed call                    | Re-booked         | No-show re-engagement                |
| `opened_sequence_N`            | 1st open in a sequence         | —                 | Behavior-based branching             |
| `clicked_cta_N`                | Clicked specific link          | —                 | Interest scoring                     |

### 4.2 Segments (Sequenzy saved segments)

| Segment                                 | Definition                                                                     | Use                       |
| --------------------------------------- | ------------------------------------------------------------------------------ | ------------------------- |
| **Hot leads (audit done, no build)**    | Tag = `stage:audit_completed` AND NOT `stage:build_sold` and within 14 days    | Urgent follow-up sequence |
| **Warm leads (audit done, 14-60 days)** | Tag = `stage:audit_completed` AND NOT `stage:build_sold` and within 15-60 days | Nurture sequence          |
| **Cold prospects (no audit)**           | Tag = `lead_source:cold_prospecting` AND NOT `stage:audit_booked`              | Cold outreach sequence    |
| **Active concierge**                    | Tag = `stage:concierge_active`                                                 | Concierge comms           |
| **Trade-specific: HVAC**                | Tag = `trade:hvac`                                                             | Trade-targeted campaigns  |
| **Owned website**                       | NOT `no_website`                                                               | Standard funnel entry     |
| **No website**                          | Tag = `no_website`                                                             | Special no-website pilot  |
| **Lost leads (60+ days dormant)**       | Tag = `stage:lost` AND last activity > 60 days                                 | Re-engagement campaign    |

### 4.3 Tagging via API

Single subscriber:

```
POST /v1/subscribers/tags
{
  "email": "owner@plumbingco.com",
  "tags": ["stage:audit_booked", "trade:plumbing", "lead_source:assessment"]
}
```

Bulk:

```
POST /v1/subscribers/tags/bulk
{
  "subscribers": [
    { "email": "...", "tags": ["..."] }
  ]
}
```

---

## 5. Transactional Emails

### 5.1 Post-audit follow-up (Money-Leak Map delivery)

**Trigger:** Audit call completed → Donovin sends the Map.

**Via API:**

```
POST /v1/email/send
{
  "from": "Donovin Sims <donovin@clockout.us>",
  "to": "owner@plumbingco.com",
  "subject": "Your Money-Leak Map — Mike's Plumbing",
  "templateUuid": "<post-audit-template-uuid>",
  "data": {
    "firstName": "Mike",
    "businessName": "Mike's Plumbing",
    "leakAmount": "5400",
    "topLeak": "missed calls"
  }
}
```

**Template content (plain, on-voice):**

> Hey {firstName} —
>
> Good talking earlier. Here's where {businessName} is leaking the most, ranked, with the first thing I'd fix.
>
> [Map attached as PDF — 1-page summary]
>
> Yours to keep and run whether or not we move forward together. Want me to build the fixes? You own everything, no contract, 10 hours a week back in 30 days or I keep working — just reply "build it" and I'll send times.
>
> — Donovin

### 5.2 Audit confirmation & prep

**Trigger:** Prospect books a call on cal.com.

Consider a confirmation email that:

- Confirms the time
- Tells them Donovin will research their business before the call
- Sets expectations: "20 minutes, I'll show you the leaks in dollars"
- Lowers friction: "No pitch, no pressure. You keep the plan either way."

### 5.3 No-show re-book

**Trigger:** cal.com detects no-show or Sequenzy event indicates missed appointment.

**Subject:** Missed you — still want your Money-Leak Map?

> Hey {firstName} —
>
> We had a time set for your free leak audit and I didn't want to lose you. No stress if it got busy.
>
> Still happy to spend 20 minutes showing you where {businessName} is leaking money and hand you the Map — no pitch.
>
> Grab a new time: cal.com/donovin
>
> — Donovin

### 5.4 Build welcome / onboarding

**Trigger:** Build purchased.

Sends:

1. Welcome + what to expect (timeline, first call scheduling)
2. Login credentials for installed tools
3. 30-day tuning check-in schedule

### 5.5 Concierge lifecycle

- **Welcome** — onboarding to the concierge model, biweekly cadence setup
- **Build log notification** — "Here's what we shipped this month" (monthly)
- **Cancel confirmation** — "You still own everything. Here's how to keep running it."

---

## 6. Nurture Sequences

### 6.1 Hot lead sequence (audit done, no build — 7-day window)

This is the highest-converting opportunity. The lead has seen their leaks in dollars.

| Day | Email                                                                                             | Goal             |
| --- | ------------------------------------------------------------------------------------------------- | ---------------- |
| 1   | Money-Leak Map sent (transactional)                                                               | Deliver value    |
| 3   | "You've got the Map. Here's what the first fix looks like." — Specific example of fixing one leak | Build conviction |
| 5   | "Three owners this month recovered [X] in the first week." — Honest case detail                   | Social proof     |
| 7   | "The founding price locks for life — 3 spots left."                                               | Scarcity close   |

**Voice:** Direct, specific, no hype. Use their own numbers from the audit wherever possible.

### 6.2 Warm lead nurture (audit done, 14–60 days — monthly check-in)

Lower frequency. They've seen the Map but didn't buy.

| Cadence | Content                                                                                    |
| ------- | ------------------------------------------------------------------------------------------ |
| Week 3  | "A quick check — how's that {leak} been treating you?" — Soft check, no pitch              |
| Week 6  | New automation idea relevant to their trade — "I built something for an HVAC shop that..." |
| Week 10 | Case snippet, founding scarcity update                                                     |

### 6.3 Cold prospect sequence (no audit yet — from prospecting)

**Link:** `cal.com/donovin` — the entry point. Tone: helpful, not salesy.

These leads come from the prospecting pipeline. They haven't filled the assessment form.

| Day | Email                                                                                                                    | Goal                  |
| --- | ------------------------------------------------------------------------------------------------------------------------ | --------------------- |
| 1   | "I found {businessName} in {city}. Quick take on what I noticed." — Personalized observation about their online presence | Relevance + authority |
| 3   | "The #1 leak I see in {trade} shops" — Industry-specific insight                                                         | Value                 |
| 7   | "Want a free audit? 20 minutes, I'll show you the leaks in dollars."                                                     | Direct conversion ask |
| 14  | No-response → move to long-term nurture (monthly trade tip)                                                              |

### 6.4 Lost lead re-engagement (60+ days dormant)

| Cadence  | Content                                                                 |
| -------- | ----------------------------------------------------------------------- |
| Month 3  | "Still got that Money-Leak Map? The #2 leak might be costing more now." |
| Month 6  | Major update: new automation, case study, price change announcement     |
| Month 12 | Clean — remove if no engagement                                         |

---

## 7. Campaign Strategy

### 7.1 Founding scarcity campaigns

When spots drop to 2, 1, or 0 remaining.

```
POST /v1/campaigns
{
  "name": "Founding Spots Closing — 2 Left",
  "listIds": ["<audit-leads-uuid>", "<cold-prospects-uuid>"],
  "subject": "2 founding spots left — then pricing goes to $1,494",
  "fromName": "Donovin Sims",
  "fromEmail": "donovin@clockout.us"
}
```

Send only to subscribers who haven't been `scarcity_alerted` in the last 30 days. Tag after send.

### 7.2 Trade-specific campaigns

A new case study or automation build relevant to a specific trade.

Target: segment `trade:plumbing`, for example. Content: plumbing-specific leak example, solution, CTA.

### 7.3 Seasonal triggers

| Season | Trade                | Trigger                                                   |
| ------ | -------------------- | --------------------------------------------------------- |
| Spring | HVAC, Landscaping    | "Pre-season tune-up — catching bookings before the rush"  |
| Summer | HVAC, Roofing        | "Heat wave call overflow — what to do about missed calls" |
| Fall   | Plumbing, Electrical | "Pre-winter prep — reactivate past customers"             |
| Winter | HVAC, Plumbing       | "Emergency call handling — after-hours coverage"          |

### 7.4 Case study releases

When an in-trade testimonial is finally collected (known proof gap):

1. Email to cold prospects: "Real results from a {trade} shop in {city}"
2. Email to audit-leads: "[Trade] shop recovers $X/mo — same program you've seen"
3. Blog cross-post (future)

### 7.5 A/B testing (campaign-level)

Sequenzy supports A/B testing at the campaign level. Test:

| Variable             | Variant A                                              | Variant B                                         |
| -------------------- | ------------------------------------------------------ | ------------------------------------------------- |
| Subject line framing | Loss-framed: "What 3 missed calls cost you this month" | Gain-framed: "How to recover 3 more jobs a month" |
| Sender name          | "Donovin Sims"                                         | "Donovin at Clockout"                             |
| CTA text             | "Find the Money I'm Losing →"                          | "See Your Leaks in Dollars →"                     |
| Personalization      | Use business name in subject                           | No business name in subject                       |

---

## 8. Email Templates & Brand Voice

### 8.1 Template library

| Template             | Use                          | Variables                                            |
| -------------------- | ---------------------------- | ---------------------------------------------------- |
| `post-audit`         | Money-Leak Map delivery      | `firstName`, `businessName`, `leakAmount`, `topLeak` |
| `audit-confirmation` | Call confirm + prep          | `firstName`, `callTime`, `businessName`              |
| `no-show`            | Missed call re-book          | `firstName`, `businessName`                          |
| `cold-outreach-1`    | First cold prospecting email | `firstName`, `businessName`, `city`, `trade`         |
| `cold-outreach-2`    | Follow-up                    | `firstName`, `businessName`                          |
| `warm-nurture`       | Monthly trade insight        | `firstName`, `trade`                                 |
| `scarcity-alert`     | Founding spots closing       | `spotsRemaining`                                     |
| `build-welcome`      | New Build client             | `firstName`, `businessName`                          |
| `concierge-log`      | Monthly build log            | `firstName`, `itemsBuilt`                            |
| `re-engagement`      | Dormant lead                 | `firstName`, `businessName`                          |

### 8.2 Voice rules for email (extends `docs/brand-voice-and-messaging.md`)

Email amplifies the same voice rules with a few additions:

- **Subject lines:** Short (30–50 chars), specific, never clickbait. "Your Money-Leak Map — Mike's Plumbing" beats "Your free audit results inside!"
- **Preview text:** First line of the email body (no separate preview field necessary). Don't waste it on "View this email in your browser."
- **Personalization:** First name in greeting + business name in subject/subhead when relevant. Don't over-personalize — one or two fields max.
- **Plain text vs HTML:** Plain-text style performs best for B2B cold outreach (it feels personal). Use simple HTML for transactional/series emails (logo, clean formatting, responsive).
- **Signature:** "— Donovin" (no title, no phone, no logo block). Founder voice, not a brand.
- **Unsubscribe:** Visible, one-click. "No longer interested? Unsubscribe" — no guilt trips.
- **Length:** Cold emails: 3–5 sentences. Follow-ups: 2–3 sentences. Transactional: whatever the content needs, but tight.

### 8.3 Block-based editor (Sequenzy email editor)

Sequenzy's email editor supports block-based content. Templates can include:

- **Text blocks** — the primary content (keep these simple: no fancy formatting, just clean paragraphs)
- **Buttons** — CTA links ("Find the Money I'm Losing →", "Book Your Free Audit →")
- **Divider** — between sections
- **Footer** — mandatory: physical address, unsubscribe, privacy link

Use the AI generate feature to draft variants, then edit to match Clockout voice. Remove any hype words from AI-generated drafts.

---

## 9. Prospecting Integration

### 9.1 Importing Batch 1 leads

From `docs/lead-gen-and-prospecting.md`: **121 direct emails** from Batch 1 prospecting.

**Recommended approach:**

1. Create a Sequenzy list: `Cold Prospects — Batch 1`
2. Import via CSV with tags: `lead_source:cold_prospecting`, `tier:Tier 1`, `trade:hvac`, etc.
3. Create segment: `Cold Prospects (unaudited)` — tag = `lead_source:cold_prospecting` AND NOT `stage:audit_booked`
4. Enroll in a cold prospect sequence (see §6.3)

**Segmentation within cold prospects:**

| Segment                    | Count (est.) | Priority                                                  |
| -------------------------- | ------------ | --------------------------------------------------------- |
| Tier 1 (owner name in biz) | ~40%         | Highest — start with these                                |
| Has website                | Majority     | Standard funnel                                           |
| No website                 | ~65 leads    | Special no-website play (SMS/call first, email secondary) |

### 9.2 Future batch imports

For Batch 2+ prospecting runs:

1. Run `prospect_discover.py` + `enrich_emails.py`
2. Create new Sequenzy list per batch
3. Import with tags: `lead_source:cold_prospecting`, `batch:2`, per-lead tier/trade
4. Enroll in same cold prospect sequence

### 9.3 Assessment form → Sequenzy webhook

When a prospect fills the Tally form on `/assessment`:

**Tally webhook** → **App server** → **Sequenzy API:**

```
POST /v1/subscribers
{
  "email": "...",
  "firstName": "...",
  "businessName": "...",
  "phone": "...",
  "customFields": {
    "trade": "HVAC",
    "leadSource": "assessment_form",
    "teamSize": "2–5",
    "painPoint": "missed_calls"
  },
  "tags": ["lead_source:assessment", "stage:audit_booked", "trade:hvac"]
}
```

Then enroll in **Audit Booked** sequence (confirmation, prep instructions).

### 9.4 Lead scoring via events

Use Sequenzy events to track prospect engagement:

```json
POST /v1/events
{
  "email": "owner@plumbingco.com",
  "event": "opened_audit_email",
  "properties": {
    "emailType": "post-audit",
    "timestamp": "2026-06-22T10:00:00Z"
  }
}
```

Trackable events:

- `opened_email` (auto-captured)
- `clicked_link` (auto-captured)
- `audit_booked`
- `audit_completed`
- `build_purchased`
- `concierge_started`

---

## 10. Conversations / Reply Tracking

### 10.1 What it enables

Sequenzy Conversations routes replies to your marketing/sequence emails into a shared inbox. This is useful when:

- A cold prospect replies to ask a question
- An audit lead replies "build it" (as prompted in the post-audit email)
- A client requests changes via email

### 10.2 Setup needed

1. Configure inbound SES → SNS/SQS → Sequenzy (verify `inbound.clockout.us` MX is live)
2. Add Sequenzy's webhook URL to SES receipt rule
3. Test reply routing

### 10.3 Workflow

When a lead replies:

1. Reply lands in Sequenzy Conversations
2. Conversation is associated with the subscriber (matched by email)
3. Donovin gets notified (in-app or email notification)
4. Reply from within Sequenzy — it threads properly, DKIM-signed

---

## 11. Analytics & Optimization

### 11.1 Metrics to track

| Metric                        | Where                       | Target (initial)              |
| ----------------------------- | --------------------------- | ----------------------------- |
| **Delivery rate**             | Sequenzy Account Analytics  | >97%                          |
| **Open rate (cold outreach)** | Campaign/Sequence Analytics | 35–50% (B2B cold)             |
| **Open rate (nurture)**       | Campaign/Sequence Analytics | 40–60%                        |
| **Click rate (CTA)**          | Campaign/Sequence Analytics | 5–15%                         |
| **Reply rate (cold)**         | Conversations               | 5–10%                         |
| **Unsubscribe rate**          | Campaign/Sequence Analytics | <0.5% per send                |
| **Bounce rate**               | Account Analytics           | <3%                           |
| **Audit booking rate**        | cal.com + webhook           | >20% of email CTA clicks      |
| **Build conversion rate**     | Internal tracking           | >15% of audit-completed leads |

### 11.2 Analysis cadence

| Frequency   | Action                                                                                   |
| ----------- | ---------------------------------------------------------------------------------------- |
| **Weekly**  | Review cold prospect sequence opens/replies. Adjust subject lines for lowest-open steps. |
| **Weekly**  | Review hot lead sequence conversion (audit → build).                                     |
| **Monthly** | List health: bounces cleaned, unsubscribes suppressed, stale contacts moved to nurture.  |
| **Monthly** | A/B test results: pick a winner, iterate.                                                |
| **Monthly** | Deliverability check: DMARC report review, spam complaint rate.                          |

### 11.3 Iteration playbook

If a sequence step underperforms:

1. **Low open rate:** Change subject line (specific number, loss-framed, or personalized). Test sender name.
2. **Low click rate:** Sharpen the CTA. Make it one link, one ask. Remove distractions.
3. **High unsubscribe:** Tone check — too salesy? Frequency too high? Remove that step.
4. **Low reply rate:** Add a question. End with "What's your biggest leak right now?" instead of a CTA button.

---

## 12. Technical Implementation Plan

### 12.1 Phase 1 — Foundation (Week 1)

| Task                          | Details                                                                   | Who          |
| ----------------------------- | ------------------------------------------------------------------------- | ------------ |
| DNS verification              | ✅ Done                                                                   | Done         |
| Create Sequenzy lists         | Audit Leads, Cold Prospects, Build Clients, Concierge Clients             | Orchestrator |
| Create email templates        | post-audit, audit-confirmation, no-show, cold-outreach-1, cold-outreach-2 | Orchestrator |
| Import Batch 1 cold prospects | CSV import with tags                                                      | Orchestrator |
| Create first subscriber       | Manually add yourself as test                                             | Donovin      |

### 12.2 Phase 2 — Transactional Wiring (Week 1–2)

| Task                           | Details                                                                     |
| ------------------------------ | --------------------------------------------------------------------------- |
| Tally webhook → subscriber add | When `/assessment` form submits, add to Sequenzy + tag `stage:audit_booked` |
| Post-audit email API call      | Triggered by Donovin (button in internal tool or manual API call)           |
| cal.com webhook → no-show tag  | Mark `audit_no_show` on no-show; trigger no-show sequence                   |

### 12.3 Phase 3 — Sequences (Week 2–3)

| Sequence               | Trigger                                                 |
| ---------------------- | ------------------------------------------------------- |
| Hot lead follow-up     | Tag `stage:audit_completed` → enroll in 7-day sequence  |
| Cold prospect outreach | Enroll manually after import (or tag-based auto-enroll) |
| Warm lead nurture      | Segment-based monthly send                              |

### 12.4 Phase 4 — Campaigns & Optimization (Week 3+)

| Task                         | Details                                        |
| ---------------------------- | ---------------------------------------------- |
| Founding scarcity campaign   | Send when spots drop                           |
| Trade-specific case campaign | When first in-trade testimonial collected      |
| A/B test subject lines       | Run on cold prospect sequence step 1           |
| Set up reply tracking        | Configure SES inbound → Sequenzy Conversations |

---

## 13. Appendix: Sequenzy API Reference Map

### 13.1 Key endpoints

| Endpoint                         | Use                      | Documentation         |
| -------------------------------- | ------------------------ | --------------------- |
| `POST /v1/subscribers`           | Create/update subscriber | sequenzy.com/docs/api |
| `POST /v1/subscribers/import`    | Bulk import              | sequenzy.com/docs/api |
| `POST /v1/subscribers/tags`      | Add/remove tags          | sequenzy.com/docs/api |
| `POST /v1/subscribers/tags/bulk` | Bulk tag                 | sequenzy.com/docs/api |
| `POST /v1/events`                | Track custom event       | sequenzy.com/docs/api |
| `POST /v1/email/send`            | Send transactional email | sequenzy.com/docs/api |
| `POST /v1/email/send-template`   | Send template email      | sequenzy.com/docs/api |
| `POST /v1/campaigns`             | Create campaign          | sequenzy.com/docs/api |
| `POST /v1/sequences`             | Create sequence          | sequenzy.com/docs/api |
| `POST /v1/sequences/enroll`      | Enroll subscriber        | sequenzy.com/docs/api |
| `GET /v1/analytics/campaigns`    | Campaign stats           | sequenzy.com/docs/api |
| `GET /v1/analytics/sequences`    | Sequence stats           | sequenzy.com/docs/api |
| `GET /v1/conversations`          | List conversations       | sequenzy.com/docs/api |
| `POST /v1/conversations/reply`   | Reply to conversation    | sequenzy.com/docs/api |
| `POST /v1/templates`             | Create email template    | sequenzy.com/docs/api |
| `POST /v1/templates/generate`    | AI generate email        | sequenzy.com/docs/api |

### 13.2 Environment variables

In `.env`:

```
SEQUENZY_API_KEY=seq_live_QJkaWhRnErI04XEmlhvphoq94XyuaEwIpy6ongA_TPU
SEQUENZY_API_URL=https://api.sequenzy.com/v1
```

### 13.3 Server-side helper (future)

When building server-side integration in TanStack Start:

`src/lib/sequenzy.ts`:

```typescript
const API_KEY = process.env.SEQUENZY_API_KEY;
const BASE_URL = "https://api.sequenzy.com/v1";

async function sequenzyFetch(path: string, options: RequestInit = {}) {
  return fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
}

export async function addSubscriber(data: {
  email: string;
  firstName: string;
  businessName?: string;
  phone?: string;
  tags?: string[];
  customFields?: Record<string, string>;
}) {
  return sequenzyFetch("/subscribers", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function sendTransactionalEmail(data: {
  to: string;
  subject: string;
  templateUuid: string;
  data: Record<string, string>;
}) {
  return sequenzyFetch("/email/send-template", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
```

> **File naming:** This file would use the `.server.ts` suffix (e.g., `src/lib/sequenzy.server.ts`) to prevent bundling in the client, consistent with the project's architecture in `docs/website-and-stack.md`.

---

## 14. Quick-Start Checklist

- [x] DNS records added (DKIM, SPF, MX, DMARC)
- [ ] Create Sequenzy lists (Audit Leads, Cold Prospects, Build, Concierge)
- [ ] Create email templates (post-audit, audit-confirmation, no-show, cold-outreach)
- [ ] Import Batch 1 cold prospects with tags
- [ ] Create hot lead sequence (7-day post-audit)
- [ ] Create cold prospect sequence (14-day outreach)
- [ ] Wire Tally form webhook → subscriber add + tag
- [ ] Wire post-audit email send (manual trigger or automated)
- [ ] Set up reply tracking (SES inbound → Sequenzy Conversations)
- [ ] Set up founding scarcity campaign
- [ ] Create `src/lib/sequenzy.server.ts` helper
- [ ] Begin weekly analytics review cadence
- [ ] Move DMARC from `p=none` after 2–4 weeks of monitoring
