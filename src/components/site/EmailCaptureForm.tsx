import { useEffect, useRef } from "react";
import { useEmailCapture } from "@/hooks/use-email-capture";
import { INDUSTRY_OPTIONS } from "@/data/industry-options";

export interface EmailCaptureFormSuccessData {
  name: string;
  email: string;
  wasSubscriberAlready: boolean;
}

export interface EmailCaptureFormProps {
  /** Label for the submit button. Defaults to "Send me the free guide →". */
  submitLabel?: string;
  /** Optional description text shown above the input fields. */
  description?: string;
  /** If true, fields display in a 3-column grid on sm+ (calculator layout). */
  inline?: boolean;
  /** Compact spacing for tight spaces (popup layout). */
  compact?: boolean;
  /** Called when email capture succeeds. */
  onSuccess?: (data: EmailCaptureFormSuccessData) => void;
}

export default function EmailCaptureForm({
  submitLabel = "Send me the free guide →",
  description,
  inline = false,
  compact = false,
  onSuccess,
}: EmailCaptureFormProps) {
  const {
    name,
    setName,
    email,
    setEmail,
    industry,
    setIndustry,
    capturing,
    captured,
    wasSubscriberAlready,
    error,
    handleSubmit,
  } = useEmailCapture();

  // Fire onSuccess only when transitioning from not-captured → captured
  const prevCapturedRef = useRef(captured);
  useEffect(() => {
    if (captured && !prevCapturedRef.current) {
      onSuccess?.({ name, email, wasSubscriberAlready });
    }
    prevCapturedRef.current = captured;
  }, [captured, name, email, wasSubscriberAlready, onSuccess]);

  const inputClass =
    "w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary";
  const selectClass =
    "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary";

  const gapY = compact ? "gap-2" : "gap-3";
  const gapTop = compact ? "mt-3" : "mt-4";

  const inputs = (
    <>
      <input
        type="text"
        placeholder="First name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className={inputClass}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={inputClass}
      />
      <select
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
        required
        className={selectClass}
      >
        <option value="">Your trade</option>
        {INDUSTRY_OPTIONS.map((ind) => (
          <option key={ind.value} value={ind.value}>
            {ind.label}
          </option>
        ))}
      </select>
    </>
  );

  return (
    <form
      onSubmit={handleSubmit}
      className={inline ? `${gapTop} grid ${gapY} text-left` : `${gapTop} space-y-3`}
    >
      {description && <p className="text-sm text-muted-foreground">{description}</p>}

      {inline ? <div className="grid gap-3 sm:grid-cols-3">{inputs}</div> : inputs}

      {error && <p className="text-xs text-destructive">{error}</p>}

      <button
        type="submit"
        disabled={capturing}
        className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
      >
        {capturing ? "Sending..." : submitLabel}
      </button>
      <p className="text-center text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>
    </form>
  );
}
