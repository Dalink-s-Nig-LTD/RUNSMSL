import { createFileRoute } from "@tanstack/react-router";
import { mockLoans, formatCurrency } from "@/data/mockData";
import { CheckCircle, Clock } from "lucide-react";

export const Route = createFileRoute("/admin/loans")({ component: AdminLoans });

function AdminLoans() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-heading font-bold text-foreground">Loan Requests</h1>
        <p className="text-muted-foreground text-sm mt-1">Review and manage member loan applications.</p>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden divide-y divide-border">
        {mockLoans.map(loan => (
          <div key={loan.id} className="p-4 hover:bg-secondary/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary overflow-hidden shrink-0">
                <img src={loan.product.image_url} alt="" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{loan.member_name}</p>
                <p className="text-[10px] text-muted-foreground">{loan.product.name}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-foreground">{formatCurrency(loan.total_loan_amount)}</p>
              <span className={`text-[10px] font-bold uppercase ${loan.status === "pending" ? "text-warning" : loan.status === "active" ? "text-primary" : "text-success"}`}>
                {loan.status === "cleared" ? <CheckCircle className="w-3 h-3 inline mr-0.5" /> : <Clock className="w-3 h-3 inline mr-0.5" />}
                {loan.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
