import { Wrench } from "lucide-react";

const TOOLS = ["Jobber", "Housecall Pro", "ServiceTitan", "Twilio", "Make", "OpenAI", "GoHighLevel"];

export function FounderProof() {
  return (
    <section className="border-b border-line py-20 md:py-28">
      <div className="container-x max-w-3xl">
        <div className="eyebrow mb-3">Who's actually doing the work</div>
        <h2 className="text-3xl md:text-4xl">
          I ran ops for startups and Fortune 500 companies. Now I bring that discipline to Main Street.
        </h2>
        <p className="mt-5 text-[17px] text-muted-foreground">
          I'm Donovin. Before Clockout I ran product operations at Uber — real-time
          dispatch for live events with 50,000+ attendees — and shipped digital products
          at Walgreens. I grew up in Roscoe. I built this because every owner I know is
          losing $40K+/year to missed calls and dead quotes. The fix isn't a mystery —
          it's just never been brought to local shops at a flat price.
        </p>

        <div className="mt-8">
          <div className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">
            <Wrench className="mr-1.5 inline h-3.5 w-3.5" aria-hidden /> Built inside
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {TOOLS.map((t) => (
              <span key={t} className="mono-num text-sm text-foreground">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
