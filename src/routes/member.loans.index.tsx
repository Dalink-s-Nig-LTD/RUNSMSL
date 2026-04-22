import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { mockLoans, formatCurrency } from "@/data/mockData";
import { CheckCircle, Clock, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/member/loans/")({ component: MyLoans });

function MyLoans() {
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();
  const filteredLoans = filter === "all" ? mockLoans : mockLoans.filter(l => l.status === filter);

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      active: "bg-primary/10 text-primary border-primary/20",
      cleared: "bg-success/10 text-success border-success/20",
      pending: "bg-warning/10 text-warning border-warning/20",
    };
    const icons: Record<string, React.ReactNode> = {
      active: <Clock className="w-3 h-3 mr-1" />,
      cleared: <CheckCircle className="w-3 h-3 mr-1" />,
      pending: <AlertCircle className="w-3 h-3 mr-1" />,
    };
    return (
      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${styles[status] || "bg-secondary text-muted-foreground border-border"}`}>
        {icons[status]}{status}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-heading font-bold text-foreground">My Loans</h1>
          <p className="text-muted-foreground text-sm mt-1">Track your active loans and repayment history.</p>
        </div>
        <div className="bg-card rounded-lg border border-border p-0.5 flex w-full sm:w-auto">
          {["all", "active", "pending", "cleared"].map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`flex-1 sm:flex-none px-3 py-1.5 rounded-md text-xs font-medium capitalize transition-colors ${filter === f ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {filteredLoans.map(loan => {
          const progress = loan.status === "cleared" ? 100 : loan.status === "pending" ? 0 : (loan.amount_paid / loan.total_repayment_amount) * 100;
          return (
            <div key={loan.id} onClick={() => navigate({ to: "/member/loans/$id", params: { id: loan.id } })} className="bg-card rounded-xl border border-border p-4 cursor-pointer hover:border-primary/30 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary overflow-hidden shrink-0">
                    <img src={loan.product.image_url} alt={loan.product.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground line-clamp-1">{loan.product.name}</p>
                    <p className="text-[10px] text-muted-foreground">{new Date(loan.created_at).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}</p>
                  </div>
                </div>
                {getStatusBadge(loan.status)}
              </div>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-base font-heading font-bold text-foreground">{formatCurrency(loan.total_loan_amount)}</p>
                  <p className="text-[10px] text-muted-foreground">{formatCurrency(loan.monthly_installment)}/mo</p>
                </div>
                <span className="text-xs font-semibold text-primary">Details →</span>
              </div>
              {loan.status !== "pending" && (
                <div>
                  <div className="flex justify-between text-[10px] mb-1">
                    <span className="font-medium text-muted-foreground">Paid: {formatCurrency(loan.amount_paid)}</span>
                    <span className="text-muted-foreground">{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${progress === 100 ? "bg-success" : "bg-primary"}`} style={{ width: `${progress}%` }} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
