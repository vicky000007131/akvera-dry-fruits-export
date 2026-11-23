import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/public-pages";
import { pageHead } from "@/lib/metadata";

export const Route = createFileRoute("/privacy-policy")({
  head: () => pageHead("Privacy policy", "How this Akvera Universal portfolio demonstration handles information entered into its sample forms."),
  component: LegalRoute,
});

function LegalRoute() {
  return <LegalPage kind="privacy" />;
}
