import { createFileRoute } from "@tanstack/react-router";
import { PortalLayout } from "@/components/PortalLayout";

export const Route = createFileRoute("/officer")({
  head: () => ({ meta: [{ title: "Officer Portal — RUNSMSL" }] }),
  component: () => <PortalLayout role="officer" />,
});
