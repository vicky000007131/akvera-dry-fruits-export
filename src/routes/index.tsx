import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/dry-fruit-pages";
import { pageHead } from "@/lib/metadata";

export const Route = createFileRoute("/")({
 head: () => pageHead("Premium Dry Fruits & Global Trade", "Akvera Universal connects international buyers with premium almonds, cashews, pistachios and dried fruits. Thoughtful sourcing, careful packing and lasting partnerships."),
 component: HomePage,
});
