import { createFileRoute } from "@tanstack/react-router";
import { AdminLoginPage } from "@/components/admin-pages";
import { pageHead } from "@/lib/metadata";

export const Route = createFileRoute("/admin/login")({
  head: () => pageHead("Demo administrator sign in", "Open the illustrative Akvera Universal dashboard demo."),
  component: AdminLoginPage,
});
