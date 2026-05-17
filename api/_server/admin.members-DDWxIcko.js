import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-DChuZF5m.js";
import { d as mockMembers, c as mockLoans, h as formatCurrency } from "./mockData-DNwc5U0_.js";
import { S as Search } from "./search-CHDhDUwJ.js";
import { F as Funnel } from "./funnel-CJFIFJ2J.js";
import { U as UserPlus } from "./user-plus-CaAr96PR.js";
import { S as SquarePen, I as Image } from "./square-pen-C7rR8TMb.js";
import { c as createLucideIcon, X } from "./router-N0v2RbpL.js";
import { M as Mail } from "./mail-BfDC7sbg.js";
import { C as Calendar } from "./calendar-BEwSBX1I.js";
import { C as CircleCheckBig } from "./circle-check-big-B3In-rF_.js";
import { P as PiggyBank } from "./piggy-bank-BBEAbR54.js";
import { C as CreditCard } from "./credit-card-DLG_JprE.js";
import { D as DollarSign } from "./dollar-sign-B18MbgTF.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
];
const Activity = createLucideIcon("activity", __iconNode$1);
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M4.929 4.929 19.07 19.071", key: "196cmz" }]
];
const Ban = createLucideIcon("ban", __iconNode);
function AdminMembers() {
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [members, setMembers] = reactExports.useState(mockMembers);
  const [selectedMember, setSelectedMember] = reactExports.useState(null);
  const [showAddUser, setShowAddUser] = reactExports.useState(false);
  const [depositAmount, setDepositAmount] = reactExports.useState("");
  const [loanPaymentAmount, setLoanPaymentAmount] = reactExports.useState("");
  const filteredMembers = members.filter((m) => m.name.toLowerCase().includes(searchTerm.toLowerCase()) || m.email.toLowerCase().includes(searchTerm.toLowerCase()));
  const handleRowClick = (member) => {
    setSelectedMember(member);
    setDepositAmount("");
    setLoanPaymentAmount("");
  };
  const handleDeposit = () => {
    const amount = Number(depositAmount);
    if (amount > 0 && selectedMember) {
      setMembers(members.map((m) => m.id === selectedMember.id ? {
        ...m,
        savings_balance: (m.savings_balance || 0) + amount
      } : m));
      setSelectedMember({
        ...selectedMember,
        savings_balance: (selectedMember.savings_balance || 0) + amount
      });
      setDepositAmount("");
    }
  };
  const handleLoanPayment = () => {
    const amount = Number(loanPaymentAmount);
    if (amount > 0 && selectedMember) {
      const newLoan = Math.max(0, (selectedMember.total_loan_balance || 0) - amount);
      setMembers(members.map((m) => m.id === selectedMember.id ? {
        ...m,
        total_loan_balance: newLoan
      } : m));
      setSelectedMember({
        ...selectedMember,
        total_loan_balance: newLoan
      });
      setLoanPaymentAmount("");
    }
  };
  const memberLoans = selectedMember ? mockLoans.filter((l) => l.member_id === selectedMember.id) : [];
  const activeLoan = memberLoans.find((l) => l.status === "active" || l.status === "pending");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl sm:text-2xl font-heading font-bold text-foreground", children: "Members" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Manage platform members and permissions." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 w-full sm:w-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[140px] sm:w-56", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Search...", className: "w-full pl-9 pr-4 py-2 text-sm bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-1.5 px-3 py-2 bg-card border border-border rounded-lg text-xs text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Filter" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setShowAddUser(true), className: "flex items-center gap-1.5 px-3 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-medium hover:opacity-90 transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Add User" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 md:hidden", children: filteredMembers.map((member) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => handleRowClick(member), className: "bg-card rounded-xl border border-border p-4 cursor-pointer hover:border-primary/30 transition-colors active:scale-[0.99]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-primary/15 text-primary font-heading font-bold text-[10px] flex items-center justify-center shrink-0", children: member.name.split(" ").map((n) => n[0]).join("").substring(0, 2) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: member.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: member.email })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 rounded-full text-[10px] font-bold uppercase border ${member.status === "active" ? "bg-success/10 text-success border-success/20" : "bg-destructive/10 text-destructive border-destructive/20"}`, children: member.status.replace("_", " ") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-3 pt-3 border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "capitalize", children: member.role }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: member.joined || "N/A" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
            e.stopPropagation();
          }, className: "p-1 text-muted-foreground hover:text-foreground transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-3.5 h-3.5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
            e.stopPropagation();
          }, className: "p-1 text-muted-foreground hover:text-destructive transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" }) })
        ] })
      ] })
    ] }, member.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card rounded-xl border border-border overflow-hidden hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left border-collapse", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-secondary/50 border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "User" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "Role" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "Joined" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-right text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: filteredMembers.map((member) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { onClick: () => handleRowClick(member), className: "hover:bg-secondary/30 transition-colors cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full bg-primary/15 text-primary font-heading font-bold text-[10px] flex items-center justify-center shrink-0", children: member.name.split(" ").map((n) => n[0]).join("").substring(0, 2) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: member.name })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3.5 text-xs text-muted-foreground", children: member.email }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3.5 text-xs text-foreground capitalize", children: member.role }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 rounded-full text-[10px] font-bold uppercase border ${member.status === "active" ? "bg-success/10 text-success border-success/20" : "bg-destructive/10 text-destructive border-destructive/20"}`, children: member.status.replace("_", " ") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3.5 text-xs text-muted-foreground", children: member.joined || "N/A" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3.5 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "p-1 text-muted-foreground hover:text-foreground transition-colors", onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-3.5 h-3.5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "p-1 text-muted-foreground hover:text-destructive transition-colors", onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" }) })
        ] }) })
      ] }, member.id)) })
    ] }) }) }),
    selectedMember && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-foreground/40 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 z-10 flex items-center justify-between px-4 sm:px-5 py-3.5 border-b border-border bg-card/90 backdrop-blur-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full bg-primary/15 text-primary font-heading font-bold text-sm flex items-center justify-center", children: selectedMember.name.split(" ").map((n) => n[0]).join("").substring(0, 2) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-bold text-foreground leading-tight", children: selectedMember.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground capitalize", children: [
              selectedMember.role,
              " Member"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedMember(null), className: "p-1.5 text-muted-foreground hover:text-foreground rounded-md hover:bg-secondary transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-secondary/50 border border-border space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-3.5 h-3.5 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: selectedMember.email })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Joined: ",
                selectedMember.joined || "N/A"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-3 border-t border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground uppercase font-bold tracking-wider", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 rounded-full text-[10px] font-bold uppercase border ${selectedMember.status === "active" ? "bg-success/10 text-success border-success/20" : "bg-destructive/10 text-destructive border-destructive/20"}`, children: selectedMember.status.replace("_", " ") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
                  const newStatus = selectedMember.status === "active" ? "suspended" : "active";
                  setMembers(members.map((m) => m.id === selectedMember.id ? {
                    ...m,
                    status: newStatus
                  } : m));
                  setSelectedMember({
                    ...selectedMember,
                    status: newStatus
                  });
                }, className: `px-2 py-1 rounded-md text-[10px] font-bold transition-colors ${selectedMember.status === "active" ? "bg-destructive/10 text-destructive hover:bg-destructive/20" : "bg-success/10 text-success hover:bg-success/20"}`, children: selectedMember.status === "active" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Ban, { className: "w-3 h-3 inline mr-1" }),
                  "Suspend"
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-3 h-3 inline mr-1" }),
                  "Activate"
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-3 border-t border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground uppercase font-bold tracking-wider", children: "Role" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: selectedMember.role, onChange: (e) => {
                const newRole = e.target.value;
                setMembers(members.map((m) => m.id === selectedMember.id ? {
                  ...m,
                  role: newRole
                } : m));
                setSelectedMember({
                  ...selectedMember,
                  role: newRole
                });
              }, className: "w-full px-2 py-1.5 bg-card border border-border rounded-md text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none capitalize", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "member", children: "Member" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "loan_officer", children: "Loan Officer" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "treasurer", children: "Treasurer" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "admin", children: "Admin" })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "Financial Overview" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-primary text-primary-foreground relative overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PiggyBank, { className: "absolute right-[-8px] bottom-[-8px] w-20 h-20 opacity-10" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 text-xs font-medium", children: "Total Savings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-heading font-bold mt-0.5", children: formatCurrency(selectedMember.savings_balance || 0) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-foreground text-background relative overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "absolute right-[-8px] bottom-[-8px] w-20 h-20 opacity-10" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-background/60 text-xs font-medium", children: "Outstanding Loan" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-heading font-bold mt-0.5 text-warning", children: formatCurrency(selectedMember.total_loan_balance || 0) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-primary font-semibold text-xs mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-3.5 h-3.5" }),
                "Deposit to Savings"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mb-2.5", children: "Add funds to this member's account." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", placeholder: "Amount", className: "flex-1 min-w-0 px-3 py-2 text-sm bg-secondary/50 border border-border rounded-md focus:outline-none focus:border-primary", value: depositAmount, onChange: (e) => setDepositAmount(e.target.value) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleDeposit, disabled: !depositAmount || Number(depositAmount) <= 0, className: "px-3 py-2 bg-primary text-primary-foreground text-xs font-medium rounded-md hover:opacity-90 transition-all disabled:opacity-40 shrink-0", children: "Deposit" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg border border-border bg-card hover:border-warning/30 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-warning font-semibold text-xs mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-3.5 h-3.5" }),
                "Pay Loan Installment"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mb-2.5", children: "Deduct from member's active loan." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", placeholder: "Amount", className: "flex-1 min-w-0 px-3 py-2 text-sm bg-secondary/50 border border-border rounded-md focus:outline-none focus:border-warning", value: loanPaymentAmount, onChange: (e) => setLoanPaymentAmount(e.target.value) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleLoanPayment, disabled: !loanPaymentAmount || Number(loanPaymentAmount) <= 0 || (selectedMember.total_loan_balance || 0) <= 0, className: "px-3 py-2 bg-warning text-warning-foreground text-xs font-medium rounded-md hover:opacity-90 transition-all disabled:opacity-40 shrink-0", children: "Pay" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 border-b border-border bg-secondary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-heading font-semibold text-foreground text-sm", children: "Current Active Loan" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4", children: activeLoan ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full sm:w-20 h-20 rounded-lg bg-secondary shrink-0 overflow-hidden flex items-center justify-center", children: activeLoan.product?.image_url ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: activeLoan.product.image_url, alt: "Product", className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-6 h-6 text-muted-foreground" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-sm", children: activeLoan.product?.name || "Unknown" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-x-5 gap-y-1 text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Total: " }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: formatCurrency(activeLoan.total_repayment_amount) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Monthly: " }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: formatCurrency(activeLoan.monthly_installment) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Paid: " }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-success", children: formatCurrency(activeLoan.amount_paid) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Progress" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-foreground", children: [
                      Math.round(activeLoan.amount_paid / activeLoan.total_repayment_amount * 100),
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-1.5 bg-secondary rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-primary rounded-full", style: {
                    width: `${activeLoan.amount_paid / activeLoan.total_repayment_amount * 100}%`
                  } }) })
                ] })
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-6 text-sm text-muted-foreground", children: "No active loans for this member." }) })
          ] })
        ] })
      ] })
    ] }) }),
    showAddUser && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-4 bg-foreground/40 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl w-full max-w-md shadow-xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 flex justify-between items-center border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-bold text-foreground text-sm", children: "Create New User" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowAddUser(false), className: "text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-3.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs text-muted-foreground mb-1", children: "Full Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "John Doe", className: "w-full bg-secondary/50 border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-primary" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs text-muted-foreground mb-1", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", placeholder: "user@run.edu.ng", className: "w-full bg-secondary/50 border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-primary" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs text-muted-foreground mb-1", children: "Role" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "w-full bg-secondary/50 border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "member", children: "Member" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "loan_officer", children: "Loan Officer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "treasurer", children: "Treasurer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "admin", children: "Admin" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-3 bg-secondary/50 border-t border-border flex justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowAddUser(false), className: "px-3 py-2 text-sm text-muted-foreground hover:bg-secondary rounded-md transition-colors", children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:opacity-90 transition-all", children: "Create User" })
      ] })
    ] }) })
  ] });
}
export {
  AdminMembers as component
};
