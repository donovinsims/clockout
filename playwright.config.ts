import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  retries: 0,
  use: {
    baseURL: "http://localhost:4173",
  },
  projects: [
    {
      name: "iPhone 14",
      use: {
        ...devices["iPhone 14"],
        // Force Chromium since WebKit isn't installed in this env
        browserName: "chromium",
      },
    },
    {
      name: "iPhone 17 Pro Max",
      use: {
        viewport: { width: 462, height: 956 },
        deviceScaleFactor: 3,
        isMobile: true,
        hasTouch: true,
        userAgent:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1",
      },
    },
  ],
  outputDir: "./tests/.artifacts",
  reporter: [["list"], ["html", { open: "never" }]],
});
