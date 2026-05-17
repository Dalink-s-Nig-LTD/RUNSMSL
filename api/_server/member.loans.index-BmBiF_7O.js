import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-DChuZF5m.js";
import { u as useNavigate } from "./router-N0v2RbpL.js";
import { c as mockLoans, h as formatCurrency } from "./mockData-DNwc5U0_.js";
import { C as CircleAlert } from "./circle-alert-Ty-5ZP8f.js";
import { C as CircleCheckBig } from "./circle-check-big-B3In-rF_.js";
import { C as Clock } from "./clock-CPU6h7xO.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function MyLoans() {
  const [filter, setFilter] = reactExports.useState("all");
  const navigate = useNavigate();
  const filteredLoans = filter === "all" ? mockLoans : mockLoans.filter((l) => l.status === filter);
  const getStatusBadge = (status) => {
    const styles = {
      active: "bg-primary/10 text-primary border-primary/20",
      cleared: "bg-success/10 text-success border-success/20",
      pending: "bg-warning/10 text-warning border-warning/20"
    };
    const icons = {
      active: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 mr-1" }),
      cleared: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-3 h-3 mr-1" }),
      pending: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-3 h-3 mr-1" })
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${styles[status] || "bg-secondary text-muted-foreground border-border"}`, children: [
      icons[status],
      status
    ] });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl sm:text-2xl font-heading font-bold text-foreground", children: "My Loans" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Track your active loans and repayment history." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card rounded-lg border border-border p-0.5 flex w-full sm:w-auto", children: ["all", "active", "pending", "cleared"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(f), className: `flex-1 sm:flex-none px-3 py-1.5 rounded-md text-xs font-medium capitalize transition-colors ${filter === f ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`, children: f }, f)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: filteredLoans.map((loan) => {
      const progress = loan.status === "cleared" ? 100 : loan.status === "pending" ? 0 : loan.amount_paid / loan.total_repayment_amount * 100;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => navigate({
        to: "/member/loans/$id",
        params: {
          id: loan.id
        }
      }), className: "bg-card rounded-xl border border-border p-4 cursor-pointer hover:border-primary/30 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-secondary overflow-hidden shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: loan.product.image_url, alt: loan.product.name, className: "w-full h-full object-cover" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground line-clamp-1", children: loan.product.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: new Date(loan.created_at).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric"
              }) })
            ] })
          ] }),
          getStatusBadge(loan.status)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-heading font-bold text-foreground", children: formatCurrency(loan.total_loan_amount) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
              formatCurrency(loan.monthly_installment),
              "/mo"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-primary", children: "Details →" })
        ] }),
        loan.status !== "pending" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-muted-foreground", children: [
              "Paid: ",
              formatCurrency(loan.amount_paid)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              Math.round(progress),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-1.5 bg-secondary rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full rounded-full ${progress === 100 ? "bg-success" : "bg-primary"}`, style: {
            width: `${progress}%`
          } }) })
        ] })
      ] }, loan.id);
    }) })
  ] });
}
export {
  MyLoans as component
};
