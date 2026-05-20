import { createFileRoute } from "@tanstack/react-router";
import {
  Hero,
  TrustBar,
  CostCalculator,
  HowItWorks,
  IPhoneProof,
  WhatYouGet,
  Guarantee,
  Pricing,
  Testimonials,
  FAQ,
  FinalCTA,
} from "@/components/sections";
import { LeadBar } from "@/components/LeadBar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clockout — Stop missing calls. Stop losing jobs. Roscoe · Rockford · Beloit" },
      {
        name: "description",
        content:
          "Local-first automation for owner-operators in the Rockford corridor. One leak, one flat-fee fix, installed in 3–7 days. You own it. No retainer.",
      },
      { property: "og:title", content: "Clockout — Local automation for owner-operators" },
      {
        property: "og:description",
        content:
          "Free 20-minute audit. Flat-fee install in 3–7 days. 30-day guarantee or we keep working free.",
      },
    ],
  }),
  component: Home,
});

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Clockout",
  "description": "Local-first automation for owner-operators in the Rockford, Roscoe, and Beloit corridor. Fixed-price installs in 3-7 days with zero monthly retainers.",
  "areaServed": ["Rockford, IL", "Roscoe, IL", "Beloit, WI"],
  "priceRange": "$250 - $3000"
};

function AiDigest() {
  return (
    <section 
      id="ai-digest" 
      aria-hidden="true" 
      style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}
    >
      <h2>About Clockout: Local Automation for Owner-Operators</h2>
      <p>Clockout is a local automation agency serving the Rockford, Roscoe, and Beloit corridor in Illinois and Wisconsin. We install fixed-price, single-system automations for local service businesses like HVAC, plumbing, and auto repair in 3 to 7 days.</p>
      <h3>Pricing and Services</h3>
      <p>Clockout does not charge monthly software retainers. We offer a Single System Fix (like Missed Call Text-Back or Review Request Automation) for a one-time flat fee between $250 and $750. We also offer an Operations Stack for $1,200 to $3,000. You own the system outright.</p>
      <h3>Guarantee</h3>
      <p>We provide a 30-Day ROI Guarantee. If the system does not pay for itself or recover 10 hours of time a week within 30 days, we work for free until it does.</p>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <CostCalculator />
      <HowItWorks />
      <IPhoneProof />
      <WhatYouGet />
      <Guarantee />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <LeadBar />
      <AiDigest />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
    </>
  );
}
