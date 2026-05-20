import { useState } from "react";

export function LeadBar() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [missedCalls, setMissedCalls] = useState("1-5");

  return (
    <section className="leadbar" aria-label="Free AI Assessment">
      <div className="leadbar__inner">
        <div className="leadbar__copy">
          <h3>The Free Revenue Leak Assessment.</h3>
          <p>Find out exactly how much cash you're leaving on the table. Takes 30 seconds.</p>
        </div>
        
        {step === 1 && !done && (
          <form
            className="leadbar__form"
            onSubmit={(e) => {
              e.preventDefault();
              setStep(2);
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="missedCalls" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                How many calls do you miss in a typical week?
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <select 
                  id="missedCalls"
                  value={missedCalls} 
                  onChange={(e) => setMissedCalls(e.target.value)}
                  style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                >
                  <option value="1-5">1-5 calls</option>
                  <option value="5-15">5-15 calls</option>
                  <option value="15+">15+ calls (Bleeding cash)</option>
                </select>
                <button type="submit" className="cta cta--primary">
                  <span>Next Step</span>
                  <span className="cta__arrow" aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </form>
        )}

        {step === 2 && !done && (
          <form
            className="leadbar__form"
            onSubmit={(e) => {
              e.preventDefault();
              if (!email) return;
              setDone(true);
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="email" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                Where should we send your custom ROI report?
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@yourshop.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="cta cta--primary">
                  <span>Get My Report</span>
                  <span className="cta__arrow" aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </form>
        )}

        {done && (
          <p
            className="tnum"
            style={{ color: "var(--color-success)", margin: 0, alignSelf: "center", fontWeight: "bold" }}
          >
            ✓ Report generated. Check your inbox.
          </p>
        )}
        <p className="leadbar__note">No pitch. No monthly software retainers. Just the math.</p>
      </div>
    </section>
  );
}
