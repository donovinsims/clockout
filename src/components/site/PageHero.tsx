import { CTA } from "./CTA";
import { BetaSpots } from "./BetaSpots";

type Props = {
  eyebrow?: string;
  headline: React.ReactNode;
  sub: React.ReactNode;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
};

/**
 * Generic page hero used by sub-routes (services/$slug, etc.).
 * The homepage uses <Hero /> from Hero.tsx, which is purpose-built.
 */
export function PageHero({ eyebrow, headline, sub, primaryCta, secondaryCta }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="container-x relative pt-16 pb-20 md:pt-24 md:pb-28">
        {eyebrow && <div className="eyebrow mb-5">{eyebrow}</div>}
        <h1
          className="max-w-4xl font-display"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.75rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            fontWeight: 600,
          }}
        >
          {headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">{sub}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {primaryCta && (
            <CTA to={primaryCta.to} size="lg">
              {primaryCta.label} →
            </CTA>
          )}
          {secondaryCta && (
            <CTA to={secondaryCta.to} size="lg" variant="outline">
              {secondaryCta.label}
            </CTA>
          )}
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
          <BetaSpots />
          <span aria-hidden>·</span>
          <span>
            <span className="mono-num text-foreground">$497</span> beta · normally{" "}
            <span className="mono-num line-through">$1,494</span>
          </span>
        </div>
      </div>
    </section>
  );
}
