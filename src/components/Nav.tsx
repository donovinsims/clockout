import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CalModal } from "./CalModal";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="nav" data-state={scrolled ? "scrolled" : "rest"}>
      <div className="nav__inner">
        <Link className="nav__brand" to="/" aria-label="Clockout · home">
          <span className="nav__brand-dot" aria-hidden="true" />
          <span>
            Clockout<span className="nav__brand-num">/IL</span>
          </span>
        </Link>
        <button 
          className="nav__menu-btn" 
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span aria-hidden="true">{mobileOpen ? "×" : "☰"}</span>
        </button>
        <nav className="nav__links" aria-label="Primary">
          <Link to="/about">About</Link>
          <Link to="/agents">Agents</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/operator-os">Operator OS</Link>
        </nav>
        {mobileOpen && (
          <nav className="nav__drawer" aria-label="Mobile menu">
            <Link to="/about" onClick={() => setMobileOpen(false)}>About</Link>
            <Link to="/agents" onClick={() => setMobileOpen(false)}>Agents</Link>
            <Link to="/blog" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link to="/operator-os" onClick={() => setMobileOpen(false)}>Operator OS</Link>
          </nav>
        )}
        <CalModal>
          <button className="nav__cta cursor-pointer border-0 outline-none">
            <span className="nav__cta-text-desktop">Book Your Free Assessment</span>
            <span className="nav__cta-text-mobile">Free Assessment</span>
            <span className="nav__cta-arrow" aria-hidden="true">
              →
            </span>
          </button>
        </CalModal>
      </div>
    </header>
  );
}
