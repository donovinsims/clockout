type Stat = { stat: string; label: string };

export function ProofBar({ stats }: { stats: Stat[] }) {
  return (
    <section className="border-b border-line bg-surface/40">
      <div className="container-x grid grid-cols-1 divide-line md:grid-cols-3 md:divide-x">
        {stats.map((s, i) => (
          <div key={i} className="px-2 py-8 md:px-8 md:py-10">
            <div className="mono-num text-4xl text-amber md:text-5xl">{s.stat}</div>
            <p className="mt-3 text-sm text-foreground/75 md:text-[15px]">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
