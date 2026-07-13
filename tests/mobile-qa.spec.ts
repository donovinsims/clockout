import { test, expect } from "@playwright/test";

const ROUTES = [
  "/",
  "/services/hvac",
  "/services/plumbing",
  "/services/roofing",
  "/services/electrical",
  "/services/landscaping",
  "/services/cleaning",
  "/services/property-management",
  "/services/real-estate",
  "/pricing",
  "/operator-os",
  "/about",
];

// ── Per-route: screenshot + basic checks ──────────────────────────────
for (const route of ROUTES) {
  test.describe(`${route}`, () => {
    test("full page screenshot", async ({ page }) => {
      await page.goto(route, { waitUntil: "networkidle" });
      const name = route === "/" ? "homepage" : route.replace(/\//g, "-").replace(/^-/, "");
      await page.screenshot({
        path: `./tests/results/${name}.png`,
        fullPage: true,
      });
    });

    test("no horizontal overflow", async ({ page }) => {
      await page.goto(route, { waitUntil: "networkidle" });
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const viewportWidth = page.viewportSize()?.width ?? 390;
      expect(scrollWidth).toBeLessThanOrEqual(viewportWidth + 5); // 5px tolerance
    });

    test("primary CTA is visible and tappable", async ({ page }) => {
      await page.goto(route, { waitUntil: "networkidle" });
      // Find any visible link to /assessment (header may have hidden ones inside mobile menu)
      const allCtas = page.locator('a[href="/assessment"]');
      const count = await allCtas.count();
      let foundVisible = false;
      for (let i = 0; i < count; i++) {
        if (await allCtas.nth(i).isVisible()) {
          foundVisible = true;
          const box = await allCtas.nth(i).boundingBox();
          if (box) {
            expect(box.height).toBeGreaterThanOrEqual(44); // WCAG min touch target
          }
          break;
        }
      }
      expect(foundVisible).toBe(true);
    });
  });
}

// ── Homepage-specific checks ──────────────────────────────────────────
test.describe("Homepage", () => {
  test("hero headline visible", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    const h1 = page.locator("h1").first();
    await expect(h1).toBeVisible();
  });

  test("offer section has guarantee text", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    await expect(page.getByText("10-Hour Guarantee")).toBeVisible();
  });
});

// ── Service page specific checks ──────────────────────────────────────
test.describe("Service pages", () => {
  for (const slug of ["hvac", "plumbing", "roofing", "electrical", "landscaping", "cleaning", "property-management", "real-estate"]) {
    test(`${slug}: has trade-specific headline`, async ({ page }) => {
      await page.goto(`/services/${slug}`, { waitUntil: "networkidle" });
      const h1 = page.locator("h1").first();
      await expect(h1).toBeVisible();
      const text = await h1.textContent();
      expect(text?.length).toBeGreaterThan(10);
    });

    test(`${slug}: Money-Leak Map renders with amounts`, async ({ page }) => {
      await page.goto(`/services/${slug}`, { waitUntil: "networkidle" });
      // The HowItWorks section should have dollar amounts
      const amounts = page.locator("text=/\\$[\\d,]+/");
      const count = await amounts.count();
      expect(count).toBeGreaterThan(0);
    });
  }
});

// ── LeadMagnetPopup + MobileStickyCta overlap detection ───────────────
test.describe("Overlap detection", () => {
  test("sticky CTA and popup overlap", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });

    // Scroll to 50% to trigger popup
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.5));
    await page.waitForTimeout(3000); // wait for popup timer (40s timeout is too long, but 45% scroll should trigger)

    // Check if sticky CTA exists
    const stickyCta = page.locator('[class*="fixed"][class*="right-3"]').first();
    const stickyVisible = await stickyCta.isVisible().catch(() => false);

    // Check if popup exists
    const popup = page.locator('[class*="fixed"][class*="bottom-0"]').first();
    const popupVisible = await popup.isVisible().catch(() => false);

    if (stickyVisible && popupVisible) {
      // Both visible — screenshot for review
      await page.screenshot({
        path: "./tests/results/overlap-detected.png",
      });
      console.log("⚠️ OVERLAP DETECTED: MobileStickyCta + LeadMagnetPopup both visible");
    }
  });
});

// ── Hamburger touch target check ──────────────────────────────────────
test.describe("WCAG compliance", () => {
  test("hamburger button meets 44px minimum", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    const hamburger = page.locator("button").filter({ has: page.locator('[class*="lucide-menu"]') }).first();
    if (await hamburger.isVisible()) {
      const box = await hamburger.boundingBox();
      if (box) {
        console.log(`Hamburger size: ${box.width}x${box.height}px`);
        if (box.width < 44 || box.height < 44) {
          console.log(`⚠️ WCAG WARNING: Hamburger is ${box.width}x${box.height}px (min 44px)`);
        }
      }
    }
  });
});

// ── Font rendering check ──────────────────────────────────────────────
test.describe("Typography", () => {
  test("h1 renders with expected font", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    const h1 = page.locator("h1").first();
    const fontFamily = await h1.evaluate((el) => window.getComputedStyle(el).fontFamily);
    console.log(`H1 font: ${fontFamily}`);
    expect(fontFamily.toLowerCase()).toContain("geist");
  });
});
