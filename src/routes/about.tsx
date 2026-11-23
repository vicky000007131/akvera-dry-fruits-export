import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/dry-fruit-pages";
import { pageHead } from "@/lib/metadata";

export const Route = createFileRoute("/about")({
  head: () => pageHead('Our Story & Dry-Fruit Trading', 'Discover Akvera Universal, a Kolhapur-based dry-fruit export and international trading partner. Quality, transparency and lasting global partnerships.'),
  component: AboutPage,
});
