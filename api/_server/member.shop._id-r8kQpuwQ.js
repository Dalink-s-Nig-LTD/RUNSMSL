import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-DChuZF5m.js";
import { c as createLucideIcon, g as Route, u as useNavigate } from "./router-N0v2RbpL.js";
import { p as products, h as formatCurrency } from "./mockData-DNwc5U0_.js";
import { A as ArrowLeft } from "./arrow-left-NSep4jdH.js";
import { C as CircleCheckBig } from "./circle-check-big-B3In-rF_.js";
import { C as Clock } from "./clock-CPU6h7xO.js";
import { I as Info } from "./info-DgVta3s0.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "M12 22v-9", key: "x3hkom" }],
  [
    "path",
    {
      d: "M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",
      key: "2ntwy6"
    }
  ],
  [
    "path",
    {
      d: "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",
      key: "1pmm1c"
    }
  ],
  [
    "path",
    {
      d: "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",
      key: "12ttoo"
    }
  ]
];
const PackageOpen = createLucideIcon("package-open", __iconNode);
function ProductDetail() {
  const {
    id
  } = Route.useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = reactExports.useState(1);
  const [duration, setDuration] = reactExports.useState(12);
  const [note, setNote] = reactExports.useState("");
  if (!product) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-muted-foreground", children: "Product not found" });
  const totalAmount = product.price * quantity;
  const totalRepayment = totalAmount + totalAmount * 0.05;
  const monthlyDeduction = totalRepayment / duration;
  const handleRequest = () => {
    alert("Loan request submitted successfully!");
    navigate({
      to: "/member/loans"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto space-y-5 sm:space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => navigate({
      to: "/member/shop"
    }), className: "flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 mr-1.5" }),
      "Back to Shop"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card rounded-xl p-4 sm:p-6 border border-border flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square w-full max-w-sm relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.image_url, alt: product.name, className: "w-full h-full object-contain hover:scale-105 transition-transform duration-500" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 sm:space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-0.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full", children: product.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-1 ${product.stock_quantity > 0 ? "bg-secondary text-muted-foreground" : "bg-destructive/10 text-destructive"}`, children: [
              product.stock_quantity > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
              product.stock_quantity > 0 ? "In Stock" : "Out of Stock"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl sm:text-2xl font-heading font-bold text-foreground leading-tight", children: product.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: product.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl sm:text-2xl font-heading font-bold text-foreground mt-3", children: formatCurrency(product.price) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/50 p-4 sm:p-5 rounded-xl border border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-heading font-bold text-foreground mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PackageOpen, { className: "w-4 h-4 text-primary" }),
            "Loan Calculator"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-muted-foreground mb-1", children: "Quantity" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQuantity(Math.max(1, quantity - 1)), className: "w-9 h-9 bg-card border border-border rounded-l-md text-muted-foreground hover:text-foreground text-sm", children: "-" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: quantity, readOnly: true, className: "w-10 sm:w-12 h-9 bg-card border-y border-border text-center text-sm font-semibold text-foreground outline-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQuantity(Math.min(product.stock_quantity, quantity + 1)), className: "w-9 h-9 bg-card border border-border rounded-r-md text-muted-foreground hover:text-foreground text-sm", children: "+" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-muted-foreground mb-1", children: "Duration" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: duration, onChange: (e) => setDuration(Number(e.target.value)), className: "w-full h-9 px-2 sm:px-3 bg-card border border-border rounded-md text-sm font-medium text-foreground outline-none focus:border-primary appearance-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 3, children: "3 Mo" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 6, children: "6 Mo" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 9, children: "9 Mo" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 12, children: "12 Mo" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-3 sm:p-4 rounded-lg border border-primary/20 space-y-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Principal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: formatCurrency(totalAmount) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground flex items-center", children: [
                "Interest ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-3 h-3 ml-1 text-muted-foreground/60" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "5% flat" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center pt-2 border-t border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-heading font-bold text-foreground text-xs sm:text-sm", children: "Monthly Deduction" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base sm:text-lg font-heading font-bold text-primary", children: formatCurrency(monthlyDeduction) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-muted-foreground mb-1", children: "Optional Note" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: note, onChange: (e) => setNote(e.target.value), placeholder: "Any justification or details...", className: "w-full p-3 bg-card border border-border rounded-md text-sm outline-none focus:border-primary resize-none h-16" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleRequest, disabled: product.stock_quantity === 0, className: "w-full mt-4 py-3 bg-primary hover:opacity-90 text-primary-foreground rounded-lg font-heading font-bold text-sm transition-all disabled:opacity-40", children: "Request on Loan" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ProductDetail as component
};
