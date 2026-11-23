import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/public-pages";
import { pageHead } from "@/lib/metadata";

export const Route = createFileRoute("/sitemap")({
  head: () => pageHead("Sitemap", "Browse the public pages of the Akvera Universal export portfolio."),
  component: LegalRoute,
});

function LegalRoute() {
  return <LegalPage kind="sitemap" />;
}
