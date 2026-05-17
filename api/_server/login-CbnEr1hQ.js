import { U as jsxRuntimeExports } from "./worker-entry-DChuZF5m.js";
import { c as createLucideIcon, u as useNavigate } from "./router-N0v2RbpL.js";
import { r as rucsLogo } from "./rucs-logo-BbO5OAK6.js";
import { U as Users } from "./users-v4hyRj6V.js";
import { T as TrendingUp } from "./trending-up-CEHzv2rN.js";
import { S as ShieldCheck } from "./shield-check-Dh2YKp3N.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "m10 17 5-5-5-5", key: "1bsop3" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }]
];
const LogIn = createLucideIcon("log-in", __iconNode$1);
const __iconNode = [
  ["path", { d: "M10 15H6a4 4 0 0 0-4 4v2", key: "1nfge6" }],
  ["path", { d: "m14.305 16.53.923-.382", key: "1itpsq" }],
  ["path", { d: "m15.228 13.852-.923-.383", key: "eplpkm" }],
  ["path", { d: "m16.852 12.228-.383-.923", key: "13v3q0" }],
  ["path", { d: "m16.852 17.772-.383.924", key: "1i8mnm" }],
  ["path", { d: "m19.148 12.228.383-.923", key: "1q8j1v" }],
  ["path", { d: "m19.53 18.696-.382-.924", key: "vk1qj3" }],
  ["path", { d: "m20.772 13.852.924-.383", key: "n880s0" }],
  ["path", { d: "m20.772 16.148.924.383", key: "1g6xey" }],
  ["circle", { cx: "18", cy: "15", r: "3", key: "gjjjvw" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const UserCog = createLucideIcon("user-cog", __iconNode);
function LoginPage() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex font-body", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex lg:w-[480px] xl:w-[520px] bg-ocean-deep text-white flex-col justify-between p-10 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-transparent via-ocean-mid/30 to-ocean-accent/10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: rucsLogo, alt: "RUNSMSL — Run Staff Cooperative Multipurpose Society Limited", className: "w-12 h-12 object-contain drop-shadow-lg" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-heading font-bold text-xl tracking-tight", children: "RUNSMSL" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/75 font-medium", children: "Run Staff Cooperative Multipurpose Society Limited" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-heading text-3xl xl:text-4xl font-bold leading-tight", children: [
          "Your cooperative,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "digitally empowered."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-base leading-relaxed max-w-sm", children: "Save, borrow, and manage your cooperative membership — all in one place." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4 pt-4", children: [{
          icon: Users,
          label: "1,200+ active members"
        }, {
          icon: TrendingUp,
          label: "₦450M+ total savings"
        }, {
          icon: ShieldCheck,
          label: "Bank-grade security"
        }].map(({
          icon: Icon,
          label
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-white/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: label })
        ] }, label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative z-10 text-xs text-white/70", children: "© 2026 Run Staff Cooperative Multipurpose Society Limited" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col justify-center items-center px-6 sm:px-12 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: rucsLogo, alt: "RUNSMSL — Run Staff Cooperative Multipurpose Society Limited", className: "w-10 h-10 object-contain" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-heading font-bold text-lg text-foreground", children: "RUNSMSL Platform" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-2xl font-bold text-foreground", children: "Welcome back" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1 text-sm", children: "Sign in with your institutional Google account." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => navigate({
          to: "/member"
        }), className: "w-full flex justify-center items-center py-3.5 px-4 bg-card border border-border rounded-lg shadow-sm text-sm font-semibold text-foreground hover:bg-secondary transition-all duration-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "h-5 w-5 mr-3", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z", fill: "#EA4335" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z", fill: "#4285F4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z", fill: "#FBBC05" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.26538 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z", fill: "#34A853" })
          ] }),
          "Sign in as Member"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => navigate({
          to: "/officer"
        }), className: "w-full flex justify-center items-center py-3.5 px-4 bg-card border border-border rounded-lg shadow-sm text-sm font-semibold text-foreground hover:bg-secondary transition-all duration-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(UserCog, { className: "w-5 h-5 mr-2 text-ocean-accent" }),
          "Sign in as Loan Officer"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => navigate({
          to: "/admin"
        }), className: "w-full flex justify-center items-center py-3.5 px-4 bg-primary text-primary-foreground rounded-lg shadow-sm text-sm font-semibold hover:opacity-90 transition-all duration-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "w-5 h-5 mr-2" }),
          "Sign in as Admin"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full border-t border-border" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex justify-center text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 bg-background text-muted-foreground text-xs", children: "Secured by Google OAuth 2.0" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground", children: "Only @run.edu.ng email addresses are permitted." })
    ] }) })
  ] });
}
export {
  LoginPage as component
};
