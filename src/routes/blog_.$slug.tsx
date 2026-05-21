import { createFileRoute, Link } from "@tanstack/react-router";
import { CalModal } from "@/components/CalModal";
import { POSTS } from "@/lib/posts";

export const Route = createFileRoute("/blog_/$slug")({
  head: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) {
      return {
        meta: [
          { title: "Post Not Found — Clockout" },
          { name: "description", content: "That post doesn't exist." },
        ],
      };
    }
    return {
      meta: [
        { title: `${post.title} — Clockout` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: `${post.title} — Clockout` },
        { property: "og:description", content: post.excerpt },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { slug } = Route.useParams();
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    return <PostNotFound />;
  }

  return (
    <article
      style={{
        padding: "var(--space-3xl) var(--page-gutter)",
        minHeight: "80vh",
      }}
    >
      {/* Back link */}
      <nav
        style={{
          maxWidth: "65ch",
          margin: "0 auto var(--space-xl)",
        }}
      >
        <Link
          to="/blog"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-xs)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--color-ink-3)",
            textDecoration: "none",
            transition: "color var(--dur-fast) var(--ease-out)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--color-ink)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--color-ink-3)")
          }
        >
          ← Operator Insights
        </Link>
      </nav>

      {/* Article header */}
      <header
        style={{
          maxWidth: "65ch",
          margin: "0 auto var(--space-2xl)",
        }}
      >
        {/* Tag + meta row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-md)",
            marginBottom: "var(--space-lg)",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-xs)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              padding: "3px 10px",
              border:
                "1px solid color-mix(in oklch, var(--color-accent) 38%, transparent)",
              borderRadius: "var(--radius-xs)",
            }}
          >
            {post.tag}
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-xs)",
              color: "var(--color-ink-3)",
            }}
          >
            {post.date} · {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(1.75rem, 3vw + 0.5rem, 2.75rem)",
            letterSpacing: "-0.025em",
            lineHeight: 1.12,
            color: "var(--color-ink)",
            margin: "0 0 var(--space-lg)",
          }}
        >
          {post.title}
        </h1>

        {/* Excerpt / lede quote */}
        <p
          style={{
            fontSize: "var(--text-lg)",
            color: "var(--color-ink-2)",
            lineHeight: 1.6,
            margin: 0,
            borderLeft: "2px solid var(--color-accent)",
            paddingLeft: "var(--space-lg)",
          }}
        >
          {post.excerpt}
        </p>
      </header>

      {/* Divider */}
      <div
        style={{
          maxWidth: "65ch",
          margin: "0 auto var(--space-2xl)",
          height: "1px",
          background: "var(--color-rule)",
        }}
      />

      {/* Article body */}
      <div
        style={{
          maxWidth: "65ch",
          margin: "0 auto",
          display: "grid",
          gap: "var(--space-xl)",
        }}
      >
        {/* Opening paragraph */}
        <p
          style={{
            fontSize: "var(--text-lg)",
            color: "var(--color-ink-2)",
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          {post.lede}
        </p>

        {/* Body sections */}
        {post.sections.map((section, i) => (
          <section key={i} style={{ display: "grid", gap: "var(--space-sm)" }}>
            {section.heading && (
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "var(--text-xl)",
                  letterSpacing: "-0.02em",
                  color: "var(--color-ink)",
                  margin: 0,
                }}
              >
                {section.heading}
              </h2>
            )}
            {section.body.map((para, j) => (
              <p
                key={j}
                style={{
                  color: "var(--color-ink-2)",
                  fontSize: "var(--text-md)",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {para}
              </p>
            ))}
          </section>
        ))}

        {/* Divider before PS */}
        <div style={{ height: "1px", background: "var(--color-rule)" }} />

        {/* PS */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-sm)",
            color: "var(--color-ink-3)",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {post.ps}
        </p>
      </div>

      {/* Bottom CTA card */}
      <div
        style={{
          maxWidth: "65ch",
          margin: "var(--space-4xl) auto 0",
          padding: "var(--space-2xl)",
          background: "var(--color-paper-2)",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--color-rule)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-xs)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            margin: "0 0 var(--space-sm)",
          }}
        >
          Free · 20 minutes · Written report same day
        </p>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-xl)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            margin: "0 0 var(--space-sm)",
          }}
        >
          Find your leak. Get the number.
        </h3>
        <p
          style={{
            color: "var(--color-ink-2)",
            fontSize: "var(--text-sm)",
            lineHeight: 1.6,
            margin: "0 0 var(--space-lg)",
          }}
        >
          We calculate the exact monthly cost of your operational leak and show
          you what a fix would return — before you spend a dollar.
        </p>
        <CalModal>
          <button className="cta cta--primary border-0 cursor-pointer outline-none">
            <span>Book Your Free Assessment</span>
            <span className="cta__arrow" aria-hidden="true">
              →
            </span>
          </button>
        </CalModal>
      </div>
    </article>
  );
}

function PostNotFound() {
  return (
    <div
      style={{
        padding: "var(--space-3xl) var(--page-gutter)",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: "var(--space-lg)",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "var(--text-xs)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--color-ink-3)",
          margin: 0,
        }}
      >
        404
      </p>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "var(--text-3xl)",
          letterSpacing: "-0.025em",
          color: "var(--color-ink)",
          margin: 0,
        }}
      >
        Post not found.
      </h1>
      <p style={{ color: "var(--color-ink-2)", margin: 0 }}>
        That teardown doesn't exist. Try starting from the list.
      </p>
      <Link to="/blog" className="cta cta--ghost">
        ← Back to Operator Insights
      </Link>
    </div>
  );
}
