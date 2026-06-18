import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Calendar } from "lucide-react";

/**
 * Minimal mobile floating CTA.
 * - Tiny icon-only FAB in the bottom-right.
 * - Never expands to a bottom sheet. Never spans the viewport width.
 * - Uses IntersectionObserver on #main-content to detect when hero exits viewport.
 * - Content-aware: works at any screen size, on any page.
 */
export function MobileStickyCta() {
  const [show, setShow] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const main = document.getElementById("main-content");
    if (!main) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show CTA when the top of page content has scrolled past the viewport
        // (hero section exited). Hide when content re-enters (scrolled back up).
        setShow(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-60px 0px 0px 0px" },
    );
    observer.observe(main);

    // While scrolling down, hide the CTA so it doesn't block reading.
    const onScroll = () => {
      const y = window.scrollY;
      const scrollingDown = y > lastY.current + 8;
      if (scrollingDown) setShow(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
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
