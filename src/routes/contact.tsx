import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { CTAButton } from "@/components/site/CTA";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { toast } from "sonner";
import { Check, Mail } from "lucide-react";
import { FacebookIcon } from "@/components/site/FacebookIcon";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Clockout" },
      { name: "description", content: "Email don@clockout.us or send a message. For audits and builds, the faster path is the assessment form." },
      { property: "og:title", content: "Contact Clockout" },
      { property: "og:description", content: "Real email. Real reply." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email(),
  message: z.string().trim().min(10).max(2000),
});
type V = z.infer<typeof schema>;

function ContactPage() {
  const [done, setDone] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<V>({ resolver: zodResolver(schema) });
  const onSubmit = async (data: V) => {
    // No backend wired up yet — open the user's mail client with a pre-filled message
    // so the form actually delivers something instead of silently dropping it.
    const subject = encodeURIComponent(`New message from ${data.name} via clockout.us`);
    const body = encodeURIComponent(`${data.message}\n\n— ${data.name}\nReply-to: ${data.email}`);
    window.location.href = `mailto:don@clockout.us?subject=${subject}&body=${body}`;
    toast.success("Opening your email app — hit send to deliver it.");
    setDone(true);
  };
  return (
    <SiteShell>
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x grid gap-14 md:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="eyebrow mb-3">Contact</div>
            <h1 className="text-5xl leading-[1.05] md:text-6xl">For everything that isn't an audit.</h1>
            <p className="mt-6 max-w-md text-foreground/80">
              Want an audit? The <Link to="/assessment" className="text-amber hover:underline">assessment form</Link> is faster. For anything else — partnerships, press, questions — this works.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <a className="flex items-center gap-2 text-foreground/85 hover:text-amber" href="mailto:don@clockout.us"><Mail className="h-4 w-4" /> don@clockout.us</a>
              <a className="flex items-center gap-2 text-foreground/85 hover:text-amber" href="https://www.facebook.com/profile.php?id=61590861503566" target="_blank" rel="noreferrer"><FacebookIcon /> Clockout on Facebook</a>
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-7 md:p-9">
            {done ? (
              <div className="py-10 text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-amber/15 text-amber">
                  <Check className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-3xl">Got it.</h3>
                <p className="mt-3 text-foreground/80">I'll be back to you shortly.</p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <div className="mb-2 text-sm text-foreground/85">Your name</div>
                  <input {...register("name")} className={inp} />
                  {errors.name && <div className="mt-1 text-xs text-destructive">{errors.name.message}</div>}
                </div>
                <div>
                  <div className="mb-2 text-sm text-foreground/85">Email</div>
                  <input {...register("email")} className={inp} type="email" />
                  {errors.email && <div className="mt-1 text-xs text-destructive">{errors.email.message}</div>}
                </div>
                <div>
                  <div className="mb-2 text-sm text-foreground/85">Message</div>
                  <textarea {...register("message")} rows={5} className={`${inp} resize-none`} />
                  {errors.message && <div className="mt-1 text-xs text-destructive">{errors.message.message}</div>}
                </div>
                <CTAButton type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending…" : "Send →"}
                </CTAButton>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

const inp = "w-full rounded-md border border-line bg-background px-4 py-3 text-foreground placeholder:text-dim focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/30";
