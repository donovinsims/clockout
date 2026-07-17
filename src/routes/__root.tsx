import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode, useEffect } from "react";
import { Toaster } from "sonner";

import { PHONE_SCHEMA } from "@/data/phone";
import { CTA, CTAButton } from "@/components/site/CTA";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="mono-num text-xs uppercase tracking-wider text-amber">
          404 / route not found
        </div>
        <h1 className="mt-4 text-5xl">This page hasn't been built yet.</h1>
        <p className="mt-4 text-sm text-dim">
          Probably a stale link. Head back home and pick a trade.
        </p>
        <div className="mt-7">
          <CTA to="/">Go home →</CTA>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

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
          <CTAButton
            onClick={() => {
              router.invalidate();
              reset();
            }}
            size="sm"
          >
            Try again
          </CTAButton>
          <CTA href="/" variant="outline" size="sm">
            Go home
          </CTA>
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
      {
        name: "description",
        content:
          "Flat-fee automation builds for HVAC, plumbing, electrical, roofing, and other owner-operated trade businesses in Northern Illinois and Wisconsin. No contracts. Cancel anytime.",
      },
      { name: "author", content: "Clockout" },
      {
        property: "og:title",
        content: "Clockout — Done-for-you automation for local service businesses",
      },
      {
        property: "og:description",
        content:
          "Flat-fee automation builds for HVAC, plumbing, electrical, roofing, and other owner-operated trade businesses in Northern Illinois and Wisconsin. No contracts. Cancel anytime.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Clockout — Done-for-you automation for local service businesses",
      },
      {
        name: "twitter:description",
        content:
          "Flat-fee automation builds for HVAC, plumbing, electrical, roofing, and other owner-operated trade businesses in Northern Illinois and Wisconsin. No contracts. Cancel anytime.",
      },
      { name: "theme-color", content: "#ffffff" },
      { property: "og:image", content: "https://clockout.us/og.png" },
      { name: "twitter:image", content: "https://clockout.us/og.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Clockout",
          description:
            "Done-for-you automation for owner-operated trade and local service businesses in Northern Illinois & Southern Wisconsin.",
          telephone: PHONE_SCHEMA,
          email: "contact@clockout.us",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Roscoe",
            addressRegion: "IL",
            addressCountry: "US",
          },
          areaServed: [
            "Roscoe, IL",
            "Rockford, IL",
            "Loves Park, IL",
            "Machesney Park, IL",
            "South Beloit, IL",
            "Beloit, WI",
            "Janesville, WI",
          ],
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
  const fontHref =
    "https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap";

  return (
    <html lang="en">
      <head>
        <HeadContent />
        {/* Plausible Analytics — privacy-friendly pageview tracking */}
        <script
          defer
          data-domain="clockout.us"
          src="https://plausible.io/js/script.js"
        />
        {/* Microsoft Clarity — session recordings and heatmaps. Replace CLARITY_PROJECT_ID with your actual ID from https://clarity.microsoft.com */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","CLARITY_PROJECT_ID");`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document;var l=d.createElement('link');l.rel='stylesheet';l.href='${fontHref}';l.media='print';l.onload=function(){this.media='all'};d.head.appendChild(l)})();`,
          }}
        />
        <noscript>
          <link rel="stylesheet" href={fontHref} />
        </noscript>
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function useServiceWorker() {
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // SW registration failure is non-critical; swallow silently
      });
    }
  }, []);
}

function useWebVitalsLogging() {
  useEffect(() => {
    if (typeof window === "undefined" || typeof PerformanceObserver === "undefined") return;

    let lcpValue = 0;
    let clsValue = 0;

    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) lcpValue = lastEntry.startTime;
    });

    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const e = entry as PerformanceEntry & { value?: number; hadRecentInput?: boolean };
        if (!e.hadRecentInput) clsValue += e.value ?? 0;
      }
    });

    try {
      lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });
      clsObserver.observe({ type: "layout-shift", buffered: true });
    } catch {
      return;
    }

    const report = () => {
      if (lcpValue > 0) {
        console.info("[vitals]", { name: "LCP", value: Math.round(lcpValue) });
      }
      console.info("[vitals]", { name: "CLS", value: parseFloat(clsValue.toFixed(3)) });
    };

    const onHide = () => {
      if (document.visibilityState === "hidden") report();
    };

    document.addEventListener("visibilitychange", onHide);
    return () => {
      document.removeEventListener("visibilitychange", onHide);
      lcpObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useServiceWorker();
  useWebVitalsLogging();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <Toaster theme="light" position="top-right" />
    </QueryClientProvider>
  );
}
