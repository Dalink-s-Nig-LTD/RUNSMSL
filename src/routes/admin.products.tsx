import { createFileRoute } from "@tanstack/react-router";
import { products, formatCurrency } from "@/data/mockData";

export const Route = createFileRoute("/admin/products")({ component: AdminProducts });

function AdminProducts() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-heading font-bold text-foreground">Products</h1>
        <p className="text-muted-foreground text-sm mt-1">Manage the cooperative shop catalogue.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(p => (
          <div key={p.id} className="bg-card rounded-xl border border-border overflow-hidden">
            <img src={p.image_url} alt={p.name} className="w-full aspect-[4/3] object-cover" />
            <div className="p-4">
              <p className="text-sm font-semibold text-foreground">{p.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{p.category} · Stock: {p.stock_quantity}</p>
              <p className="text-base font-heading font-bold text-foreground mt-2">{formatCurrency(p.price)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
