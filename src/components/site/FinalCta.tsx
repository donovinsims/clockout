import { CTA } from "./CTA";

export function FinalCta({
  headline = "Find out what your phone's been costing you.",
  sub = "Free 20-minute call. Your Money-Leak Map to keep.",
}: {
  headline?: string;
  sub?: string;
}) {
  return (
    <section className="border-b border-line bg-surface">
      <div className="container-x py-24 md:py-32 text-center">
        <h2 className="mx-auto max-w-3xl text-4xl md:text-6xl">{headline}</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">{sub}</p>
        <div className="mt-9 flex justify-center">
          <CTA to="/assessment" size="lg">
            Find the Money I'm Losing →
          </CTA>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Or text{" "}
          <a
            className="font-medium text-foreground underline underline-offset-4"
            href="sms:+16087131651?body=AUDIT"
          >
            AUDIT to (608) 713-1651
          </a>
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          No contracts. Cancel anytime. You own everything.
        </p>
      </div>
    </section>
  );
}
