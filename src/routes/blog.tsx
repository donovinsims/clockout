import { createFileRoute, Link } from "@tanstack/react-router";
import { CalModal } from "@/components/CalModal";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Operator Insights — Clockout · The Math Behind The Leaks" },
      {
        name: "description",
        content: "Operational teardowns and the math behind local service business leaks.",
      },
    ],
  }),
  component: Blog,
});

const POSTS = [
  {
    slug: "math-on-missed-calls-roofers",
    title: "The Math On Missed Calls For Local Roofers",
    date: "Aug 14",
    excerpt: "Why the average roofer loses $14,000 a month to the voicemail box, and how to stop it without hiring an answering service.",
  },
  {
    slug: "stop-no-shows-without-hiring",
    title: "How To Stop No-Shows Without Hiring A Front Desk Admin",
    date: "Aug 02",
    excerpt: "You don't need a $40k/yr employee to confirm appointments. You just need a system that texts them 24 hours before.",
  },
  {
    slug: "plumbers-lose-money-follow-up",
    title: "Why Plumbers Lose Money On Follow-Up (And How To Fix It)",
    date: "Jul 18",
    excerpt: "Sending a $5,000 quote and waiting for the phone to ring is a guaranteed way to lose the bid to the shop down the street.",
  }
];

function Blog() {
  return (
    <div style={{ padding: "var(--space-3xl) var(--page-gutter)", minHeight: "80vh" }}>
      <header className="section-head" style={{ maxWidth: "800px", margin: "0 auto var(--space-4xl)" }}>
        <p className="section-eyebrow">The Math</p>
        <h1 className="section-h">
          Operational <em>teardowns.</em>
        </h1>
        <p className="section-note" style={{ fontSize: "1.125rem", marginTop: "var(--space-md)" }}>
          We don't write generic marketing advice. We break down the exact operational leaks costing local businesses money, and show you the math on how to fix them.
        </p>
      </header>

      <div style={{ maxWidth: "800px", margin: "0 auto", display: "grid", gap: "var(--space-2xl)" }}>
        {POSTS.map((post) => (
          <article key={post.slug} style={{ paddingBottom: "var(--space-xl)", borderBottom: "1px solid var(--color-rule)" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", color: "var(--color-ink-3)", marginBottom: "var(--space-xs)" }}>{post.date}</p>
            <h2 className="blog__post-h">
              <Link to="/" style={{ color: "var(--color-ink)", textDecoration: "none" }}>{post.title}</Link>
            </h2>
            <p style={{ fontSize: "1.125rem", color: "var(--color-ink-2)", lineHeight: 1.6, margin: "0 0 var(--space-md)" }}>
              {post.excerpt}
            </p>
            <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "var(--color-accent)", fontWeight: 600, fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Read Teardown <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>

      <div style={{ maxWidth: "800px", margin: "var(--space-4xl) auto 0", padding: "var(--space-2xl)", background: "var(--color-paper-2)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-rule)", textAlign: "center" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 600, marginBottom: "var(--space-sm)" }}>Stop reading. Start fixing.</h3>
        <p style={{ color: "var(--color-ink-2)", marginBottom: "var(--space-lg)" }}>We can find your leak and calculate the math for your exact business in 20 minutes.</p>
        <CalModal>
          <button className="cta cta--primary border-0 cursor-pointer outline-none">
            <span>Book Your Free Assessment</span>
            <span className="cta__arrow" aria-hidden="true">→</span>
          </button>
        </CalModal>
      </div>
    </div>
  );
}
