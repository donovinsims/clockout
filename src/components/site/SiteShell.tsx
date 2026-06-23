import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileStickyCta } from "./MobileStickyCta";
import { LeadMagnetPopup } from "./LeadMagnetPopup";

export function SiteShell({
  children,
  stickyCta = true,
  leadMagnet = true,
}: {
  children: ReactNode;
  stickyCta?: boolean;
  leadMagnet?: boolean;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      {stickyCta && <MobileStickyCta />}
      {leadMagnet && <LeadMagnetPopup />}
    </div>
  );
}
