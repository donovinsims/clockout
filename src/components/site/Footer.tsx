import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { industries } from "@/data/industries";
import { towns as SERVICE_AREA } from "@/data/serviceArea";
import { PHONE_DISPLAY, PHONE_HREF } from "@/data/phone";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground font-mono text-sm font-bold">
                C
              </div>
              <span className="font-semibold">Clockout</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              One-time automation builds for owner-operated trade and service businesses. Flat fee.
              You own it.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 text-foreground hover:text-primary"
              >
                <Phone className="h-4 w-4" aria-hidden />
                <span className="mono-num">{PHONE_DISPLAY}</span>
              </a>
              <a
                href="mailto:contact@clockout.us"
                className="flex items-center gap-2 text-foreground hover:text-primary"
              >
                <Mail className="h-4 w-4" aria-hidden />
                contact@clockout.us
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" aria-hidden />
                Roscoe, IL
              </div>
            </div>
            <p className="mt-5 text-xs text-muted-foreground">
              Mon–Fri 7am–6pm CT · After-hours by appointment
            </p>
          </div>

          <div>
            <div className="eyebrow mb-4">Industries</div>
            <ul className="space-y-2 text-sm">
              {industries.map((i) => (
                <li key={i.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: i.slug }}
                    className="text-foreground hover:text-primary"
                  >
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-4">Clockout</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-foreground hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-foreground hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/operator-os" className="text-foreground hover:text-primary">
                  Operator OS
                </Link>
              </li>
              <li>
                <Link to="/assessment" className="text-foreground hover:text-primary">
                  Book the audit
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-4">Service area</div>
            <ul className="space-y-1.5 text-sm text-foreground">
              {SERVICE_AREA.map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Delivered remotely — happy to build anywhere in the US during the beta.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Clockout. Built in Roscoe, IL.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-primary">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-primary">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
