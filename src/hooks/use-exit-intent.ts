import { useEffect, useState, useRef } from "react";

export function useExitIntent({
  disabled = false,
}: {
  disabled?: boolean;
} = {}): { triggered: boolean } {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef(false);

  useEffect(() => {
    if (disabled || ref.current) return;

    const onMouseLeave = (e: MouseEvent) => {
      if (ref.current) return;
      if (e.clientY <= 0) {
        ref.current = true;
        setTriggered(true);
      }
    };

    document.addEventListener("mouseleave", onMouseLeave);
    return () => document.removeEventListener("mouseleave", onMouseLeave);
  }, [disabled]);

  return { triggered };
}
