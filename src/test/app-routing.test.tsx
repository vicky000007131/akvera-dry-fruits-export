import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { products } from "@/mock/products";
import { faqList } from "@/mock/faq";
import { blogs } from "@/mock/blogs";
import { countryList } from "@/mock/countries";
import { modules, processSteps } from "@/mock/data";
import { galleryItems } from "@/mock/gallery";

describe("App routing", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

  const routesToTest = [
    "/",
    "/about",
    "/products",
    "/products/almonds",
    "/industries",
    "/export-process",
    "/quality",
    "/gallery",
    "/blog",
    "/blog/export-guide",
    "/testimonials",
    "/faq",
    "/contact",
    "/countries",
    "/privacy-policy",
    "/terms",
    "/sitemap",
    "/admin",
    "/admin/login",
    "/admin/products",
    "/admin/quote-requests",
  ];

  routesToTest.forEach((route) => {
    it(`matches a page for ${route} without root fallback`, () => {
      const matches = router.matchRoutes(route);
      expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    });
  });
});

describe("Akvera Universal Mock Data Integrity", () => {
  it("provides exactly the ten requested dry-fruit varieties with full specifications", () => {
    expect(products.map(p => p.id)).toEqual(["almonds", "cashews", "pistachios", "walnuts", "raisins", "dates", "figs", "apricots", "prunes", "hazelnuts"]);
    products.forEach((p) => {
      expect(p.id).toBeDefined();
      expect(p.name).toBeDefined();
      expect(p.packaging).toBeDefined();
      expect(p.specifications.length).toBeGreaterThan(0);
      expect(p.imageUrl).toBe(`/images/product-${p.id}.webp`);
    });
  });

  it("provides seven export stages on the unified Quality experience", () => {
    expect(processSteps.length).toBe(7);
    expect(processSteps.at(0)?.[0]).toBe("Sourcing");
    expect(processSteps.at(-1)?.[0]).toBe("Delivery");
  });

  it("provides eight distinct gallery images", () => {
    expect(galleryItems.length).toBe(8);
    expect(new Set(galleryItems.map(g => g.imageUrl)).size).toBe(8);
  });

  it("provides exactly 15 comprehensive FAQs", () => {
    expect(faqList.length).toBe(15);
  });

  it("provides 15 destination country profiles", () => {
    expect(countryList.length).toBe(15);
    const countryNames = countryList.map((c) => c.name);
    expect(countryNames).toContain("United Arab Emirates");
    expect(countryNames).toContain("Saudi Arabia");
    expect(countryNames).toContain("United Kingdom");
    expect(countryNames).toContain("USA");
  });

  it("covers all 5 requested blog categories", () => {
    const categories = blogs.map((b) => b.category);
    expect(categories).toContain("Export Guide");
    expect(categories).toContain("Packaging Tips");
    expect(categories).toContain("Global Trade");
    expect(categories).toContain("Dry Fruits Market");
    expect(categories).toContain("Business News");
  });

  it("covers all 28 admin dashboard modules", () => {
    expect(modules.length).toBe(28);
    expect(modules).toContain("Products");
    expect(modules).toContain("Categories");
    expect(modules).toContain("Countries");
    expect(modules).toContain("Quote Requests");
    expect(modules).toContain("Site Settings");
  });
});
