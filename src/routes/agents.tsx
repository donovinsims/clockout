import { createFileRoute } from "@tanstack/react-router";
import { CalModal } from "@/components/CalModal";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export const Route = createFileRoute("/agents")({
  head: () => ({
    meta: [
      { title: "What we fix — Clockout · Workflow Agents" },
      {
        name: "description",
        content: "We build custom workflow agents for owner-operators to stop operational leaks.",
      },
    ],
  }),
  component: Agents,
});

const AGENTS = [
  {
    id: "missed-call",
    name: "Missed Call Recovery",
    tags: ["SMS", "Phone"],
    desc: "Instantly texts back missed calls to book an estimate.",
    roi: "+3 jobs/month",
    modal: {
      now: "You miss a call while under a sink, and they call the next plumber on Google.",
      instead: "The system instantly texts them asking how we can help and gets them scheduled.",
      changes: "You stop losing jobs to competitors just because you were working.",
      proof: "Incoming Call → Missed → Text Sent: 'Hey, I'm on a job. How can I help?'",
    }
  },
  {
    id: "estimate-follow",
    name: "Estimate Follow-Up",
    tags: ["SMS", "Email"],
    desc: "Checks in on sent quotes until they say yes or no.",
    roi: "15% increase in closed bids",
    modal: {
      now: "You send a $5,000 quote and forget to follow up because you are busy with today's jobs.",
      instead: "The system politely follows up at 48 hours, 7 days, and 14 days automatically.",
      changes: "You close more bids without feeling like a pushy salesman or spending evenings emailing.",
      proof: "Quote Sent → 48h Wait → Text Sent: 'Hey, checking in on the quote...'",
    }
  },
  {
    id: "voice-crm",
    name: "Voice-to-CRM",
    tags: ["Voice", "SMS"],
    desc: "Turn your truck voice memo into a logged lead.",
    roi: "4 hours saved/week",
    modal: {
      now: "You write down lead details on a napkin in the truck and manually enter them into your CRM at 9 PM.",
      instead: "You send a 10-second voice memo to your assistant number. It extracts the name, address, and issue, and logs it.",
      changes: "Your CRM is always up to date, and you get your evenings back.",
      proof: "Voice Memo Received → Data Extracted → CRM Updated.",
    }
  },
  {
    id: "no-show",
    name: "No-Show Rebooking",
    tags: ["SMS"],
    desc: "Automatically texts no-shows to get them back on the calendar.",
    roi: "$800 saved/week",
    modal: {
      now: "A customer no-shows. The slot goes empty and you lose the revenue for that hour.",
      instead: "The system detects the no-show and instantly texts them a link to rebook with a deposit.",
      changes: "Empty slots get filled. Problem customers train themselves to show up.",
      proof: "No-show Logged → Text Sent: 'Looks like we missed you. Rebook here.'",
    }
  },
  {
    id: "review-gen",
    name: "Review Generator",
    tags: ["SMS"],
    desc: "Texts happy customers for a Google review right after the job.",
    roi: "+5 reviews/month",
    modal: {
      now: "You do great work but forget to ask for a review when you're packing up the truck.",
      instead: "The system texts a direct Google Review link the moment the invoice is marked paid.",
      changes: "Your local map ranking climbs organically without you having to ask.",
      proof: "Invoice Paid → Text Sent: 'Thanks for the business! Mind leaving a review?'",
    }
  },
  {
    id: "pre-job",
    name: "Pre-Job Reminder",
    tags: ["SMS"],
    desc: "Texts clients the day before to confirm access and arrival time.",
    roi: "0 wasted trips",
    modal: {
      now: "You drive 30 minutes to a job site only to find the gate locked and the owner not home.",
      instead: "The system texts the client the day before to confirm arrival time and gate codes.",
      changes: "You never waste fuel or time on a blocked job site again.",
      proof: "24h Before Job → Text Sent: 'See you tomorrow at 8 AM. Any gate codes?'",
    }
  },
  {
    id: "invoice-chaser",
    name: "Invoice Chaser",
    tags: ["Email", "SMS"],
    desc: "Politely follows up on unpaid invoices.",
    roi: "50% faster payment",
    modal: {
      now: "You have $15,000 in unpaid invoices sitting out there, and you hate making collection calls.",
      instead: "The system automatically texts and emails polite reminders at 7, 14, and 21 days.",
      changes: "You get paid faster without the awkward phone calls.",
      proof: "Invoice Past Due → Text Sent: 'Friendly reminder on invoice #1042...'",
    }
  },
  {
    id: "emergency",
    name: "Emergency Dispatch",
    tags: ["Phone", "SMS"],
    desc: "Routes after-hours emergency calls to the right tech on call.",
    roi: "24/7 coverage",
    modal: {
      now: "You pay an answering service $400/mo, and they still wake you up for non-emergencies.",
      instead: "The system screens the call. Emergencies route to the on-call tech. Quotes go to voicemail.",
      changes: "You sleep through the noise but never miss a true emergency.",
      proof: "Call Received → Intent Analyzed → Routed to Tech.",
    }
  },
  {
    id: "materials",
    name: "Materials Order Logger",
    tags: ["SMS", "Email"],
    desc: "Text your materials used; it logs them to the job file.",
    roi: "2 hours saved/week",
    modal: {
      now: "You save Home Depot receipts in your visor and try to assign them to jobs on Sunday.",
      instead: "You text a picture of the receipt or a quick note. The system logs it to the active job.",
      changes: "Job costing is accurate instantly. Sunday is yours again.",
      proof: "Photo Received → Amounts Extracted → Logged to Job.",
    }
  },
  {
    id: "contract",
    name: "Contract Generator",
    tags: ["Voice", "Email"],
    desc: "Speak the terms; it emails a ready-to-sign PDF to the client.",
    roi: "1 hour saved/contract",
    modal: {
      now: "You spend an hour in Word swapping out names and pricing for a standard agreement.",
      instead: "You dictate the terms. The system populates your template and emails it for signature.",
      changes: "Contracts go out before you even put the truck in drive.",
      proof: "Voice Memo Received → PDF Generated → Emailed via DocuSign/PandaDoc.",
    }
  }
];

