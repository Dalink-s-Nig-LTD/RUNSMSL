import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-DChuZF5m.js";
import { c as createLucideIcon, u as useNavigate } from "./router-N0v2RbpL.js";
import { l as calculateEMI, i as mockSettings, h as formatCurrency } from "./mockData-DNwc5U0_.js";
import { A as ArrowLeft } from "./arrow-left-NSep4jdH.js";
import { C as Check } from "./check-CGvl6JLG.js";
import { A as ArrowRight } from "./arrow-right-iYsqtKcg.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }],
  ["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }]
];
const Calculator = createLucideIcon("calculator", __iconNode);
const PURPOSES = [{
  value: "emergency",
  label: "Emergency"
}, {
  value: "school_fees",
  label: "School Fees"
}, {
  value: "business",
  label: "Business"
}, {
  value: "medical",
  label: "Medical"
}, {
  value: "housing",
  label: "Housing"
}, {
  value: "other",
  label: "Other"
}];
function LoanApplication() {
  const navigate = useNavigate();
  const [form, setForm] = reactExports.useState({
    amount: "",
    purpose: "",
    repayment_months: 6,
    description: ""
  });
  const amount = Number(form.amount) || 0;
  const emi = amount > 0 ? calculateEMI(amount, mockSettings.loan_interest_rate, form.repayment_months) : 0;
  const totalRepayment = emi * form.repayment_months;
  const totalInterest = totalRepayment - amount;
  const canSubmit = amount >= 1e4 && form.purpose;
  const handleSubmit = () => {
    alert("Loan application submitted!");
    navigate({
      to: "/member/loans"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => navigate({
      to: "/member"
    }), className: "flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 mr-1.5" }),
      "Back to Dashboard"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl sm:text-2xl font-heading font-bold text-foreground", children: "Apply for a Loan" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Complete the form below to submit your loan application." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl border border-border p-5 sm:p-6 space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading font-bold text-foreground", children: "Loan Details" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-muted-foreground mb-1.5", children: "Loan Amount (₦)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", placeholder: "e.g. 500000", value: form.amount, onChange: (e) => setForm({
            ...form,
            amount: e.target.value
          }), className: "w-full px-3 py-2.5 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-muted-foreground mb-1.5", children: "Purpose" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: form.purpose, onChange: (e) => setForm({
            ...form,
            purpose: e.target.value
          }), className: "w-full px-3 py-2.5 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select purpose..." }),
            PURPOSES.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p.value, children: p.label }, p.value))
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-muted-foreground mb-1.5", children: "Repayment Period" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: [3, 6, 9, 12].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setForm({
          ...form,
          repayment_months: m
        }), className: `flex-1 py-2.5 rounded-lg text-sm font-medium transition-colors ${form.repayment_months === m ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"}`, children: [
          m,
          " Mo"
        ] }, m)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-muted-foreground mb-1.5", children: "Additional Details (Optional)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { placeholder: "Describe why you need this loan...", value: form.description, onChange: (e) => setForm({
          ...form,
          description: e.target.value
        }), className: "w-full px-3 py-2.5 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none h-20" })
      ] }),
      amount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/50 rounded-xl p-4 border border-border space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-bold text-foreground uppercase tracking-wider", children: "Repayment Simulator" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-3 rounded-lg border border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Principal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-heading font-bold text-foreground", children: formatCurrency(amount) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-3 rounded-lg border border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Interest" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-heading font-bold text-warning", children: formatCurrency(totalInterest) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-3 rounded-lg border border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-heading font-bold text-foreground", children: formatCurrency(totalRepayment) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary/10 p-3 rounded-lg border border-primary/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-primary font-medium", children: "Monthly EMI" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-heading font-bold text-primary", children: formatCurrency(emi) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { disabled: !canSubmit, onClick: handleSubmit, className: "flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-bold hover:opacity-90 transition-all disabled:opacity-40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4" }),
        " Submit Application ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] }) })
    ] })
  ] });
}
export {
  LoanApplication as component
};
