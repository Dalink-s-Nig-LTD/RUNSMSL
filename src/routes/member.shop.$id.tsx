import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { products, formatCurrency } from "@/data/mockData";
import { ArrowLeft, Info, PackageOpen, CheckCircle, Clock } from "lucide-react";

export const Route = createFileRoute("/member/shop/$id")({ component: ProductDetail });

function ProductDetail() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [duration, setDuration] = useState(12);
  const [note, setNote] = useState("");

  if (!product) return <div className="p-8 text-muted-foreground">Product not found</div>;

  const totalAmount = product.price * quantity;
  const totalRepayment = totalAmount + totalAmount * 0.05;
  const monthlyDeduction = totalRepayment / duration;

  const handleRequest = () => {
    alert("Loan request submitted successfully!");
    navigate({ to: "/member/loans" });
  };

  return (
    <div className="max-w-5xl mx-auto space-y-5 sm:space-y-6">
      <button onClick={() => navigate({ to: "/member/shop" })} className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="w-4 h-4 mr-1.5" />Back to Shop
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 items-start">
        <div className="bg-card rounded-xl p-4 sm:p-6 border border-border flex items-center justify-center">
          <div className="aspect-square w-full max-w-sm relative">
            <img src={product.image_url} alt={product.name} className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
          </div>
        </div>

        <div className="space-y-4 sm:space-y-5">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="px-2.5 py-0.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">{product.category}</span>
              <span className={`px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-1 ${product.stock_quantity > 0 ? "bg-secondary text-muted-foreground" : "bg-destructive/10 text-destructive"}`}>
                {product.stock_quantity > 0 ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                {product.stock_quantity > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-heading font-bold text-foreground leading-tight">{product.name}</h1>
            <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
            <div className="text-xl sm:text-2xl font-heading font-bold text-foreground mt-3">{formatCurrency(product.price)}</div>
          </div>

          <div className="bg-secondary/50 p-4 sm:p-5 rounded-xl border border-border">
            <h3 className="text-sm font-heading font-bold text-foreground mb-3 flex items-center gap-2">
              <PackageOpen className="w-4 h-4 text-primary" />Loan Calculator
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">Quantity</label>
                <div className="flex items-center">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-9 h-9 bg-card border border-border rounded-l-md text-muted-foreground hover:text-foreground text-sm">-</button>
                  <input type="number" value={quantity} readOnly className="w-10 sm:w-12 h-9 bg-card border-y border-border text-center text-sm font-semibold text-foreground outline-none" />
                  <button onClick={() => setQuantity(Math.min(product.stock_quantity, quantity + 1))} className="w-9 h-9 bg-card border border-border rounded-r-md text-muted-foreground hover:text-foreground text-sm">+</button>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">Duration</label>
                <select value={duration} onChange={e => setDuration(Number(e.target.value))} className="w-full h-9 px-2 sm:px-3 bg-card border border-border rounded-md text-sm font-medium text-foreground outline-none focus:border-primary appearance-none">
                  <option value={3}>3 Mo</option><option value={6}>6 Mo</option><option value={9}>9 Mo</option><option value={12}>12 Mo</option>
                </select>
              </div>
            </div>

            <div className="bg-card p-3 sm:p-4 rounded-lg border border-primary/20 space-y-2.5">
              <div className="flex justify-between text-xs"><span className="text-muted-foreground">Principal</span><span className="font-semibold text-foreground">{formatCurrency(totalAmount)}</span></div>
              <div className="flex justify-between text-xs"><span className="text-muted-foreground flex items-center">Interest <Info className="w-3 h-3 ml-1 text-muted-foreground/60" /></span><span className="font-semibold text-foreground">5% flat</span></div>
              <div className="flex justify-between items-center pt-2 border-t border-border">
                <span className="font-heading font-bold text-foreground text-xs sm:text-sm">Monthly Deduction</span>
                <span className="text-base sm:text-lg font-heading font-bold text-primary">{formatCurrency(monthlyDeduction)}</span>
              </div>
            </div>

            <div className="mt-3">
              <label className="block text-xs font-medium text-muted-foreground mb-1">Optional Note</label>
              <textarea value={note} onChange={e => setNote(e.target.value)} placeholder="Any justification or details..." className="w-full p-3 bg-card border border-border rounded-md text-sm outline-none focus:border-primary resize-none h-16" />
            </div>

            <button onClick={handleRequest} disabled={product.stock_quantity === 0} className="w-full mt-4 py-3 bg-primary hover:opacity-90 text-primary-foreground rounded-lg font-heading font-bold text-sm transition-all disabled:opacity-40">
              Request on Loan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
