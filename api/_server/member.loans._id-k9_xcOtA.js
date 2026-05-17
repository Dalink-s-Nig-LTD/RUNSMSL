import { U as jsxRuntimeExports } from "./worker-entry-DChuZF5m.js";
import { h as Route, u as useNavigate } from "./router-N0v2RbpL.js";
import { c as mockLoans, h as formatCurrency } from "./mockData-DNwc5U0_.js";
import { A as ArrowLeft } from "./arrow-left-NSep4jdH.js";
import { C as CircleCheckBig } from "./circle-check-big-B3In-rF_.js";
import { C as Clock } from "./clock-CPU6h7xO.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function LoanDetail() {
  const {
    id
  } = Route.useParams();
  const navigate = useNavigate();
  const loan = mockLoans.find((l) => l.id === id);
  if (!loan) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-muted-foreground", children: "Loan not found" });
  const progress = loan.status === "cleared" ? 100 : loan.status === "pending" ? 0 : loan.amount_paid / loan.total_repayment_amount * 100;
  const installments = Array.from({
    length: loan.repayment_duration_months
  }, (_, i) => {
    const date = new Date(loan.created_at);
    date.setMonth(date.getMonth() + i + 1);
    let remaining = loan.amount_paid - i * loan.monthly_installment;
    const status = loan.status === "pending" ? "pending" : remaining >= loan.monthly_installment ? "paid" : remaining > 0 ? "partial" : "due";
    return {
      id: i + 1,
      month: i + 1,
      date,
      amount: loan.monthly_installment,
      status
    };
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto space-y-5 sm:space-y-6 pb-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => navigate({
      to: "/member/loans"
    }), className: "flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 mr-1.5" }),
      "Back"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl p-4 sm:p-5 border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 sm:w-14 sm:h-14 bg-secondary rounded-lg p-1.5 mb-4 border border-border flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: loan.product.image_url, alt: loan.product.name, className: "w-full h-full object-contain" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading font-bold text-foreground text-base sm:text-lg leading-tight mb-1", children: loan.product.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-4", children: [
          "Ref: #",
          loan.id.toUpperCase()
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between pb-3 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Duration" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-foreground", children: [
              loan.repayment_duration_months,
              " Months"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Monthly" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: formatCurrency(loan.monthly_installment) })
          ] })
        ] }),
        loan.status !== "pending" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 pt-4 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs mb-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-muted-foreground", children: "Progress" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-foreground", children: [
              Math.round(progress),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-2 bg-secondary rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full rounded-full ${progress === 100 ? "bg-success" : "bg-primary"}`, style: {
            width: `${progress}%`
          } }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 bg-card rounded-xl border border-border overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 sm:p-5 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading font-bold text-foreground", children: "Repayment Schedule" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 sm:p-4 space-y-2", children: installments.map((inst) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center p-2.5 sm:p-3 rounded-lg border ${inst.status === "paid" ? "bg-success/5 border-success/15" : inst.status === "pending" ? "bg-card border-border opacity-50" : inst.status === "partial" ? "bg-primary/5 border-primary/15" : "bg-card border-border"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${inst.status === "paid" ? "bg-success/15 text-success" : "bg-secondary text-muted-foreground"}`, children: inst.status === "paid" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-3.5 h-3.5" }) : inst.month }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-2.5 sm:ml-3 flex-1 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm font-medium text-foreground", children: inst.date.toLocaleDateString("en-US", {
            month: "short",
            year: "numeric"
          }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm font-semibold text-foreground", children: formatCurrency(inst.amount) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold uppercase tracking-wider text-muted-foreground", children: inst.status })
          ] })
        ] }, inst.id)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "hidden" })
  ] });
}
export {
  LoanDetail as component
};
