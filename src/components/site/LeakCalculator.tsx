import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "motion/react";
import { CTA } from "./CTA";
import EmailCaptureForm from "./EmailCaptureForm";

const SLIDER_MIN_MISSED = 1;
const SLIDER_MAX_MISSED = 20;
const SLIDER_MIN_TICKET = 150;
const SLIDER_MAX_TICKET = 2500;
const SLIDER_STEP_TICKET = 50;

function useCountUp(target: number, trigger: boolean, duration = 0.8) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [target, trigger, duration]);
  return val;
}

export function LeakCalculator() {
  const [missed, setMissed] = useState(5);
  const [ticket, setTicket] = useState(450);
  const annual = missed * ticket * 52;
  const weekly = missed * ticket;
  const monthly = weekly * 4;
  const formatCurrency = (n: number) => n.toLocaleString("en-US");

  // Email capture state
  const [showCapture, setShowCapture] = useState(false);
  const [captured, setCaptured] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const animatedAnnual = useCountUp(annual, inView);
  const displayed = inView && annual === animatedAnnual ? annual : animatedAnnual;

  return (
    <section className="border-b border-line py-20 md:py-28">
      <div className="container-x grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-start">
        <div>
          <div className="eyebrow mb-3">Your number</div>
          <h2 className="text-4xl md:text-5xl">How much is the phone costing you?</h2>
          <p className="mt-5 text-muted-foreground">
            62% of calls to home service businesses never get answered. Plug in your numbers. The
            figure below is what's quietly walking out the door.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Source: ServiceTitan "Missed Connections" study of 50K monitored phone lines.
          </p>
        </div>

        <div ref={ref} className="rounded-[12px] border border-line bg-surface p-6 md:p-8">
          <label className="mb-6 block">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-foreground">Missed calls per week</span>
              <span className="mono-num text-lg text-primary">{missed}</span>
            </div>
            <input
              type="range"
              min={SLIDER_MIN_MISSED}
              max={SLIDER_MAX_MISSED}
              value={missed}
              onChange={(e) => setMissed(Number(e.target.value))}
              className="mt-3 w-full accent-[var(--color-primary)] focus-visible:outline-2 focus-visible:outline-offset-2"
              aria-valuetext={`${missed} missed calls per week`}
            />
          </label>
          <label className="mb-2 block">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-foreground">Average ticket size</span>
              <span className="mono-num text-lg text-primary">${formatCurrency(ticket)}</span>
            </div>
            <input
              type="range"
              min={SLIDER_MIN_TICKET}
              max={SLIDER_MAX_TICKET}
              step={SLIDER_STEP_TICKET}
              value={ticket}
              onChange={(e) => setTicket(Number(e.target.value))}
              className="mt-3 w-full accent-[var(--color-primary)] focus-visible:outline-2 focus-visible:outline-offset-2"
              aria-valuetext={`${ticket} dollars average ticket`}
            />
          </label>

          <div className="mt-8 rounded-[12px] bg-background p-6 text-center">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              Walking out the door, every year
            </div>
            <motion.div
              className="mono-num mt-2 font-semibold text-foreground"
              style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)", lineHeight: 1 }}
              aria-live="polite"
            >
              ${formatCurrency(displayed)}
            </motion.div>
            <div className="mt-3 flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>
                <span className="mono-num text-foreground">${formatCurrency(weekly)}</span>/wk
              </span>
              <span aria-hidden>·</span>
              <span>
                <span className="mono-num text-foreground">${formatCurrency(monthly)}</span>/mo
              </span>
            </div>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
              <span className="mono-num">${formatCurrency(annual)}/yr</span> → leaking out the door,
              every year
            </div>
          </div>

          <div className="mt-3 text-center text-xs text-muted-foreground">
            Not every missed call is a job — plenty are spam or price-shoppers. The Build recovers
            the real ones, typically 20–35% of missed calls and cold quotes.
          </div>

          <div className="mt-6 flex justify-center">
            <CTA to="/assessment" size="md">
              Get your Money-Leak Map →
            </CTA>
          </div>

          {!captured ? (
            <div className="mt-6 rounded-[12px] border border-line bg-surface/30 p-5 text-center">
              <p className="text-sm font-medium text-foreground">
                Want the free guide?{" "}
                <button
                  onClick={() => setShowCapture(!showCapture)}
                  className="underline underline-offset-2 hover:text-primary"
                >
                  {showCapture ? "No thanks" : "Show me the 10-Hour Recovery Guide →"}
                </button>
              </p>
              {showCapture && <EmailCaptureForm inline onSuccess={() => setCaptured(true)} />}
            </div>
          ) : (
            <div className="mt-6 rounded-[12px] border border-primary/30 bg-primary/5 p-5 text-center">
              <p className="text-sm font-semibold text-foreground">
                Sent! Check your inbox for the 10-Hour Recovery Guide.
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Want the full audit?{" "}
                <a href="/assessment" className="underline underline-offset-2 hover:text-primary">
                  Get your Money-Leak Map →
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
