import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-DChuZF5m.js";
import { p as products, h as formatCurrency } from "./mockData-DNwc5U0_.js";
import { X } from "./router-N0v2RbpL.js";
import { C as Check } from "./check-CGvl6JLG.js";
import { S as Search } from "./search-CHDhDUwJ.js";
import { P as Plus } from "./plus-dAsh4ivD.js";
import { I as Image, S as SquarePen } from "./square-pen-C7rR8TMb.js";
import { T as Trash2 } from "./trash-2-CUwyIEtP.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function AdminProducts() {
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [productList, setProductList] = reactExports.useState(products);
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [editingProduct, setEditingProduct] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState({
    name: "",
    category: "Electronics",
    price: 0,
    stock_quantity: 0,
    description: "",
    image_url: ""
  });
  const filteredProducts = productList.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const handleOpenModal = (product) => {
    if (product) {
      setEditingProduct(product);
      setForm({
        name: product.name,
        category: product.category,
        price: product.price,
        stock_quantity: product.stock_quantity,
        description: product.description || "",
        image_url: product.image_url || ""
      });
    } else {
      setEditingProduct(null);
      setForm({
        name: "",
        category: "Electronics",
        price: 0,
        stock_quantity: 0,
        description: "",
        image_url: ""
      });
    }
    setIsModalOpen(true);
  };
  const handleSave = () => {
    if (!form.name || form.price <= 0) return;
    if (editingProduct) setProductList(productList.map((p) => p.id === editingProduct.id ? {
      ...p,
      ...form
    } : p));
    else setProductList([...productList, {
      id: `p${Date.now()}`,
      ...form,
      is_active: true
    }]);
    setIsModalOpen(false);
  };
  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) setProductList(productList.filter((p) => p.id !== id));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 relative", children: [
    isModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-foreground/40 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl w-full max-w-lg border border-border shadow-xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-b border-border flex justify-between items-center bg-secondary/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-bold text-foreground text-sm", children: editingProduct ? "Edit Product" : "Add New Product" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsModalOpen(false), className: "text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-3.5 max-h-[70vh] overflow-y-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-muted-foreground mb-1", children: "Product Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", className: "w-full px-3 py-2 bg-card border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary", value: form.name, onChange: (e) => setForm({
            ...form,
            name: e.target.value
          }), placeholder: 'e.g. HP Laptop 15.6"' })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-muted-foreground mb-1", children: "Category" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "w-full px-3 py-2 bg-card border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/30", value: form.category, onChange: (e) => setForm({
              ...form,
              category: e.target.value
            }), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Electronics", children: "Electronics" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Household", children: "Household" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Groceries", children: "Groceries" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-muted-foreground mb-1", children: "Price (₦)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: "w-full px-3 py-2 bg-card border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/30", value: form.price || "", onChange: (e) => setForm({
              ...form,
              price: Number(e.target.value)
            }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-muted-foreground mb-1", children: "Stock Quantity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: "w-full px-3 py-2 bg-card border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/30", value: form.stock_quantity || "", onChange: (e) => setForm({
            ...form,
            stock_quantity: Number(e.target.value)
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-muted-foreground mb-1", children: "Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "w-full px-3 py-2 bg-card border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none h-20", value: form.description, onChange: (e) => setForm({
            ...form,
            description: e.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-muted-foreground mb-1", children: "Image URL" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", className: "w-full px-3 py-2 bg-card border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/30", value: form.image_url, onChange: (e) => setForm({
            ...form,
            image_url: e.target.value
          }), placeholder: "https://..." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-3 bg-secondary/50 border-t border-border flex justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsModalOpen(false), className: "px-3.5 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary rounded-md transition-colors", children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleSave, disabled: !form.name || form.price <= 0, className: "px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md flex items-center gap-1.5 hover:opacity-90 transition-all disabled:opacity-40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5" }),
          editingProduct ? "Save" : "Add Product"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl sm:text-2xl font-heading font-bold text-foreground", children: "Products" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Manage the cooperative shop catalogue." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 w-full sm:w-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[140px] sm:w-64", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Search products...", className: "w-full pl-9 pr-4 py-2 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => handleOpenModal(), className: "flex items-center px-3 sm:px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-all shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Add Product" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "Add" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 md:hidden", children: filteredProducts.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl border border-border p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-lg bg-secondary overflow-hidden shrink-0 flex items-center justify-center border border-border", children: product.image_url ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.image_url, alt: product.name, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-5 h-5 text-muted-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground truncate", children: product.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground line-clamp-1", children: product.description })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-heading font-bold text-foreground", children: formatCurrency(product.price) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-secondary text-muted-foreground border border-border", children: product.category })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-1.5 h-1.5 rounded-full ${product.stock_quantity > 5 ? "bg-success" : product.stock_quantity > 0 ? "bg-warning" : "bg-destructive"}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: product.stock_quantity })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleOpenModal(product), className: "p-1.5 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleDelete(product.id), className: "p-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-md transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }) })
        ] })
      ] })
    ] }, product.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl border border-border overflow-hidden hidden md:block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left border-collapse", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-secondary/50 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "Product" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "Category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "Price" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "Stock" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-right text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: filteredProducts.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/30 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-secondary overflow-hidden shrink-0 flex items-center justify-center border border-border", children: product.image_url ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.image_url, alt: product.name, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-4 h-4 text-muted-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground line-clamp-1", children: product.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground line-clamp-1 max-w-xs", children: product.description })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-secondary text-muted-foreground border border-border", children: product.category }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-sm font-semibold text-foreground", children: formatCurrency(product.price) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-1.5 h-1.5 rounded-full ${product.stock_quantity > 5 ? "bg-success" : product.stock_quantity > 0 ? "bg-warning" : "bg-destructive"}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm font-semibold ${product.stock_quantity > 0 ? "text-foreground" : "text-destructive"}`, children: product.stock_quantity })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleOpenModal(product), className: "p-1.5 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleDelete(product.id), className: "p-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-md transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }) })
          ] }) })
        ] }, product.id)) })
      ] }) }),
      filteredProducts.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12 text-sm text-muted-foreground", children: "No products found." })
    ] }),
    filteredProducts.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12 text-sm text-muted-foreground md:hidden", children: "No products found." })
  ] });
}
export {
  AdminProducts as component
};
