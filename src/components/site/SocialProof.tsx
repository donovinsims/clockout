export function SocialProof() {
  return (
    <section className="border-b border-line py-16 md:py-20">
      <div className="container-x">
        <div className="eyebrow mb-3">Case studies</div>
        <div className="grid items-end gap-6 md:grid-cols-[1.4fr_1fr]">
          <h2 className="text-3xl md:text-4xl">
            First case studies in progress. We'd rather be honest than make them up.
          </h2>
          <p className="text-foreground/70">
            Beta clients get a discounted build in exchange for a documented before/after. As soon as the first numbers are in, they live here. No stock photos. No fake names.
          </p>
        </div>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-background p-6">
              <div className="mono-num text-xs text-dim">Case study #{n}</div>
              <div className="mt-3 h-2 w-20 rounded-full bg-line" />
              <p className="mt-5 text-foreground/60">
                Currently in build. Published when the 30-day numbers come in.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
