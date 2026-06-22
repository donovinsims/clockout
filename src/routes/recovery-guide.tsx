import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/recovery-guide")({
  beforeLoad: () => {
    throw redirect({ to: "/assessment" });
  },
  component: () => null,
});
