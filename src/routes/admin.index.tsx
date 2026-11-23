import { createFileRoute } from "@tanstack/react-router";
import { AdminOverview } from "@/components/admin-pages";
import { pageHead } from "@/lib/metadata";

export const Route = createFileRoute("/admin/")({
  head: () => pageHead("Dashboard", "Illustrative Akvera Universal dashboard overview and sample activity."),
  component: AdminOverview,
});
