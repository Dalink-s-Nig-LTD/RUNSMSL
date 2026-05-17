import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Box, CheckCircle, Pencil, PlusCircle, Trash2 } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

import { formatCurrency } from "@/data/mockData";

export const Route = createFileRoute("/admin/products")({ component: AdminProducts });

type ProductForm = {
  name: string;
  description: string;
  category: string;
  price: string;
  stock_quantity: string;
  is_active: boolean;
  image_url: string;
};

const emptyForm: ProductForm = {
  name: "",
  description: "",
  category: "",
  price: "",
  stock_quantity: "",
  is_active: true,
  image_url: "",
};

function AdminProducts() {
  const products = useQuery(api.products.list) ?? [];
  const createProduct = useMutation(api.products.create);
  const updateProduct = useMutation(api.products.update);
  const deleteProduct = useMutation(api.products.remove);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<ProductForm>(emptyForm);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const editingProduct = useMemo(
    () => products.find((product) => product.externalId === editingId) ?? null,
    [editingId, products],
  );

  const resetForm = () => {
    setEditingId(null);
    setForm(emptyForm);
    setError(null);
  };

  const beginEdit = (product: (typeof products)[number]) => {
    setEditingId(product.externalId);
    setForm({
      name: product.name,
      description: product.description,
      category: product.category,
      price: String(product.price),
      stock_quantity: String(product.stock_quantity),
      is_active: product.is_active,
      image_url: product.image_url,
    });
    setError(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const payload = {
      name: form.name.trim(),
      description: form.description.trim(),
      category: form.category.trim(),
      price: Number(form.price),
      stock_quantity: Number(form.stock_quantity),
      is_active: form.is_active,
      image_url: form.image_url.trim(),
    };

    if (!payload.name || !payload.category || !payload.description || !payload.image_url || Number.isNaN(payload.price) || Number.isNaN(payload.stock_quantity)) {
      setError("Fill in all product fields with valid values.");
      return;
    }

    setBusyId(editingId ?? "create");
    try {
      if (editingId) {
        await updateProduct({ externalId: editingId, ...payload });
      } else {
        await createProduct(payload);
      }
      resetForm();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to save product");
    } finally {
      setBusyId(null);
    }
  };

  const handleDelete = async (externalId: string) => {
    if (!confirm("Delete this product?")) {
      return;
    }
    setBusyId(externalId);
    setError(null);
    try {
      await deleteProduct({ externalId });
      if (editingId === externalId) {
        resetForm();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to delete product");
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-heading font-bold text-foreground">Products</h1>
        <p className="text-muted-foreground text-sm mt-1">Create, update, and remove shop products in Convex.</p>
      </div>

      {error && (
        <div className="rounded-lg border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border p-4 sm:p-6 space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="font-heading font-semibold text-foreground">{editingId ? "Edit product" : "Add product"}</h2>
            <p className="text-xs text-muted-foreground">{editingId ? `Editing ${editingProduct?.name ?? "selected product"}` : "Create a new catalog item."}</p>
          </div>
          {editingId && (
            <button type="button" onClick={resetForm} className="text-xs font-medium text-muted-foreground hover:text-foreground">
              Cancel edit
            </button>
          )}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-1 text-sm">
            <span className="text-muted-foreground">Name</span>
            <input className="w-full rounded-lg border border-border bg-background px-3 py-2" value={form.name} onChange={(e) => setForm((current) => ({ ...current, name: e.target.value }))} />
          </label>
          <label className="space-y-1 text-sm">
            <span className="text-muted-foreground">Category</span>
            <input className="w-full rounded-lg border border-border bg-background px-3 py-2" value={form.category} onChange={(e) => setForm((current) => ({ ...current, category: e.target.value }))} />
          </label>
          <label className="space-y-1 text-sm">
            <span className="text-muted-foreground">Price</span>
            <input type="number" step="0.01" className="w-full rounded-lg border border-border bg-background px-3 py-2" value={form.price} onChange={(e) => setForm((current) => ({ ...current, price: e.target.value }))} />
          </label>
          <label className="space-y-1 text-sm">
            <span className="text-muted-foreground">Stock quantity</span>
            <input type="number" className="w-full rounded-lg border border-border bg-background px-3 py-2" value={form.stock_quantity} onChange={(e) => setForm((current) => ({ ...current, stock_quantity: e.target.value }))} />
          </label>
          <label className="space-y-1 text-sm md:col-span-2">
            <span className="text-muted-foreground">Description</span>
            <textarea className="w-full rounded-lg border border-border bg-background px-3 py-2 min-h-24" value={form.description} onChange={(e) => setForm((current) => ({ ...current, description: e.target.value }))} />
          </label>
          <label className="space-y-1 text-sm md:col-span-2">
            <span className="text-muted-foreground">Image URL</span>
            <input className="w-full rounded-lg border border-border bg-background px-3 py-2" value={form.image_url} onChange={(e) => setForm((current) => ({ ...current, image_url: e.target.value }))} />
          </label>
        </div>

        <label className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <input type="checkbox" checked={form.is_active} onChange={(e) => setForm((current) => ({ ...current, is_active: e.target.checked }))} />
          Active in storefront
        </label>

        <button
          type="submit"
          disabled={busyId !== null}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50"
        >
          {editingId ? <Pencil className="w-4 h-4" /> : <PlusCircle className="w-4 h-4" />}
          {editingId ? "Save changes" : "Create product"}
        </button>
      </form>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="px-4 sm:px-6 py-4 border-b border-border flex items-center justify-between gap-3">
          <div>
            <h2 className="font-heading font-semibold text-foreground">Catalog</h2>
            <p className="text-xs text-muted-foreground">Showing {products.length} products.</p>
          </div>
          <div className="text-xs text-muted-foreground">Newest first</div>
        </div>

        {products.length === 0 ? (
          <div className="p-8 text-sm text-muted-foreground">No products yet.</div>
        ) : (
          <div className="divide-y divide-border">
            {products.map((product) => (
              <div key={product.externalId} className="p-4 sm:p-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="min-w-0 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-secondary overflow-hidden flex items-center justify-center shrink-0">
                    {product.image_url ? <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" /> : <Box className="w-5 h-5 text-muted-foreground" />}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground truncate">{product.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{product.category} · {formatCurrency(product.price)}</p>
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{product.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase border ${product.is_active ? "bg-success/10 text-success border-success/20" : "bg-secondary text-muted-foreground border-border"}`}>
                    {product.is_active ? "Active" : "Hidden"}
                  </span>
                  <span className="px-2 py-1 rounded-full text-[10px] font-bold uppercase bg-primary/10 text-primary border border-primary/20">
                    Stock {product.stock_quantity}
                  </span>
                  <button onClick={() => beginEdit(product)} className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-medium text-foreground hover:bg-secondary/50">
                    <Pencil className="w-3.5 h-3.5" /> Edit
                  </button>
                  <button onClick={() => void handleDelete(product.externalId)} disabled={busyId === product.externalId} className="inline-flex items-center gap-1.5 rounded-lg border border-destructive/20 px-3 py-2 text-xs font-medium text-destructive hover:bg-destructive/10 disabled:opacity-50">
                    <Trash2 className="w-3.5 h-3.5" /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="text-sm text-muted-foreground flex items-center gap-2">
        <CheckCircle className="w-4 h-4 text-success" />
        Product changes persist to Convex and create audit entries.
      </div>
    </div>
  );
}
