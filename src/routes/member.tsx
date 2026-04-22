import { createFileRoute } from "@tanstack/react-router";
import { PortalLayout } from "@/components/PortalLayout";

export const Route = createFileRoute("/member")({
  head: () => ({ meta: [{ title: "Member Portal — RUNSMSL" }] }),
  component: () => <PortalLayout role="member" />,
});
