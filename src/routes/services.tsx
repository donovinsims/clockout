import { createFileRoute, redirect } from "@tanstack/react-router";

// Hub page removed. /services redirects to the first industry landing page.
export const Route = createFileRoute("/services")({
  beforeLoad: () => {
    throw redirect({ to: "/services/$slug", params: { slug: "hvac" } });
  },
  component: () => null,
});
