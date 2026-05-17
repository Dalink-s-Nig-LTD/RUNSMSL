import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-DChuZF5m.js";
import { j as mockApplications, h as formatCurrency } from "./mockData-DNwc5U0_.js";
import { U as UserPlus } from "./user-plus-CaAr96PR.js";
import { S as Search } from "./search-CHDhDUwJ.js";
import { C as CircleCheckBig } from "./circle-check-big-B3In-rF_.js";
import { M as Mail } from "./mail-BfDC7sbg.js";
import { P as Phone } from "./phone-B6vFkULj.js";
import { c as createLucideIcon } from "./router-N0v2RbpL.js";
import { C as CircleX } from "./circle-x-D_pPVjNS.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "M10 12h4", key: "a56b0p" }],
  ["path", { d: "M10 8h4", key: "1sr2af" }],
  ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
  [
    "path",
    {
      d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
      key: "secmi2"
    }
  ],
  ["path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16", key: "16ra0t" }]
];
const Building2 = createLucideIcon("building-2", __iconNode);
function AdminApplications() {
  const [apps, setApps] = reactExports.useState(mockApplications);
  const [filter, setFilter] = reactExports.useState("pending");
  const [search, setSearch] = reactExports.useState("");
  const [selected, setSelected] = reactExports.useState(null);
  const setStatus = (id, status) => {
    setApps((prev) => prev.map((a) => a.id === id ? {
      ...a,
      status
    } : a));
    setSelected(null);
  };
  const filtered = apps.filter((a) => {
    if (filter !== "all" && a.status !== filter) return false;
    const q = search.toLowerCase();
    return !q || a.name.toLowerCase().includes(q) || a.email.toLowerCase().includes(q) || a.staff_id.toLowerCase().includes(q);
  });
  const pendingCount = apps.filter((a) => a.status === "pending").length;
  const badgeClass = (s) => s === "approved" ? "bg-success/10 text-success border border-success/20" : s === "rejected" ? "bg-destructive/10 text-destructive border border-destructive/20" : "bg-warning/10 text-warning border border-warning/20";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row justify-between gap-3 sm:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-xl sm:text-2xl font-heading font-bold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "w-6 h-6 text-primary" }),
          "Membership Applications"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Review and approve new member sign-ups." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-1.5 bg-warning/10 text-warning rounded-full text-xs font-bold border border-warning/20 self-start", children: [
        pendingCount,
        " pending"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: search, onChange: (e) => setSearch(e.target.value), placeholder: "Search by name, email or staff ID...", className: "w-full pl-9 pr-3 py-2.5 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card rounded-lg border border-border p-0.5 flex", children: ["pending", "approved", "rejected", "all"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(k), className: `flex-1 sm:flex-none px-3 py-1.5 rounded-md text-xs font-medium capitalize transition-colors ${filter === k ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`, children: k }, k)) })
    ] }),
    filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl border border-border p-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-12 h-12 text-success/30 mx-auto mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-heading font-semibold text-foreground", children: "No applications match." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: filtered.map((app) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl border border-border p-4 hover:border-primary/30 transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/15 text-primary font-heading font-bold flex items-center justify-center shrink-0", children: app.name.charAt(0) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground truncate", children: app.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: app.staff_id })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${badgeClass(app.status)}`, children: app.status })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-xs text-muted-foreground mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-3 h-3" }),
          " ",
          app.email
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3 h-3" }),
          " ",
          app.phone
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-3 h-3" }),
          " ",
          app.department
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-3 border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wider", children: "Monthly Savings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-heading font-bold text-foreground", children: formatCurrency(app.monthly_savings) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelected(app), className: "text-xs font-semibold text-primary hover:underline", children: "Review →" })
      ] })
    ] }, app.id)) }),
    selected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[100] flex items-center justify-center p-3 bg-foreground/40 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl border border-border w-full max-w-md shadow-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-bold text-foreground", children: "Review Application" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
          selected.name,
          " — ",
          selected.staff_id
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wider", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground", children: selected.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wider", children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground", children: selected.phone })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wider", children: "Department" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground", children: selected.department })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wider", children: "Monthly Savings" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground", children: formatCurrency(selected.monthly_savings) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/40 rounded-lg p-3 text-xs text-muted-foreground", children: [
          "Submitted ",
          new Date(selected.submitted_at).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric"
          })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-3 border-t border-border flex justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelected(null), className: "px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary rounded-md", children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setStatus(selected.id, "rejected"), className: "px-4 py-2 text-sm font-bold bg-destructive text-destructive-foreground hover:opacity-90 rounded-md inline-flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-4 h-4" }),
          " Reject"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setStatus(selected.id, "approved"), className: "px-4 py-2 text-sm font-bold bg-primary text-primary-foreground hover:opacity-90 rounded-md inline-flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4" }),
          " Approve"
        ] })
      ] })
    ] }) })
  ] });
}
export {
  AdminApplications as component
};
