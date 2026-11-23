import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/dry-fruit-pages";
import { pageHead } from "@/lib/metadata";

export const Route = createFileRoute("/contact")({
  head: () => pageHead('Contact Our Dry-Fruit Export Desk', 'Contact Akvera Universal in Kolhapur, India for premium dry-fruit sourcing, wholesale enquiries and international trade.'),
  component: ContactPage,
});
