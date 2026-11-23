import { createFileRoute } from "@tanstack/react-router";
import { GalleryPage } from "@/components/dry-fruit-pages";
import { pageHead } from "@/lib/metadata";

export const Route = createFileRoute("/gallery")({
  head: () => pageHead('Dry-Fruit & Export Gallery', 'Explore our illustrative dry-fruit collection, careful selection, food-grade packaging and international shipping.'),
  component: GalleryPage,
});
