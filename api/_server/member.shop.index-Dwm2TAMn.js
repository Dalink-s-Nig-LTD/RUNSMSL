import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-DChuZF5m.js";
import { c as createLucideIcon, u as useNavigate } from "./router-N0v2RbpL.js";
import { p as products, h as formatCurrency } from "./mockData-DNwc5U0_.js";
import { S as Search } from "./search-CHDhDUwJ.js";
import { F as Funnel } from "./funnel-CJFIFJ2J.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
];
const ShoppingCart = createLucideIcon("shopping-cart", __iconNode);
function Shop() {
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [category, setCategory] = reactExports.useState("All");
  const navigate = useNavigate();
  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = category === "All" || p.category === category;
    return matchesSearch && matchesCat && p.is_active;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 sm:space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl sm:text-2xl font-heading font-bold text-foreground", children: "Cooperative Shop" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Browse available products and request on loan." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 w-full sm:w-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 sm:w-64", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Search products...", className: "w-full pl-9 pr-4 py-2 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-9 h-9 bg-card border border-border rounded-lg text-muted-foreground hover:text-foreground flex items-center justify-center transition-colors shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "w-4 h-4" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex overflow-x-auto pb-1 -mx-1 px-1 gap-1.5 scrollbar-hide", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCategory(cat), className: `px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${category === cat ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"}`, children: cat }, cat)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4", children: filteredProducts.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => navigate({
      to: "/member/shop/$id",
      params: {
        id: product.id
      }
    }), className: "group bg-card rounded-xl border border-border overflow-hidden cursor-pointer transition-all hover:shadow-md hover:-translate-y-0.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[4/3] bg-secondary relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.image_url, alt: product.name, className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" }),
        product.stock_quantity === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-foreground/50 flex items-center justify-center backdrop-blur-[2px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 sm:px-3 py-1 sm:py-1.5 bg-card/90 text-foreground font-bold rounded-full text-[10px] sm:text-xs uppercase tracking-wider", children: "Out of Stock" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 sm:p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-1 sm:mb-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] sm:text-[10px] font-semibold text-primary uppercase tracking-wider", children: product.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] sm:text-[10px] font-medium px-1 sm:px-1.5 py-0.5 rounded-full hidden sm:inline ${product.stock_quantity > 0 ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`, children: product.stock_quantity > 0 ? `${product.stock_quantity} left` : "N/A" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-bold text-foreground text-xs sm:text-sm line-clamp-1", children: product.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 line-clamp-2 hidden sm:block", children: product.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mt-2 sm:mt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base font-heading font-bold text-foreground", children: formatCurrency(product.price) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[9px] sm:text-[10px] text-muted-foreground", children: [
              "From ",
              formatCurrency(product.price / 12),
              "/mo"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: product.stock_quantity === 0, className: "w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-secondary flex items-center justify-center text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground disabled:opacity-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4" }) })
        ] })
      ] })
    ] }, product.id)) })
  ] });
}
export {
  Shop as component
};
