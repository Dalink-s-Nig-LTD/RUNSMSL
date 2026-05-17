import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-DChuZF5m.js";
import { n as mockBroadcasts } from "./mockData-DNwc5U0_.js";
import { M as Megaphone } from "./megaphone-D-VogrbV.js";
import { c as createLucideIcon } from "./router-N0v2RbpL.js";
import { C as CircleCheckBig } from "./circle-check-big-B3In-rF_.js";
import { U as Users } from "./users-v4hyRj6V.js";
import { T as Trash2 } from "./trash-2-CUwyIEtP.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
function AdminBroadcast() {
  const [broadcasts, setBroadcasts] = reactExports.useState(mockBroadcasts);
  const [form, setForm] = reactExports.useState({
    title: "",
    body: "",
    audience: "all"
  });
  const [success, setSuccess] = reactExports.useState(false);
  const handleSend = () => {
    if (!form.title.trim() || !form.body.trim()) return;
    const newB = {
      id: `b${Date.now()}`,
      title: form.title.trim(),
      body: form.body.trim(),
      audience: form.audience,
      sent_at: (/* @__PURE__ */ new Date()).toISOString(),
      sent_by: "Mrs. Adaeze"
    };
    setBroadcasts([newB, ...broadcasts]);
    setForm({
      title: "",
      body: "",
      audience: "all"
    });
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2500);
  };
  const handleDelete = (id) => {
    if (window.confirm("Delete this announcement?")) setBroadcasts(broadcasts.filter((b) => b.id !== id));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-xl sm:text-2xl font-heading font-bold text-foreground flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { className: "w-6 h-6 text-primary" }),
        "Broadcast Announcements"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Send notifications to all members or specific groups." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl border border-border p-5 sm:p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-heading font-bold text-foreground mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-5 h-5 text-primary" }),
          " New Announcement"
        ] }),
        success && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 p-3 rounded-lg bg-success/10 border border-success/20 text-success text-xs font-medium flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4" }),
          " Announcement sent successfully."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-muted-foreground mb-1.5", children: "Title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: form.title, onChange: (e) => setForm({
              ...form,
              title: e.target.value.slice(0, 100)
            }), placeholder: "e.g. AGM 2026 Notice", maxLength: 100, className: "w-full px-3 py-2.5 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground mt-1", children: [
              form.title.length,
              "/100"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-muted-foreground mb-1.5", children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: form.body, onChange: (e) => setForm({
              ...form,
              body: e.target.value.slice(0, 1e3)
            }), rows: 6, placeholder: "Write the announcement body...", maxLength: 1e3, className: "w-full px-3 py-2.5 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground mt-1", children: [
              form.body.length,
              "/1000"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-muted-foreground mb-1.5", children: "Audience" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: form.audience, onChange: (e) => setForm({
              ...form,
              audience: e.target.value
            }), className: "w-full px-3 py-2.5 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All users" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "members", children: "Members only" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "officers", children: "Loan officers" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "executives", children: "Executives" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleSend, disabled: !form.title.trim() || !form.body.trim(), className: "w-full py-3 bg-primary text-primary-foreground rounded-lg text-sm font-bold hover:opacity-90 transition-all disabled:opacity-40 inline-flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" }),
            " Send Announcement"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl border border-border p-5 sm:p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-heading font-bold text-foreground mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5 text-primary" }),
          " Recent Broadcasts"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 max-h-[480px] overflow-y-auto", children: broadcasts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground italic text-center py-8", children: "No announcements sent yet." }) : broadcasts.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: b.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleDelete(b.id), className: "text-muted-foreground hover:text-destructive shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed line-clamp-3", children: b.body }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-2 pt-2 border-t border-border/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider font-bold text-primary", children: b.audience }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
              new Date(b.sent_at).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric"
              }),
              " · ",
              b.sent_by
            ] })
          ] })
        ] }, b.id)) })
      ] })
    ] })
  ] });
}
export {
  AdminBroadcast as component
};
