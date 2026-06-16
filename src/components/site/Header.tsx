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

const PHONE_DISPLAY = "(608) 713-1651";
const PHONE_HREF = "tel:+16087131651";

const nav = [
  { to: "/operator-os", label: "Operator OS" },
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
        scrolled ? "shadow-[0_1px_0_0_var(--color-line),0_8px_24px_-16px_rgb(0_0_0_/_0.08)]" : ""
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground">
            <span className="font-mono text-sm font-bold">C</span>
          </div>
          <span className="text-base font-semibold tracking-tight">Clockout</span>
        </Link>

        {/* Desktop nav */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-sm font-normal text-foreground hover:bg-surface data-[state=open]:bg-surface">
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
                          className="block rounded-md px-3 py-2.5 text-sm hover:bg-surface"
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
                    className="inline-flex h-9 items-center rounded-md px-3 text-sm text-foreground hover:bg-surface"
                    activeProps={{ className: "inline-flex h-9 items-center rounded-md px-3 text-sm text-primary bg-surface" }}
                  >
                    {n.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right cluster — phone always visible */}
        <div className="flex items-center gap-2">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-1.5 rounded-md px-2 py-2 text-sm font-medium text-foreground hover:text-primary"
            aria-label={`Call Clockout at ${PHONE_DISPLAY}`}
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span className="hidden sm:inline mono-num">{PHONE_DISPLAY}</span>
          </a>
          <div className="hidden md:block">
            <CTA to="/assessment" size="sm">
              Book the audit →
            </CTA>
          </div>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-surface"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription className="sr-only">Site navigation</SheetDescription>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-1">
                <div className="px-3 pb-2 text-xs uppercase tracking-wider text-muted-foreground">Industries</div>
                {industries.map((i) => (
                  <Link
                    key={i.slug}
                    to="/services/$slug"
                    params={{ slug: i.slug }}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2.5 text-foreground hover:bg-surface"
                  >
                    {i.name}
                  </Link>
                ))}
                <div className="my-3 h-px bg-line" />
                {nav.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2.5 text-foreground hover:bg-surface"
                  >
                    {n.label}
                  </Link>
                ))}
                <div className="my-3 h-px bg-line" />
                <a
                  href={PHONE_HREF}
                  className="rounded-md px-3 py-2.5 font-medium text-foreground hover:bg-surface"
                >
                  <Phone className="mr-2 inline h-4 w-4" />
                  <span className="mono-num">{PHONE_DISPLAY}</span>
                </a>
                <CTA to="/assessment" className="mt-2" size="md">
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
