import { Link } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { CTA } from "./CTA";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { industries } from "@/data/industries";
import { PHONE_DISPLAY, PHONE_HREF } from "@/data/phone";

const nav = [
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur-md transition-shadow ${
        scrolled
          ? "shadow-[0_1px_0_0_var(--color-line),0_8px_24px_-16px_rgb(0_0_0_/_0.08)]"
          : ""
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="group flex shrink-0 items-center gap-2.5">
          <div className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground transition-transform group-hover:scale-105">
            <span className="font-mono text-sm font-bold">C</span>
          </div>
          <span className="text-base font-semibold tracking-tight text-foreground transition-opacity group-hover:opacity-75">
            Clockout
          </span>
        </Link>

        {/* Desktop nav */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-sm font-normal text-foreground transition-colors hover:bg-surface data-[state=open]:bg-surface">
                Industries
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[420px] grid-cols-2 gap-1 p-3">
                  {industries.map((i) => (
                    <li key={i.slug}>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/services/$slug"
                          params={{ slug: i.slug }}
                          className="block rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-surface"
                        >
                          <div className="font-medium text-foreground">{i.name}</div>
                          <div className="text-xs text-muted-foreground">{i.short}</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {nav.map((n) => (
              <NavigationMenuItem key={n.to}>
                <NavigationMenuLink asChild>
                  <Link
                    to={n.to}
                    className="inline-flex h-9 items-center rounded-md px-3 text-sm text-foreground transition-colors hover:bg-surface"
                    activeProps={{
                      className:
                        "inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-primary bg-surface transition-colors",
                    }}
                  >
                    {n.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface hover:text-primary"
            aria-label={`Call Clockout at ${PHONE_DISPLAY}`}
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden />
            <span className="hidden sm:inline mono-num">{PHONE_DISPLAY}</span>
          </a>
          <div className="hidden md:block">
            <CTA to="/assessment" size="sm">
              Book the audit →
            </CTA>
          </div>

          {/* Mobile sheet */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors hover:bg-surface"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="z-[60] w-[88vw] max-w-sm flex flex-col p-0"
            >
              <SheetHeader className="sr-only">
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Site navigation</SheetDescription>
              </SheetHeader>

              {/* Scrollable nav body */}
              <div className="flex-1 overflow-y-auto px-6 pb-4 pt-14">
                {/* Industries */}
                <span className="eyebrow block px-3 pb-2">Industries</span>
                <div className="-mx-3 space-y-0.5">
                  {industries.map((i) => (
                    <Link
                      key={i.slug}
                      to="/services/$slug"
                      params={{ slug: i.slug }}
                      onClick={() => setOpen(false)}
                      className="flex items-center rounded-md px-3 py-3 text-sm text-foreground transition-colors hover:bg-surface"
                    >
                      {i.name}
                    </Link>
                  ))}
                </div>

                <div className="my-5 h-px bg-line" />

                {/* Primary nav */}
                <div className="-mx-3 space-y-0.5">
                  {nav.map((n) => (
                    <Link
                      key={n.to}
                      to={n.to}
                      onClick={() => setOpen(false)}
                      className="flex items-center rounded-md px-3 py-3 text-sm text-foreground transition-colors hover:bg-surface"
                    >
                      {n.label}
                    </Link>
                  ))}
                </div>

                <div className="my-5 h-px bg-line" />

                {/* Secondary */}
                <span className="eyebrow block px-3 pb-2">Also available</span>
                <div className="-mx-3 space-y-0.5">
                  <Link
                    to="/operator-os"
                    onClick={() => setOpen(false)}
                    className="flex items-center rounded-md px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                  >
                    Operator OS — a personal system for founders & operators
                  </Link>
                </div>

                <div className="my-5 h-px bg-line" />

                {/* Phone */}
                <a
                  href={PHONE_HREF}
                  className="-mx-3 flex items-center gap-3 rounded-md px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden />
                  <span className="mono-num">{PHONE_DISPLAY}</span>
                </a>
              </div>

              {/* Sticky CTA footer */}
              <div className="border-t border-line px-6 py-4">
                <CTA to="/assessment" className="w-full" size="md">
                  Book the audit →
                </CTA>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
