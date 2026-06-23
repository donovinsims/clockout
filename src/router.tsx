import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const DEFAULT_PRELOAD_DELAY_MS = 500;
const DEFAULT_PENDING_MIN_MS = 300;

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPreloadDelay: DEFAULT_PRELOAD_DELAY_MS,
    defaultPreloadStaleTime: 30_000,
    defaultPendingMs: 100,
    defaultPendingMinMs: DEFAULT_PENDING_MIN_MS,
  });

  return router;
};
