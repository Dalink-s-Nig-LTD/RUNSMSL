import { U as jsxRuntimeExports } from "./worker-entry-DChuZF5m.js";
import { r as rucsLogo } from "./rucs-logo-BbO5OAK6.js";
import { C as Clock } from "./clock-CPU6h7xO.js";
import { L as LogOut } from "./log-out-BFEAri3b.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-N0v2RbpL.js";
function PendingApprovalPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center bg-background p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md w-full text-center space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: rucsLogo, alt: "RUNSMSL — Run Staff Cooperative Multipurpose Society Limited", className: "w-16 h-16 object-contain" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl border border-border p-8 space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 mx-auto rounded-full bg-warning/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-8 h-8 text-warning" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-heading font-bold text-foreground", children: "Account Pending Approval" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2 leading-relaxed", children: "Your cooperative account has been created successfully. An administrator will review and approve your membership shortly." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/50 rounded-lg p-4 text-left space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground", children: "What happens next?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-xs text-muted-foreground space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" }),
            "An admin will verify your @run.edu.ng email"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" }),
            "Your role will be assigned (member by default)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" }),
            "You'll receive an email when approved"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/login", className: "w-full inline-flex items-center justify-center gap-2 py-3 bg-secondary text-foreground rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-4 h-4" }),
        "Back to Login"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Need help? Contact the cooperative office." })
  ] }) });
}
export {
  PendingApprovalPage as component
};
