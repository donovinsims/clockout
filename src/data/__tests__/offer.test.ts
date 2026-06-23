import { describe, it, expect } from "vitest";
import { offer, includes, GUARANTEE } from "@/data/offer";

describe("offer data", () => {
  describe("pricing", () => {
    it("betaPrice is a number", () => {
      expect(typeof offer.betaPrice).toBe("number");
    });

    it("standardPrice is a number", () => {
      expect(typeof offer.standardPrice).toBe("number");
    });

    it("betaPrice is less than standardPrice", () => {
      expect(offer.betaPrice).toBeLessThan(offer.standardPrice);
    });
  });

  describe("spots", () => {
    it("spotsTotal is a number", () => {
      expect(typeof offer.spotsTotal).toBe("number");
    });

    it("spotsRemaining is a number", () => {
      expect(typeof offer.spotsRemaining).toBe("number");
    });

    it("spotsRemaining does not exceed spotsTotal", () => {
      expect(offer.spotsRemaining).toBeLessThanOrEqual(offer.spotsTotal);
    });
  });

  describe("services (includes list)", () => {
    it("is a non-empty array", () => {
      expect(Array.isArray(includes)).toBe(true);
      expect(includes.length).toBeGreaterThan(0);
    });

    it("each item is a non-empty string", () => {
      for (const item of includes) {
        expect(typeof item).toBe("string");
        expect(item.length).toBeGreaterThan(0);
      }
    });

    it("contains expected key services", () => {
      expect(includes).toEqual(
        expect.arrayContaining([
          expect.stringContaining("workflow"),
          expect.stringContaining("automation"),
        ]),
      );
    });
  });

  describe("GUARANTEE", () => {
    it("is a non-empty string", () => {
      expect(typeof GUARANTEE).toBe("string");
      expect(GUARANTEE.length).toBeGreaterThan(0);
    });

    it("mentions the 10-Hour Guarantee", () => {
      expect(GUARANTEE).toContain("10-Hour Guarantee");
    });
  });

  describe("offer metadata", () => {
    it("buildDays is a number", () => {
      expect(typeof offer.buildDays).toBe("number");
    });

    it("ownership is a non-empty string", () => {
      expect(typeof offer.ownership).toBe("string");
      expect(offer.ownership.length).toBeGreaterThan(0);
    });

    it("has a primary CTA", () => {
      expect(offer.ctaPrimary).toBeTruthy();
    });

    it("has an assessment path", () => {
      expect(offer.assessmentPath).toBe("/assessment");
    });
  });
});
