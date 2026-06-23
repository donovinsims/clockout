import { Check, ShieldCheck } from "lucide-react";
import { offer } from "@/data/offer";
import { CTA } from "./CTA";
import { BetaSpots } from "./BetaSpots";

const OUTCOMES = [
  "24/7 missed-call text-back + AI front desk",
  "Quote follow-up engine — recovers 20–35% of quotes that go cold",
  "Automatic Google-review engine",
  "Past-customer reactivation + owner dashboard",
  "30 days of tuning + your Money-Leak Map",
];

export function OfferCard({ compact = false }: { compact?: boolean }) {
  return (
    <div className="overflow-hidden rounded-[12px] border border-border bg-background shadow-card">
      <div className="grid gap-10 p-7 md:grid-cols-[1.05fr_1fr] md:p-10">
        {/* LEFT — price + scarcity + CTA */}
        <div>
          <BetaSpots />
          <div className="eyebrow mt-5">The offer</div>
          <h3 className="mt-3 text-3xl md:text-4xl">
            Start free. Own what I build. Keep me on only if you want.
          </h3>
          <p className="mt-5 max-w-md text-muted-foreground">
            First, the free audit — a 20-minute call where I show you where you&rsquo;re leaking
            money, plus your Money-Leak Map to keep whether you hire me or not. Want it fixed? I
            build it with you and hand you the keys — no contract, you own everything.
          </p>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            A GoHighLevel agency charges $797–$1,497 a month to run this stack, and you never own
            it. The Build is ${offer.betaPrice}, once — you own all of it. Three missed calls a week
            at a $450 ticket is $5,400 gone every month — the kind of number I turn up in a real
            audit.
          </p>
          <div className="mt-7 flex items-baseline gap-4">
            <span
              className="mono-num font-semibold text-foreground"
              style={{
                fontSize: "clamp(3rem, 6vw, 4.5rem)",
                lineHeight: 1,
              }}
            >
              ${offer.betaPrice}
            </span>
            <span className="mono-num text-lg text-muted-foreground line-through">
              ${offer.standardPrice}
            </span>
            <span className="text-sm text-muted-foreground">beta, all-in</span>
          </div>
          <div className="mt-7">
            <CTA to="/assessment" size="lg">
              Find the Money I&rsquo;m Losing →
            </CTA>
            {!compact && (
              <p className="mt-3 text-xs text-muted-foreground">
                8 founding spots,{" "}
                <span className="font-medium text-foreground">{offer.spotsRemaining}</span> left
              </p>
            )}
          </div>
        </div>

        {/* RIGHT — what the Build installs */}
        <div className="rounded-[12px] border border-line bg-surface p-6">
          <div className="eyebrow mb-4">What the Build installs</div>
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
          <span className="font-semibold">The 10-Hour Guarantee:</span> if the Build doesn&rsquo;t
          give you 10 hours a week back within 30 days, I keep working — free — until it does.
        </p>
      </div>
    </div>
  );
}