function Agents() {
  return (
    <div style={{ padding: "var(--space-3xl) var(--page-gutter)" }}>
      <header className="section-head" style={{ textAlign: "center", marginBottom: "var(--space-3xl)" }}>
        <p className="section-eyebrow">The Install Catalogue</p>
        <h1 className="section-h" style={{ margin: "0 auto" }}>What runs <em>automatically?</em></h1>
        <p className="section-note" style={{ margin: "var(--space-md) auto 0" }}>
          Click any workflow to see how it replaces manual admin.
        </p>
      </header>

      <div className="agents__grid">
        {AGENTS.map((agent) => (
          <Dialog key={agent.id}>
            <DialogTrigger asChild>
              <div 
                className="agent-card" 
                style={{ 
                  padding: "var(--space-xl)", 
                  borderRadius: "var(--radius-md)", 
                  border: "var(--rule-hair) solid var(--color-rule-strong)", 
                  background: "color-mix(in oklch, var(--color-paper-2) 40%, transparent)",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-md)"
                }}
              >
                <div style={{ display: "flex", gap: "8px" }}>
                  {agent.tags.map(tag => (
                    <span key={tag} style={{ fontSize: "10px", padding: "2px 8px", background: "var(--color-paper)", border: "1px solid var(--color-rule)", borderRadius: "99px", color: "var(--color-ink-3)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{tag}</span>
                  ))}
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0, color: "var(--color-ink)", letterSpacing: "-0.02em" }}>{agent.name}</h3>
                <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--color-ink-2)", lineHeight: 1.5 }}>{agent.desc}</p>
                <div style={{ marginTop: "auto", paddingTop: "var(--space-md)", borderTop: "1px solid var(--color-rule)", fontSize: "0.875rem", color: "var(--color-accent)", fontWeight: 600, fontFamily: "var(--font-mono)" }}>
                  ROI: {agent.roi}
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] bg-[var(--color-paper)] p-8 border-var(--color-rule-strong)">
              <DialogTitle className="text-2xl font-bold tracking-tight mb-2">{agent.name}</DialogTitle>
              <DialogDescription className="text-base text-[var(--color-ink-2)] mb-6">{agent.desc}</DialogDescription>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[var(--color-ink-3)] font-mono mb-2">Right Now</h4>
                  <p className="text-base leading-relaxed">{agent.modal.now}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[var(--color-accent)] font-mono mb-2">The Fix</h4>
                  <p className="text-base leading-relaxed">{agent.modal.instead}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[var(--color-ink-3)] font-mono mb-2">The Result</h4>
                  <p className="text-base leading-relaxed">{agent.modal.changes}</p>
                </div>
                <div className="bg-[var(--color-paper-2)] p-4 rounded-md border border-[var(--color-rule)]">
                  <h4 className="text-xs uppercase tracking-wider text-[var(--color-ink-3)] font-mono mb-2">Visual Proof</h4>
                  <p className="font-mono text-sm">{agent.modal.proof}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--color-rule)] flex justify-end">
                <CalModal>
                  <button className="cta cta--primary border-0 cursor-pointer outline-none w-full sm:w-auto text-center justify-center">
                    <span>Book Your Free Assessment</span>
                    <span className="cta__arrow" aria-hidden="true">→</span>
                  </button>
                </CalModal>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
