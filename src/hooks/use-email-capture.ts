import { useState, useCallback } from "react";
import { createSubscriber } from "@/lib/api/sequenzy.functions";

export type CaptureState = {
  name: string;
  email: string;
  industry: string;
  capturing: boolean;
  captured: boolean;
  wasSubscriberAlready: boolean;
  error: string;
};

export type UseEmailCaptureReturn = CaptureState & {
  setName: (v: string) => void;
  setEmail: (v: string) => void;
  setIndustry: (v: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  reset: () => void;
};

export function useEmailCapture(): UseEmailCaptureReturn {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [industry, setIndustry] = useState("");
  const [capturing, setCapturing] = useState(false);
  const [captured, setCaptured] = useState(false);
  const [wasSubscriberAlready, setWasSubscriberAlready] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!name.trim() || !email.trim() || !industry) return;
      setCapturing(true);
      setError("");
      try {
        await createSubscriber({
          data: {
            email: email.trim(),
            firstName: name.trim(),
            tag: `industry-${industry}`,
          },
        });
        setCaptured(true);
      } catch (err: unknown) {
        const raw = err instanceof Error ? err.message : String(err);
        // Parse error for known cases
        let parsed: Record<string, unknown> | null = null;
        try {
          parsed = JSON.parse(raw) as Record<string, unknown>;
        } catch {
          /* not JSON */
        }

        const errorMsg = parsed?.error as string | undefined;
        if (
          errorMsg?.includes("already exists") ||
          errorMsg?.includes("duplicate") ||
          raw.includes("already exists") ||
          raw.includes("duplicate")
        ) {
          setCaptured(true);
          setWasSubscriberAlready(true);
        } else if (
          errorMsg?.includes("Invalid domain") ||
          errorMsg?.includes("cannot receive email")
        ) {
          setError("That email address can't receive messages — double-check it and try again.");
        } else if (raw.includes("SEQUENZY_API_KEY not configured")) {
          setError(
            "Service temporarily unavailable. Email contact@clockout.us and we'll send it right over.",
          );
        } else {
          setError("Something went wrong. Try again or email contact@clockout.us.");
        }
      } finally {
        setCapturing(false);
      }
    },
    [name, email, industry],
  );

  const reset = useCallback(() => {
    setName("");
    setEmail("");
    setIndustry("");
    setCapturing(false);
    setCaptured(false);
    setWasSubscriberAlready(false);
    setError("");
  }, []);

  return {
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
    reset,
  };
}
