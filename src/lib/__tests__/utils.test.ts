import { describe, it, expect } from "vitest";
import { cn } from "@/lib/utils";

describe("cn() utility", () => {
  it("merges class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("handles conditional classes (falsy values are omitted)", () => {
    const showHidden = false;
    expect(cn("base", showHidden && "hidden", "visible")).toBe("base visible");
  });

  it("handles conditional classes that are truthy", () => {
    const showExtra = true;
    expect(cn("base", showExtra && "extra")).toBe("base extra");
  });

  it("resolves tailwind conflicts (last class wins)", () => {
    expect(cn("p-4", "p-2")).toBe("p-2");
  });

  it("merges tailwind classes with conflict resolution", () => {
    expect(cn("px-4 py-2", "p-3")).toBe("p-3");
  });

  it("handles empty inputs", () => {
    expect(cn()).toBe("");
  });

  it("handles array arguments", () => {
    expect(cn(["foo", "bar"])).toBe("foo bar");
  });

  it("handles object syntax", () => {
    expect(cn({ foo: true, bar: false })).toBe("foo");
  });
});
