import { U as jsxRuntimeExports } from "./worker-entry-DChuZF5m.js";
import { C as Cookie, L as Link } from "./router-N0v2RbpL.js";
import { N as Navbar, B as Badge } from "./badge-Dtmj6EN0.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./rucs-logo-BbO5OAK6.js";
import "./arrow-right-iYsqtKcg.js";
import "./menu-XUEOTZgV.js";
function CookiesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-24 sm:pt-28 pb-10 bg-gradient-to-br from-primary/5 via-background to-background border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8 max-w-4xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Cookie, { className: "h-3.5 w-3.5 mr-1.5" }),
        " Cookies"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3", children: "Cookie Policy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm sm:text-base", children: "We respect your privacy and use cookies to enhance your experience on the RUNSMSL website." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/70 mt-3", children: "Last updated: April 28, 2026" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 sm:py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8 max-w-4xl space-y-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { title: "1. What are cookies?", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cookies are small text files placed on your device when you visit a website. They help the site work properly, remember your preferences, and give us insight into how the site is used." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { title: "2. Types of cookies we use", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4 mt-3", children: [{
        t: "Strictly necessary",
        d: "Required for core functions like signing in, navigation and security. These cannot be turned off."
      }, {
        t: "Functional",
        d: "Remember your preferences (e.g. language, layout) to give you a better experience."
      }, {
        t: "Analytics",
        d: "Help us understand how members use the site so we can improve it. Aggregated and anonymised."
      }, {
        t: "Performance",
        d: "Monitor uptime, errors and page speed to keep the platform reliable."
      }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-semibold text-foreground mb-1", children: c.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: c.d })
      ] }, c.t)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { title: "3. Third-party cookies", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Some pages may include content from trusted third parties (for example analytics providers). These providers may set their own cookies, governed by their own privacy policies." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Block, { title: "4. Managing your preferences", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "When you first visit our site you can choose to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Accept" }),
          " or ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Decline" }),
          " ",
          "non-essential cookies via the consent banner. You can also control or delete cookies at any time through your browser settings. Disabling some cookies may affect site functionality."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
          try {
            localStorage.removeItem("runsmsl-cookie-consent");
            window.location.reload();
          } catch {
          }
        }, className: "inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition", children: "Reset cookie preferences" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { title: "5. Changes to this policy", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We may update this Cookie Policy occasionally. Please check back for the latest version." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { title: "6. Contact", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Questions about cookies or privacy? Email",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:cooperative@run.edu.ng", className: "text-primary underline underline-offset-2", children: "cooperative@run.edu.ng" }),
        "."
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-border text-sm text-muted-foreground", children: [
        "See also our",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy", className: "text-primary underline underline-offset-2", children: "Privacy Policy" }),
        "."
      ] })
    ] }) })
  ] });
}
function Block({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-xl sm:text-2xl font-bold text-foreground mb-3", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm sm:text-base text-muted-foreground leading-relaxed space-y-2", children })
  ] });
}
export {
  CookiesPage as component
};
