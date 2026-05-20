import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Ambient } from "@/components/Ambient";

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;700;800;900&family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap";

function NotFoundComponent() {
  return (
    <div className="finalcta">
      <div className="finalcta__inner">
        <p className="section-eyebrow">
          <span className="num tnum">404</span> · not here
        </p>
        <h2 className="finalcta__h">
          That page <em>isn't on the site.</em>
        </h2>
        <p className="finalcta__p">
          Probably moved. Probably never existed. Head back to the home page.
        </p>
        <Link to="/" className="cta cta--primary cta--lg">
          <span>Go home</span>
          <span className="cta__arrow" aria-hidden>
            →
          </span>
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="finalcta">
      <div className="finalcta__inner">
        <h2 className="finalcta__h">Something didn't load.</h2>
        <p className="finalcta__p">Refresh, or head home and start over.</p>
        <div style={{ display: "flex", gap: "var(--space-md)", justifyContent: "center" }}>
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="cta cta--primary"
          >
            Try again
          </button>
          <a href="/" className="cta cta--ghost">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#1a120c" },
      { title: "Clockout — Local automation for owner-operators" },
      {
        name: "description",
        content:
          "Find the leak. Fix it in 3–7 days. Own the system outright. Roscoe · Rockford · Beloit.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Clockout — Local automation for owner-operators" },
      {
        property: "og:description",
        content:
          "Flat-fee installs for local service businesses. No retainer. No lock-in. 30-day guarantee.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Clockout — Local automation for owner-operators" },
      { name: "description", content: "Hallmark Companion is a web application for managing and visualizing blockchain data." },
      { property: "og:description", content: "Hallmark Companion is a web application for managing and visualizing blockchain data." },
      { name: "twitter:description", content: "Hallmark Companion is a web application for managing and visualizing blockchain data." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c6f8206b-7bd8-4e35-8205-a05cffdc50b9/id-preview-2520dcf0--5619a274-7a6d-4c1e-9a11-ef976037bccd.lovable.app-1779226636464.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c6f8206b-7bd8-4e35-8205-a05cffdc50b9/id-preview-2520dcf0--5619a274-7a6d-4c1e-9a11-ef976037bccd.lovable.app-1779226636464.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: FONTS_URL },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Ambient />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
