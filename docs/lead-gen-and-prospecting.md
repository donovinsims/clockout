# Lead-Gen & Prospecting

A repeatable playbook for finding, scoring, and enriching owner-operated local-trade leads — re-runnable for batch 2 by the founder or an AI agent.

## 1. Target List Definition (ICP)

**Who we sell to:** owner-operated local trades — HVAC, plumbing, roofing, electrical, landscaping, cleaning, property management, real estate. **1–10 staff. Independent / locally-owned only** (no national brands or franchises).

**Geography:**

- **Core — Rockford / Stateline + Northern IL:** Rockton, Roscoe, Rockford, Loves Park, Machesney Park, South Beloit.
- **Test market:** Chicago.
- **Local area codes:** 779 / 815 (Stateline) and 312 / 773 / 847 (Chicago).

**Offer they enter into (the ladder):** free 20-min audit → Money-Leak Map → **$497 Build** → **$750/mo Operator OS** concierge.

## 2. Scoring & Filtering Rules (validated)

**Priority Tiers** — how "owner-operated" the signal is:

| Tier       | Signal                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------ |
| **Tier 1** | Owner name visible in the business name — possessive (`Gilley's`) or `& Sons` / `Brothers` |
| **Tier 2** | Local area code + single location                                                          |
| **Tier 3** | Regional / non-local phone number                                                          |

**Agency-Fit Score (0–100)** — rewards the owner-operator sweet spot:

- **25–400 reviews** — real demand, still hands-on.
- **4.0+ rating.**
- **Local phone** + **independent ownership.**
- **NO WEBSITE scores HOTTER** — a "needs help" lead, the prime website-selling target.

**Exclusions (hard filters):**

- **National brands / franchises** via name blocklist: ServiceMaster, Servpro, Roto-Rooter, Mr. Rooter/Electric/Handyman, Molly Maid, Merry Maids, Stanley Steemer, TruGreen, RE/MAX, Keller Williams, Coldwell Banker, Century 21, HomeAdvisor, Angi, LeafFilter, etc.
- **Toll-free area codes:** 800 / 888 / 877 / 866 / 855 / 844 / 833.
- **Closed listings.**

## 3. The Two-Layer Pipeline + Reusable Scripts

A two-stage pipeline, sandbox-validated. Scripts live in the original thread workspace.

**Layer 1 — Discovery (`prospect_discover.py`)**

- **Google Places API (New) Text Search**, anchored per city.
- Reliable, no bot-blocking. **Avoid headless-browser Google Maps scrapers in-sandbox — Google blocks them.**
- Applies tiers, Agency-Fit Score, and exclusion filters.

**Layer 2 — Email / Social Enrichment (`enrich_emails.py`)**

- **Custom `requests` + `BeautifulSoup` crawler:** homepage + contact / about / team pages; deobfuscates emails.
- Built custom because the open-source **extract-emails tool was blocked by Python 3.9.**
- Pulls direct emails + Facebook / Instagram / LinkedIn handles where present.

**Output (`build_sheet.py`)** — assembles the qualified list into a Google Sheet, each lead carrying its Tier and Agency-Fit Score.

> **Re-run for batch 2:** feed new cities / categories into `prospect_discover.py`, pipe through `enrich_emails.py`, ship via `build_sheet.py`. Demo-site generator for no-website plays: `demos/generate.py`.

## 4. Batch 1 Results (2026-06-20)

**421 qualified independent leads** across the Northern IL corridor + Chicago, 8 categories. Delivered as a Google Sheet.

| City                          | Leads |
| ----------------------------- | ----: |
| Rockton                       |    41 |
| Roscoe                        |    41 |
| Rockford                      |    95 |
| Loves Park                    |    53 |
| Machesney Park                |    32 |
| South Beloit                  |    59 |
| Chicago (capped by fit score) |   100 |

**Contact data:** 121 direct emails · 106 Facebook · 62 Instagram · 40 LinkedIn · phone on nearly all · **65 with NO website (hot signal).**
**Excluded:** 56 chains / franchises / closed / toll-free.

## 5. No-Website Pilot Play (2026-06-20)

The first website-selling play: **5 no-website leads** got **published demo sites** (mocked front-end automations — chatbot, instant-quote, missed-call text-back, booking) plus a full outreach kit:

- Per-lead **SMS / email / DM + call scripts.**
- **Discovery questions.**
- A free **"AI Leak Audit"** template (named-value bonus + bridge to the recurring back-end).
- **Value-ladder pricing.**

**Channel reality:** no-website leads have **phone only** → text / call + DM play. The demo site is the wedge; the audit is the hook.

## 6. Channels & Compliance

| Lead type               | Channel                       |
| ----------------------- | ----------------------------- |
| Has email               | B2B cold email                |
| No website (phone only) | Manual SMS / call + social DM |
| Landline                | **Call** (not text)           |

- **Cold marketing SMS is TCPA-sensitive** — send **manually, owner-to-owner, one at a time, honor opt-outs.**
- **B2B cold email is OK under CAN-SPAM** if truthful + includes an opt-out.
- **Landlines → call.**

---

_Anchor doc — do not contradict; do not invent figures beyond those recorded here. For batch-1 + pilot-pack depth see project doc `cmqlg6ehc01j107adw3wy7l85` (Research & Findings)._
