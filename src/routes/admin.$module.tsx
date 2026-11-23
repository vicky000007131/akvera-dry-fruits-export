import { createFileRoute } from "@tanstack/react-router";
import { AdminModulePage } from "@/components/admin-pages";
import { pageHead } from "@/lib/metadata";
import { modules, moduleSlug } from "@/mock/data";

export const Route = createFileRoute("/admin/$module")({
  head: ({ params }) => pageHead(`${modules.find(m => moduleSlug(m) === params.module) || "Content"} | Demo Dashboard`, "Manage illustrative Akvera Universal content in this session-only demo."),
  component: AdminModuleRoute,
});

function AdminModuleRoute() {
  const { module } = Route.useParams();
  return <AdminModulePage module={module} />;
}
