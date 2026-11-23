import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/export-process")({
 beforeLoad: () => { throw redirect({ to: "/quality", hash: "export-process", replace: true }); },
});
