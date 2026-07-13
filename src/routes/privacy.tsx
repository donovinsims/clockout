import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — Clockout" }, { name: "description", content: "How Clockout handles your data." }] }),
  component: () => (
    <SiteShell>
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x max-w-3xl">
          <div className="eyebrow mb-3">Legal</div>
          <h1 className="text-5xl">Privacy Policy</h1>
          <div className="prose prose-invert mt-8 space-y-5 text-foreground/85">
            <p>Last updated: June 2026.</p>
            <p>Clockout ("we", "us") is a sole-proprietor service business based in Roscoe, Illinois. This page explains in plain language what we collect, why, and what we do with it.</p>
            <h2 className="pt-6 text-2xl">What we collect</h2>
            <p>Name, email, phone, business type, town, and any details you choose to share in the assessment or contact form. If you become a client, we also handle credentials and operational data on your behalf, under written agreement, with access you control and can revoke at any time.</p>
            <h2 className="pt-6 text-2xl">Why we collect it</h2>
            <p>To respond to your inquiry, deliver the work you hired us for, and stay in touch about that work. We don't sell, rent, or trade your data. We don't run ads on it.</p>
            <h2 className="pt-6 text-2xl">Cookies & analytics</h2>
            <p>We use <a href="https://plausible.io" className="text-amber hover:underline" target="_blank" rel="noopener noreferrer">Plausible</a> for privacy-friendly pageview analytics (no cookies, no personal data collected) and <a href="https://clarity.microsoft.com" className="text-amber hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Clarity</a> for session recordings and heatmaps to improve our site experience. Neither tool collects personal information or uses tracking cookies.</p>
            <h2 className="pt-6 text-2xl">Your rights</h2>
            <p>Email <a href="mailto:contact@clockout.us" className="text-amber hover:underline">contact@clockout.us</a> at any time to ask what we have on you, request a copy, or have it deleted.</p>
          </div>
        </div>
      </section>
    </SiteShell>
  ),
});
