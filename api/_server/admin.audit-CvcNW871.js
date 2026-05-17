import { U as jsxRuntimeExports } from "./worker-entry-DChuZF5m.js";
import { C as Clock } from "./clock-CPU6h7xO.js";
import { c as createLucideIcon } from "./router-N0v2RbpL.js";
import { C as CircleAlert } from "./circle-alert-Ty-5ZP8f.js";
import { I as Info } from "./info-DgVta3s0.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
];
const ShieldAlert = createLucideIcon("shield-alert", __iconNode);
const AUDIT_DATA = [{
  id: 1,
  time: "Apr 7, 2026 09:14",
  user: "Mrs. Adaeze (Admin)",
  action: "Approved loan LN-0049",
  ip: "41.58.12.33",
  level: "info"
}, {
  id: 2,
  time: "Apr 6, 2026 16:02",
  user: "Mrs. Adaeze (Admin)",
  action: "Rejected loan LN-0048 — Exceeds credit limit",
  ip: "41.58.12.33",
  level: "warning"
}, {
  id: 3,
  time: "Apr 5, 2026 11:30",
  user: "Emmanuel (Super Admin)",
  action: "Placed account RU/2020/0078 on Hold",
  ip: "105.22.44.11",
  level: "danger"
}, {
  id: 4,
  time: "Apr 4, 2026 14:55",
  user: "Mrs. Adaeze (Admin)",
  action: "Added product: Binatone Standing Fan",
  ip: "41.58.12.33",
  level: "info"
}, {
  id: 5,
  time: "Apr 3, 2026 09:00",
  user: "c.adeyemi@run.edu.ng (Member)",
  action: "Login from new device",
  ip: "197.210.55.99",
  level: "info"
}];
function AdminAuditLog() {
  const getLevelIcon = (level) => {
    if (level === "danger") return /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-4 h-4 text-destructive" });
    if (level === "warning") return /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 text-warning" });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-4 h-4 text-primary" });
  };
  const getLevelBg = (level) => level === "danger" ? "bg-destructive/10" : level === "warning" ? "bg-warning/10" : "bg-primary/10";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl sm:text-2xl font-heading font-bold text-foreground", children: "Audit Log" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Review system activities and admin actions." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card rounded-xl border border-border overflow-hidden divide-y divide-border", children: AUDIT_DATA.map((log) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 hover:bg-secondary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-1.5 rounded-md shrink-0 ${getLevelBg(log.level)}`, children: getLevelIcon(log.level) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: log.action }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: log.user }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-2 text-[10px] text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 mr-1" }),
            log.time
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono bg-secondary px-1.5 py-0.5 rounded", children: log.ip })
        ] })
      ] })
    ] }) }, log.id)) })
  ] });
}
export {
  AdminAuditLog as component
};
