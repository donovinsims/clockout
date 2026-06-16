import { CTA } from "./CTA";

export function FinalCta({
  headline = "Stop guessing what the leak is. Get the number.",
  sub = "Twenty minutes to tell me about your shop. 48 hours to send back exactly where you're losing money — in dollars, not adjectives.",
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
            Book the 48-hour audit →
          </CTA>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Or text <a className="font-medium text-foreground underline underline-offset-4" href="sms:+16087131651?body=AUDIT">AUDIT to (608) 713-1651</a>
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          $497 beta · normally $1,494 · 10 hrs/week back in 30 days or the build is free
        </p>
      </div>
    </section>
  );
}
