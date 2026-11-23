import { createFileRoute } from "@tanstack/react-router";
import { FAQPage } from "@/components/public-pages";
import { pageHead } from "@/lib/metadata";

export const Route = createFileRoute("/faq")({
  head: () => pageHead("Frequently asked questions", "Answers about Akvera Universal products, quotations, shipping, packaging, and export requirements."),
  component: FAQPage,
});
