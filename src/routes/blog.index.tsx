import { createFileRoute } from "@tanstack/react-router";
import { BlogPage } from "@/components/public-pages";
import { pageHead } from "@/lib/metadata";

export const Route = createFileRoute("/blog/")({
  head: () => pageHead("Dry-Fruit Export Insights", "Practical perspectives on dry-fruit sourcing, food-grade packaging, and global trade."),
  component: BlogPage,
});