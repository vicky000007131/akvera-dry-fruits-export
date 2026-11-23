import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/industries")({
 beforeLoad: () => { throw redirect({ to: "/quality", hash: "industries", replace: true }); },
});
