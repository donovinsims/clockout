import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    tanstackStart({
      // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
      // nitro/vite builds from this
      server: { entry: "server" },
    }),
    nitro({
      preset: "vercel",
      vercel: {
        // Use Node entry format instead of Vercel web handler to
        // prevent runtime.node crash with srvx (prerendering).
        entryFormat: "node",
      },
    }),
    viteReact(),
    tailwindcss(),
    tsConfigPaths(),
  ],
});
