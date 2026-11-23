import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/public-pages";
import { pageHead } from "@/lib/metadata";

export const Route = createFileRoute("/terms")({
  head: () => pageHead("Terms and conditions", "Important terms for the Akvera Universal portfolio demonstration and illustrative sample content."),
  component: LegalRoute,
});

function LegalRoute() {
  return <LegalPage kind="terms" />;
}
