import { createFileRoute } from "@tanstack/react-router";
import { PortalLayout } from "@/components/PortalLayout";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin Portal — RUNSMSL" }] }),
  component: () => <PortalLayout role="admin" />,
});
