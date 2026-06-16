import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Calendar } from "lucide-react";

/**
 * Minimal mobile floating CTA.
 * - Tiny icon-only FAB in the bottom-right.
 * - Never expands to a bottom sheet. Never spans the viewport width.
 * - Appears only after the user has scrolled well past the hero.
 * - Auto-hides while scrolling down so it never blocks reading flow.
 */
export function MobileStickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const scrollingDown = y > lastY + 4;
      const scrollingUp = y < lastY - 4;
      // Only show after the hero, and only when paused or scrolling up.
      if (y > 1200 && !scrollingDown) setShow(true);
      if (scrollingDown || y < 1000) setShow(false);
      lastY = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      to="/assessment"
      aria-label="Book the free 48-hour audit"
      className={`md:hidden fixed right-3 z-40 grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg ring-1 ring-black/5 transition-all duration-200 active:scale-95 ${
        show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3"
      }`}
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 12px)" }}
    >
      <Calendar className="h-5 w-5" aria-hidden />
    </Link>
  );
}
