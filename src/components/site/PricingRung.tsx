import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type PricingRungProps = {
  eyebrow: string;
  title: string;
  price: ReactNode;
  quote?: string;
  features: ReactNode;
  cta: ReactNode;
  highlighted?: boolean;
};

export function PricingRung({
  eyebrow,
  title,
  price,
  quote,
  features,
  cta,
  highlighted = false,
}: PricingRungProps) {
  const baseStyle = "flex flex-col p-7 md:p-7 bg-background";
  const containerStyle = highlighted
    ? `${baseStyle} md:-mx-px md:scale-105 md:rounded-2xl md:border md:border-primary/30 md:bg-surface md:shadow-[0_0_40px_-16px_color-mix(in_oklab,var(--color-primary)_25%,transparent)]`
    : baseStyle;

  return (
    <div className={containerStyle}>
      <div className={`eyebrow ${highlighted ? "text-primary" : ""}`}>{eyebrow}</div>
      <h3 className="mt-3 text-2xl font-semibold">{title}</h3>
      {highlighted && (
        <p className="mt-1 text-xs text-primary/70 font-medium">Most owners start here</p>
      )}
      <div className="mt-2">{price}</div>
      {quote && <p className="mt-4 text-sm italic text-foreground/75">{quote}</p>}
      <div className="mt-4 flex-1 text-sm text-foreground/80">{features}</div>
      {cta}
    </div>
  );
}
