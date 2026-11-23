import { createFileRoute } from "@tanstack/react-router";
import { CountriesPage } from "@/components/public-pages";
import { pageHead } from "@/lib/metadata";

export const Route = createFileRoute("/countries")({
  head: () => pageHead("Global Dry-Fruit Markets", "Explore illustrative destination profiles for dry-fruit importers and wholesale buyers."),
  component: CountriesPage,
});
