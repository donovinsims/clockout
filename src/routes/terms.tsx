import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms of Service — Clockout" }, { name: "description", content: "Terms for using clockout.us and engaging Clockout services." }] }),
  component: () => (
    <SiteShell>
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x max-w-3xl">
          <div className="eyebrow mb-3">Legal</div>
          <h1 className="text-5xl">Terms of Service</h1>
          <div className="prose prose-invert mt-8 space-y-5 text-foreground/85">
            <p>Last updated: June 2026.</p>
            <p>By using clockout.us you agree to the following. These terms are intentionally short. The full engagement terms for paid work live in a separate Statement of Work you'll sign before any build begins.</p>
            <h2 className="pt-6 text-2xl">Use of the site</h2>
            <p>This site is for informational purposes and to request a free assessment. Don't try to break it. Don't scrape it.</p>
            <h2 className="pt-6 text-2xl">Assessment</h2>
            <p>The free assessment is a written report based on what you tell us and publicly available information. It is not professional advice for any specific business or legal decision.</p>
            <h2 className="pt-6 text-2xl">Paid engagements</h2>
            <p>All paid work is governed by a written Statement of Work that covers scope, deliverables, timeline, ownership, payment, and the guarantees described on this site.</p>
            <h2 className="pt-6 text-2xl">Limitation of liability</h2>
            <p>To the maximum extent permitted by law, Clockout's liability for any claim related to this site is limited to the amount you paid for the related service, if any.</p>
            <h2 className="pt-6 text-2xl">Governing law</h2>
            <p>These terms are governed by the laws of the State of Illinois.</p>
          </div>
        </div>
      </section>
    </SiteShell>
  ),
});
