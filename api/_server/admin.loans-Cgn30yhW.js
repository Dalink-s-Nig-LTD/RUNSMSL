import { U as jsxRuntimeExports } from "./worker-entry-DChuZF5m.js";
import { c as mockLoans, h as formatCurrency } from "./mockData-DNwc5U0_.js";
import { C as CircleCheckBig } from "./circle-check-big-B3In-rF_.js";
import { C as Clock } from "./clock-CPU6h7xO.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-N0v2RbpL.js";
function AdminLoans() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl sm:text-2xl font-heading font-bold text-foreground", children: "Loan Requests" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Review and manage member loan applications." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card rounded-xl border border-border overflow-hidden divide-y divide-border", children: mockLoans.map((loan) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 hover:bg-secondary/30 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-secondary overflow-hidden shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: loan.product.image_url, alt: "", className: "w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: loan.member_name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: loan.product.name })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: formatCurrency(loan.total_loan_amount) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-[10px] font-bold uppercase ${loan.status === "pending" ? "text-warning" : loan.status === "active" ? "text-primary" : "text-success"}`, children: [
          loan.status === "cleared" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-3 h-3 inline mr-0.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 inline mr-0.5" }),
          loan.status
        ] })
      ] })
    ] }, loan.id)) })
  ] });
}
export {
  AdminLoans as component
};
