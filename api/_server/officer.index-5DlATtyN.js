import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-DChuZF5m.js";
import { c as mockLoans, d as mockMembers, e as mockTransactions, f as mockContributions, g as mockOverdueLoans, h as formatCurrency } from "./mockData-DNwc5U0_.js";
import { C as Clock } from "./clock-CPU6h7xO.js";
import { F as FileText } from "./file-text-BBqyEBKq.js";
import { T as TriangleAlert } from "./triangle-alert-nZWFNcEG.js";
import { U as Users } from "./users-v4hyRj6V.js";
import { C as CircleCheckBig } from "./circle-check-big-B3In-rF_.js";
import { C as CircleX } from "./circle-x-D_pPVjNS.js";
import { D as DollarSign } from "./dollar-sign-B18MbgTF.js";
import { c as createLucideIcon } from "./router-N0v2RbpL.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  [
    "path",
    {
      d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
      key: "143wyd"
    }
  ],
  ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6", key: "1itne7" }],
  ["rect", { x: "6", y: "14", width: "12", height: "8", rx: "1", key: "1ue0tg" }]
];
const Printer = createLucideIcon("printer", __iconNode);
function OfficerDashboard() {
  const [activeTab, setActiveTab] = reactExports.useState("approvals");
  const pendingLoans = mockLoans.filter((l) => l.status === "pending");
  const activeLoans = mockLoans.filter((l) => l.status === "active");
  const [approvalDialog, setApprovalDialog] = reactExports.useState(null);
  const [depositForm, setDepositForm] = reactExports.useState({
    member_id: "",
    amount: "",
    payment_method: "cash",
    reference: ""
  });
  const [interestRate, setInterestRate] = reactExports.useState("12");
  const [rejectionReason, setRejectionReason] = reactExports.useState("");
  const [statementMemberId, setStatementMemberId] = reactExports.useState("");
  const memberOptions = mockMembers.filter((m) => m.role === "member" || m.role === "treasurer");
  const selectedMember = reactExports.useMemo(() => memberOptions.find((m) => m.id === statementMemberId), [statementMemberId, memberOptions]);
  const memberLoans = reactExports.useMemo(() => mockLoans.filter((l) => l.member_id === statementMemberId), [statementMemberId]);
  const memberTxns = reactExports.useMemo(() => mockTransactions.filter((t) => t.member_id === statementMemberId), [statementMemberId]);
  const memberContribs = reactExports.useMemo(() => mockContributions.filter((c) => c.member_id === statementMemberId), [statementMemberId]);
  const totalContributed = memberContribs.reduce((s, c) => s + c.amount, 0);
  const totalRepayments = memberTxns.filter((t) => t.type === "loan_repayment").reduce((s, t) => s + Math.abs(t.amount), 0);
  const handlePrintStatement = () => window.print();
  const stats = [{
    label: "Pending Requests",
    value: pendingLoans.length,
    icon: Clock,
    color: "text-warning bg-warning/10"
  }, {
    label: "Active Loans",
    value: activeLoans.length,
    icon: FileText,
    color: "text-primary bg-primary/10"
  }, {
    label: "Overdue EMIs",
    value: mockOverdueLoans.length,
    icon: TriangleAlert,
    color: "text-destructive bg-destructive/10"
  }, {
    label: "Total Members",
    value: mockMembers.length,
    icon: Users,
    color: "text-success bg-success/10"
  }];
  const handleApproval = () => {
    alert(`Loan ${approvalDialog?.action === "approve" ? "approved" : "rejected"} successfully!`);
    setApprovalDialog(null);
  };
  const handleDeposit = () => {
    alert("Deposit recorded successfully!");
    setDepositForm({
      member_id: "",
      amount: "",
      payment_method: "cash",
      reference: ""
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl sm:text-2xl font-heading font-bold text-foreground", children: "Loan Officer Dashboard" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Review applications, record deposits, and manage overdue loans." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3", children: stats.map(({
      label,
      value,
      icon: Icon,
      color
    }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card p-4 rounded-xl border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-9 h-9 rounded-lg flex items-center justify-center ${color}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-heading font-bold text-foreground", children: value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wider", children: label })
      ] })
    ] }) }, label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card rounded-lg border border-border p-0.5 flex flex-wrap w-full sm:w-max", children: [{
      key: "approvals",
      label: "Pending Approvals",
      count: pendingLoans.length
    }, {
      key: "deposits",
      label: "Record Deposit"
    }, {
      key: "overdue",
      label: "Overdue Loans",
      count: mockOverdueLoans.length
    }, {
      key: "statements",
      label: "Member Statements"
    }].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab(tab.key), className: `flex-1 sm:flex-none px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${activeTab === tab.key ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`, children: [
      tab.label,
      tab.count !== void 0 && tab.count > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `ml-1.5 px-1 py-0.5 rounded text-[9px] font-bold ${activeTab === tab.key ? "bg-primary-foreground/20" : "bg-warning/10 text-warning"}`, children: tab.count })
    ] }, tab.key)) }),
    activeTab === "approvals" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: pendingLoans.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl border border-border p-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-12 h-12 text-success/30 mx-auto mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-heading font-semibold text-foreground", children: "All caught up!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "No pending loan requests." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 md:hidden", children: pendingLoans.map((loan) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl border border-border p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: loan.member_name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: loan.member_email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-warning/10 text-warning border border-warning/20", children: "Pending" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-2.5 bg-secondary/30 rounded-lg mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-secondary overflow-hidden shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: loan.product.image_url, alt: loan.product.name, className: "w-full h-full object-cover" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground truncate", children: loan.product.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
              loan.purpose,
              " · ",
              loan.repayment_duration_months,
              " months"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-heading font-bold text-foreground", children: formatCurrency(loan.total_loan_amount) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setApprovalDialog({
              loan,
              action: "reject"
            }), className: "p-2 bg-card border border-border text-destructive hover:bg-destructive/10 rounded-md transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setApprovalDialog({
              loan,
              action: "approve"
            }), className: "p-2 bg-primary text-primary-foreground hover:opacity-90 rounded-md transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4" }) })
          ] })
        ] })
      ] }, loan.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card rounded-xl border border-border overflow-hidden hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-secondary/50 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "Member" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "Product" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "Purpose" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "Amount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "Duration" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-right text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: pendingLoans.map((loan) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/30 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-5 py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: loan.member_name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: loan.member_email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-sm font-medium text-foreground", children: loan.product.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-xs text-muted-foreground capitalize", children: loan.purpose }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-sm font-semibold text-foreground", children: formatCurrency(loan.total_loan_amount) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-5 py-4 text-xs text-muted-foreground", children: [
            loan.repayment_duration_months,
            " Mo"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setApprovalDialog({
              loan,
              action: "reject"
            }), className: "p-1.5 bg-card border border-border text-destructive hover:bg-destructive/10 rounded-md transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setApprovalDialog({
              loan,
              action: "approve"
            }), className: "p-1.5 bg-primary text-primary-foreground hover:opacity-90 rounded-md transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4" }) })
          ] }) })
        ] }, loan.id)) })
      ] }) })
    ] }) }),
    activeTab === "deposits" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl border border-border p-5 sm:p-6 max-w-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading font-bold text-foreground", children: "Record Member Deposit" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-5", children: "Manually record a cash or bank transfer deposit for a member." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-muted-foreground mb-1.5", children: "Select Member" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: depositForm.member_id, onChange: (e) => setDepositForm({
            ...depositForm,
            member_id: e.target.value
          }), className: "w-full px-3 py-2.5 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Choose a member..." }),
            mockMembers.filter((m) => m.role === "member").map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: m.id, children: [
              m.name,
              " — ",
              m.email
            ] }, m.id))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-muted-foreground mb-1.5", children: "Amount (₦)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", placeholder: "e.g. 50000", value: depositForm.amount, onChange: (e) => setDepositForm({
              ...depositForm,
              amount: e.target.value
            }), className: "w-full px-3 py-2.5 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-muted-foreground mb-1.5", children: "Payment Method" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: depositForm.payment_method, onChange: (e) => setDepositForm({
              ...depositForm,
              payment_method: e.target.value
            }), className: "w-full px-3 py-2.5 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "cash", children: "Cash" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "bank_transfer", children: "Bank Transfer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "pos", children: "POS" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-muted-foreground mb-1.5", children: "Reference / Receipt No (Optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "e.g. REC-0041", value: depositForm.reference, onChange: (e) => setDepositForm({
            ...depositForm,
            reference: e.target.value
          }), className: "w-full px-3 py-2.5 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleDeposit, disabled: !depositForm.member_id || !depositForm.amount || Number(depositForm.amount) <= 0, className: "w-full py-3 bg-primary text-primary-foreground rounded-lg text-sm font-bold hover:opacity-90 transition-all disabled:opacity-40", children: "Record Deposit" })
      ] })
    ] }),
    activeTab === "overdue" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: mockOverdueLoans.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl border border-border p-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-12 h-12 text-success/30 mx-auto mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-heading font-semibold text-foreground", children: "No overdue loans!" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 md:hidden", children: mockOverdueLoans.map((loan) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl border border-destructive/20 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: loan.member_name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: loan.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-0.5 rounded-full text-[10px] font-bold bg-destructive/10 text-destructive border border-destructive/20", children: [
            loan.days_overdue,
            "d overdue"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-3 pt-3 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: loan.loan_product }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-heading font-bold text-foreground", children: formatCurrency(loan.emi_amount) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            "Due: ",
            new Date(loan.due_date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short"
            })
          ] })
        ] })
      ] }, loan.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card rounded-xl border border-border overflow-hidden hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-secondary/50 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "Member" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "Product" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "EMI Amount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "Due Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "Days Overdue" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: mockOverdueLoans.map((loan) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-5 py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: loan.member_name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: loan.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-sm text-foreground", children: loan.loan_product }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-sm font-semibold text-foreground", children: formatCurrency(loan.emi_amount) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-xs text-muted-foreground", children: new Date(loan.due_date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric"
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-0.5 rounded-full text-[10px] font-bold bg-destructive/10 text-destructive border border-destructive/20", children: [
            loan.days_overdue,
            " days"
          ] }) })
        ] }, loan.id)) })
      ] }) })
    ] }) }),
    activeTab === "statements" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl border border-border p-4 sm:p-5 print:hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-5 h-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading font-bold text-foreground", children: "Generate Member Statement" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 sm:items-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-muted-foreground mb-1.5", children: "Select Member" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: statementMemberId, onChange: (e) => setStatementMemberId(e.target.value), className: "w-full px-3 py-2.5 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Choose a member..." }),
              memberOptions.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: m.id, children: [
                m.name,
                " — ",
                m.email
              ] }, m.id))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handlePrintStatement, disabled: !selectedMember, className: "flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-bold hover:opacity-90 transition-all disabled:opacity-40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-4 h-4" }),
            " Print / PDF"
          ] })
        ] })
      ] }),
      selectedMember && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "statement-print", className: "bg-card rounded-xl border border-border p-5 sm:p-8 print:border-0 print:shadow-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 pb-5 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest text-primary", children: "RUNSMSL" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg sm:text-xl font-heading font-bold text-foreground mt-1", children: "Member Statement" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
              "Generated ",
              (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric"
              })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left sm:text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: selectedMember.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: selectedMember.email }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wider mt-1", children: [
              "Joined ",
              new Date(selectedMember.joined).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric"
              })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 my-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-lg bg-success/10 border border-success/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-success font-bold uppercase tracking-wider", children: "Savings Balance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base font-heading font-bold text-foreground mt-1", children: formatCurrency(selectedMember.savings_balance) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-lg bg-warning/10 border border-warning/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-warning font-bold uppercase tracking-wider", children: "Outstanding Loans" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base font-heading font-bold text-foreground mt-1", children: formatCurrency(selectedMember.total_loan_balance) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-lg bg-primary/10 border border-primary/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-primary font-bold uppercase tracking-wider", children: "Contributions YTD" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base font-heading font-bold text-foreground mt-1", children: formatCurrency(totalContributed) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-lg bg-secondary border border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider", children: "Loan Repayments" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base font-heading font-bold text-foreground mt-1", children: formatCurrency(totalRepayments) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-heading font-semibold text-foreground mb-2", children: "Loan History" }),
          memberLoans.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic", children: "No loan history." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 pr-3 font-semibold uppercase tracking-wider text-[10px]", children: "Product" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 pr-3 font-semibold uppercase tracking-wider text-[10px]", children: "Amount" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 pr-3 font-semibold uppercase tracking-wider text-[10px]", children: "Paid" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 pr-3 font-semibold uppercase tracking-wider text-[10px]", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 font-semibold uppercase tracking-wider text-[10px]", children: "Date" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: memberLoans.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-3 text-foreground", children: l.product.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-3 text-foreground", children: formatCurrency(l.total_loan_amount) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-3 text-foreground", children: formatCurrency(l.amount_paid) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-3 capitalize", children: l.status }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-muted-foreground", children: new Date(l.created_at).toLocaleDateString() })
            ] }, l.id)) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-heading font-semibold text-foreground mb-2", children: "Recent Transactions" }),
          memberTxns.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic", children: "No transactions on file." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 pr-3 font-semibold uppercase tracking-wider text-[10px]", children: "Description" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 pr-3 font-semibold uppercase tracking-wider text-[10px]", children: "Reference" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 pr-3 font-semibold uppercase tracking-wider text-[10px]", children: "Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 text-right font-semibold uppercase tracking-wider text-[10px]", children: "Amount" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: memberTxns.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-3 text-foreground", children: t.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-3 text-muted-foreground", children: t.reference }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-3 text-muted-foreground", children: t.date }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: `py-2 text-right font-semibold ${t.amount < 0 ? "text-destructive" : "text-success"}`, children: [
                t.amount < 0 ? "-" : "+",
                formatCurrency(Math.abs(t.amount))
              ] })
            ] }, t.id)) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground italic mt-6 pt-4 border-t border-border", children: "This statement is computer generated and does not require a signature. For queries, contact the cooperative office." })
      ] })
    ] }),
    approvalDialog && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[100] flex items-center justify-center p-3 bg-foreground/40 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl border border-border w-full max-w-md shadow-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-bold text-foreground", children: approvalDialog.action === "approve" ? "Approve Loan" : "Reject Loan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
          approvalDialog.loan.member_name,
          " — ",
          formatCurrency(approvalDialog.loan.total_loan_amount)
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 space-y-4", children: approvalDialog.action === "approve" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-muted-foreground mb-1.5", children: "Interest Rate (%)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: interestRate, onChange: (e) => setInterestRate(e.target.value), className: "w-full px-3 py-2.5 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-success/10 rounded-lg p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-success font-medium", children: "This loan will be disbursed and monthly EMI deductions will begin." }) })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-muted-foreground mb-1.5", children: "Reason for Rejection" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: rejectionReason, onChange: (e) => setRejectionReason(e.target.value), placeholder: "e.g. Exceeds credit limit", className: "w-full px-3 py-2.5 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none h-20" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-3 border-t border-border flex justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setApprovalDialog(null), className: "px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary rounded-md transition-colors", children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleApproval, className: `px-4 py-2 text-sm font-bold rounded-md transition-all ${approvalDialog.action === "approve" ? "bg-primary text-primary-foreground hover:opacity-90" : "bg-destructive text-destructive-foreground hover:opacity-90"}`, children: approvalDialog.action === "approve" ? "Approve" : "Reject" })
      ] })
    ] }) })
  ] });
}
export {
  OfficerDashboard as component
};
