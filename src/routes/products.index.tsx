import { createFileRoute } from "@tanstack/react-router";
import { ProductsPage } from "@/components/dry-fruit-pages";
import { pageHead } from "@/lib/metadata";

export const Route = createFileRoute("/products/")({
  head: () => pageHead("Premium Dry-Fruit Collection", "Explore ten premium dry fruits: almonds, cashews, pistachios, walnuts, raisins, dates, figs, apricots, prunes and hazelnuts."),
  component: ProductsPage,
});