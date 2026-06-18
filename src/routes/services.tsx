import { createFileRoute, redirect, Outlet } from "@tanstack/react-router";

// Hub page removed. /services redirects to the first industry landing page.
export const Route = createFileRoute("/services")({
  beforeLoad: ({ location }) => {
    // Guard: only redirect when pathname is exactly "/services"
    // (not a child route like /services/hvac — those match their own route)
    // This prevents redirect loops if the target route is misconfigured.
    if (location.pathname === "/services") {
      throw redirect({ to: "/services/$slug", params: { slug: "hvac" } });
    }
  },
  component: () => <Outlet />,
});
