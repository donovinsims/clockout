import { Check, ShieldCheck } from "lucide-react";
import { offer } from "@/data/offer";
import { CTA } from "./CTA";
import { BetaSpots } from "./BetaSpots";

const OUTCOMES = [
  "Every after-hours call answered, in under 60 seconds, in your voice.",
  "Every quote followed up — 1hr, 24hr, 72hr, 7d — until they reply or pass.",
  "Every completed job → review request, automatically, the same day.",
  "Every dormant customer → reactivation sequence before the season hits.",
  "Owner dashboard showing dollars recovered, week over week.",
];

export function OfferCard({ compact = false }: { compact?: boolean }) {
  return (
    <div className="overflow-hidden rounded-[12px] border border-border bg-background shadow-card">
      <div className="grid gap-10 p-7 md:grid-cols-[1.05fr_1fr] md:p-10">
        {/* LEFT — price + scarcity + CTA */}
        <div>
          <BetaSpots />
          <div className="eyebrow mt-5">Revenue Leak Audit + Full Build</div>
          <h3 className="mt-3 text-3xl md:text-4xl">
            One price. You own the system. No subscription, ever.
          </h3>
          <div className="mt-7 flex items-baseline gap-4">
            <span className="mono-num font-semibold text-foreground" style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", lineHeight: 1 }}>
              ${offer.betaPrice}
            </span>
            <span className="mono-num text-lg text-muted-foreground line-through">${offer.standardPrice}</span>
            <span className="text-sm text-muted-foreground">all-in</span>
          </div>
          <p className="mt-5 max-w-md text-muted-foreground">
            48-hour audit. 7-day build. Day 9 handover. You keep every login, every doc, every line of code.
          </p>
          <div className="mt-7">
            <CTA to="/assessment" size="lg">
              Book the 48-hour audit →
            </CTA>
            {!compact && (
              <p className="mt-3 text-xs text-muted-foreground">
                No payment until we talk. <span className="font-medium text-foreground">{offer.spotsRemaining} of {offer.spotsTotal}</span> beta spots remain.
              </p>
            )}
          </div>
        </div>

        {/* RIGHT — outcomes */}
        <div className="rounded-[12px] border border-line bg-surface p-6">
          <div className="eyebrow mb-4">What gets recovered</div>
          <ul className="space-y-4">
            {OUTCOMES.map((line) => (
              <li key={line} className="flex gap-3 text-[15px]">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <span className="text-foreground">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Guarantee strip */}
      <div className="flex items-start gap-3 border-t border-line bg-surface px-7 py-5 md:px-10">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
        <p className="text-sm text-foreground">
          <span className="font-semibold">Founder-signed guarantee:</span> if the system doesn't give you 10 hours a week back inside 30 days of handover, I refund the build in full — and you keep the system.
        </p>
      </div>
    </div>
  );
}
