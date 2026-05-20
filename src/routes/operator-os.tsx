import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CalModal } from "@/components/CalModal";

export const Route = createFileRoute("/operator-os")({
  head: () => ({
    meta: [
      { title: "Operator OS — Executive Assistant for the Truck" },
      {
        name: "description",
        content:
          "Stop doing admin at 7 PM. A custom-built, private assistant that lives inside your text messages.",
      },
    ],
  }),
  component: OperatorOS,
});

function OperatorOS() {
  useEffect(() => {
    document.body.classList.add("operator-os-theme");
    return () => {
      document.body.classList.remove("operator-os-theme");
    };
  }, []);

  return (
    <div className="operator-os-theme">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__spotlight" />
        <span className="hero__rail">
          <span className="hero__rail-dot" /> Executive Assistant for the Truck
        </span>
        <h1 className="hero__display">
          <span className="hero__line">Stop doing</span>
          <span className="hero__line">admin at</span>
          <span className="hero__line"><em>7 PM.</em></span>
        </h1>
        
        <p className="section-note" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem', lineHeight: '1.6' }}>
          A custom-built, private assistant that lives inside your text messages. You message it, and it handles the work. You own it outright. No new apps required. You use your own phone number—no new number is provided by default (a free Google Voice number is optional if requested). iMessage is the default, with Telegram, WhatsApp, and Slack as optional alternatives.
        </p>

        <div className="hero__ctas">
          <CalModal>
            <button className="cta cta--primary cta--lg border-0 cursor-pointer">
              <span>Book Your Free Assessment</span>
              <span className="cta__arrow" aria-hidden="true">→</span>
            </button>
          </CalModal>
        </div>

        {/* Math Section */}
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">5+ hrs</span>
            <span className="hero__stat-label">Saved per week</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">0</span>
            <span className="hero__stat-label">New apps to install</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">100%</span>
            <span className="hero__stat-label">Outright Ownership</span>
          </div>
        </div>
      </section>

      {/* Visual Mockup Section */}
      <section className="proof">
        <div className="proof__grid">
          <div className="proof__copy">
            <h2 className="section-h">It runs inside <em>iMessage.</em></h2>
            <p>
              This isn't another dashboard you have to log into at the end of the day. It's a private, custom-built assistant that lives in your phone. 
              You message it updates, and it updates your CRM, dispatches follow-ups, and logs data instantly.
            </p>
            <ul className="proof__list">
              <li>No new phone numbers to manage.</li>
              <li>No new software to learn.</li>
              <li>Total relief from the admin drag.</li>
            </ul>
          </div>
          <div className="iphone-mockup">
            <img
              src="/phone-mockup.png"
              alt="iPhone showing Executive Assistant iMessage conversation"
              className="iphone-mockup__img"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="fixes">
        <div className="section-head" style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
          <p className="section-eyebrow">Real situations</p>
          <h2 className="section-h" style={{ margin: '0 auto' }}>Who uses it?</h2>
        </div>
        <div className="fixes__grid">
          <div className="fix">
            <p className="fix__num">01</p>
            <h3 className="fix__h">The Roofer</h3>
            <p className="fix__p">Logging leads by SMS while on the job site. Just text the name and address, and it's in the system.</p>
          </div>
          <div className="fix">
            <p className="fix__num">02</p>
            <h3 className="fix__h">The Realtor</h3>
            <p className="fix__p">Drafting contracts from a voice memo recorded in the car right after a showing.</p>
          </div>
          <div className="fix">
            <p className="fix__num">03</p>
            <h3 className="fix__h">The Salon Owner</h3>
            <p className="fix__p">Automatically rebooking no-shows via text while managing the floor during the morning rush.</p>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="how">
        <div className="section-head" style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
          <p className="section-eyebrow">The Process</p>
          <h2 className="section-h" style={{ margin: '0 auto' }}>How it works</h2>
        </div>
        <div className="how__steps">
          <div className="how__step">
            <p className="how__num">Step 1</p>
            <h3 className="how__h">Save the workflow to your phone.</h3>
            <p className="how__p">We install the custom connection directly to your device.</p>
          </div>
          <div className="how__step">
            <p className="how__num">Step 2</p>
            <h3 className="how__h">Send updates the way you already do.</h3>
            <p className="how__p">Use iMessage to send voice notes or quick texts to your private assistant number.</p>
          </div>
          <div className="how__step">
            <p className="how__num">Step 3</p>
            <h3 className="how__h">It updates your CRM and calendar.</h3>
            <p className="how__p">The system handles the data entry, routing, and notifications automatically.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="finalcta">
        <div className="finalcta__inner">
          <h2 className="finalcta__h">Ready to stop <em>doing it all?</em></h2>
          <p className="finalcta__p">Let's find your operational leak and fix it in under a week.</p>
          <CalModal>
            <button className="cta cta--primary cta--lg border-0 cursor-pointer">
              <span>Book Your Free Assessment</span>
              <span className="cta__arrow" aria-hidden="true">→</span>
            </button>
          </CalModal>
        </div>
      </section>
    </div>
  );
}
