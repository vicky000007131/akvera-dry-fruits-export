import { createFileRoute } from "@tanstack/react-router";
import { QualityPage } from "@/components/dry-fruit-pages";
import { pageHead } from "@/lib/metadata";

export const Route = createFileRoute("/quality")({
  head: () => pageHead('Dry-Fruit Quality, Industries & Export Process', 'Explore our dry-fruit quality approach, the industries we serve and the seven stages of our export process.'),
  component: QualityPage,
});
