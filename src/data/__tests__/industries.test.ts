import { describe, it, expect } from "vitest";
import { industries, getIndustry, type Industry } from "@/data/industries";

describe("industries data", () => {
  it("has exactly 8 entries", () => {
    expect(industries).toHaveLength(8);
  });

  it("every industry has required fields", () => {
    for (const industry of industries) {
      expect(industry.slug).toBeTruthy();
      expect(typeof industry.slug).toBe("string");
      expect(industry.name).toBeTruthy();
      expect(typeof industry.name).toBe("string");
      expect(industry.short).toBeTruthy();
      expect(typeof industry.short).toBe("string");
      expect(industry.pains).toBeInstanceOf(Array);
      expect(industry.pains.length).toBeGreaterThan(0);
      expect(industry.built).toBeInstanceOf(Array);
      expect(industry.built.length).toBeGreaterThan(0);
      expect(industry.proof).toBeInstanceOf(Array);
      expect(industry.proof.length).toBeGreaterThan(0);
    }
  });

  it("all slugs are unique", () => {
    const slugs = industries.map((i) => i.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(slugs.length);
  });

  it("getIndustry returns correct industry for valid slug", () => {
    const hvac = getIndustry("hvac");
    expect(hvac).toBeDefined();
    expect(hvac?.name).toBe("HVAC");
    expect(hvac?.slug).toBe("hvac");

    const plumbing = getIndustry("plumbing");
    expect(plumbing).toBeDefined();
    expect(plumbing?.name).toBe("Plumbing");
  });

  it("getIndustry returns undefined for unknown slug", () => {
    expect(getIndustry("nonexistent")).toBeUndefined();
    expect(getIndustry("")).toBeUndefined();
  });

  it("getIndustry is case-sensitive", () => {
    expect(getIndustry("HVAC")).toBeUndefined();
    expect(getIndustry("Hvac")).toBeUndefined();
    expect(getIndustry("hvac")).toBeDefined();
  });
});
