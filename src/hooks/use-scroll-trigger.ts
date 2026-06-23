import { useEffect, useState, useRef } from "react";

export function useScrollTrigger({
  threshold = 0.45,
  fallbackDelay = 40_000,
  disabled = false,
}: {
  threshold?: number;
  fallbackDelay?: number;
  disabled?: boolean;
} = {}): { triggered: boolean } {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef(false);

  useEffect(() => {
    if (disabled || ref.current) return;

    const onScroll = () => {
      if (ref.current) return;
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (pct > threshold) {
        ref.current = true;
        setTriggered(true);
      }
    };

    const timer = setTimeout(() => {
      if (!ref.current) {
        ref.current = true;
        setTriggered(true);
      }
    }, fallbackDelay);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
  }, [disabled, threshold, fallbackDelay]);

  return { triggered };
}
