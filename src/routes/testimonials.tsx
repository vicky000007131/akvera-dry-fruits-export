import { createFileRoute } from "@tanstack/react-router";
import { TestimonialsPage } from "@/components/public-pages";
import { pageHead } from "@/lib/metadata";

export const Route = createFileRoute("/testimonials")({
  head: () => pageHead("Client stories", "Illustrative stories about trusted international partnerships with Akvera Universal."),
  component: TestimonialsPage,
});
