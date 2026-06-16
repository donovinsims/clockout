import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "sonner";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="mono-num text-xs uppercase tracking-wider text-amber">404 / route not found</div>
        <h1 className="mt-4 text-5xl">This page hasn't been built yet.</h1>
        <p className="mt-4 text-sm text-dim">
          Probably a stale link. Head back home and pick a trade.
        </p>
        <div className="mt-7">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-amber px-5 py-3 text-sm font-medium text-amber-foreground hover:bg-amber/90"
          >
            Go home →
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try again or head home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-md bg-amber px-4 py-2 text-sm font-medium text-amber-foreground hover:bg-amber/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-surface"
          >
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
      { title: "Clockout — Done-for-you automation for local service businesses" },
      { name: "description", content: "Flat-fee automation builds for HVAC, plumbing, electrical, roofing, and other owner-operated trade businesses in Northern Illinois and Wisconsin. You own the system. No subscription." },
      { name: "author", content: "Clockout" },
      { property: "og:title", content: "Clockout — Done-for-you automation for local service businesses" },
      { property: "og:description", content: "Flat-fee automation builds for HVAC, plumbing, electrical, roofing, and other owner-operated trade businesses in Northern Illinois and Wisconsin. You own the system. No subscription." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Clockout — Done-for-you automation for local service businesses" },
      { name: "twitter:description", content: "Flat-fee automation builds for HVAC, plumbing, electrical, roofing, and other owner-operated trade businesses in Northern Illinois and Wisconsin. You own the system. No subscription." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3a73cd9c-ca3b-4199-9457-b73286ef6538/id-preview-fa2b124f--ac552740-9e6b-48de-87eb-2fd8df51507d.lovable.app-1781576500363.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3a73cd9c-ca3b-4199-9457-b73286ef6538/id-preview-fa2b124f--ac552740-9e6b-48de-87eb-2fd8df51507d.lovable.app-1781576500363.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Clockout",
          description: "Done-for-you automation for owner-operated trade and local service businesses in Northern Illinois & Southern Wisconsin.",
          telephone: "+1-608-713-1651",
          email: "don@clockout.us",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Roscoe",
            addressRegion: "IL",
            addressCountry: "US",
          },
          areaServed: ["Roscoe, IL", "Rockford, IL", "Loves Park, IL", "Machesney Park, IL", "South Beloit, IL", "Beloit, WI", "Janesville, WI"],
          priceRange: "$497",
          url: "https://clockout.us",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
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
      <Outlet />
      <Toaster theme="light" position="top-right" />
    </QueryClientProvider>
  );
}
