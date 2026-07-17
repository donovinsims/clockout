import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  resolve: {
    dedupe: [
      "react",
      "react-dom",
      "@tanstack/react-router",
      "@tanstack/react-query",
      "@tanstack/react-start",
    ],
  },
  plugins: [
    tanstackStart({ server: { entry: "server" } }),
    nitro({
      preset: "vercel",
      vercel: {
        // Node entry format to prevent runtime.node crash with srvx
        entryFormat: "node",
      },
    }),
    viteReact(),
    tailwindcss(),
    viteTsConfigPaths(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes("/node_modules/react/") || id.includes("/node_modules/react-dom/"))
            return "vendor-react";
          if (
            id.includes("/node_modules/@tanstack/react-router/") ||
            id.includes("/node_modules/@tanstack/react-query/") ||
            id.includes("/node_modules/@tanstack/react-start/")
          )
            return "vendor-router";
          if (
            id.includes("/node_modules/zod/") ||
            id.includes("/node_modules/react-hook-form/") ||
            id.includes("/node_modules/sonner/") ||
            id.includes("/node_modules/tailwind-merge/") ||
            id.includes("/node_modules/class-variance-authority/")
          )
            return "vendor-utils";
          if (id.includes("/node_modules/motion/"))
            return "vendor-motion";
        },
      },
    },
  },
});
