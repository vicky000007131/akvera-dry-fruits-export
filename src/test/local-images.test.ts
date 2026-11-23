import { createHash } from "node:crypto";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

describe("Portable dry-fruit photography", () => {
  const directory = join(process.cwd(), "public", "images");
  const files = readdirSync(directory).filter(name => /\.(webp|jpe?g)$/i.test(name));

  it("ships exactly 25 distinct, nonempty photos", () => {
    expect(files.length).toBe(25);
    const hashes = files.map(name => {
      const bytes = readFileSync(join(directory, name));
      expect(bytes.length).toBeGreaterThan(1000);
      expect(bytes.subarray(8, 12).toString()).toBe("WEBP");
      return createHash("sha256").update(bytes).digest("hex");
    });
    expect(new Set(hashes).size).toBe(25);
  });

  it.each([["hero-", 2], ["product-", 10], ["gallery-", 8], ["about-", 2], ["quality-", 3]] as const)("ships the requested %s image count", (prefix, count) => {
    expect(files.filter(name => name.startsWith(prefix)).length).toBe(count);
  });
});