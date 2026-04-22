import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { formatCurrency, mockLoans, mockMembers } from "@/data/mockData";
import { Users, FileText, AlertCircle, Clock, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/admin/")({ component: AdminDashboard });

function AdminDashboard() {
  const navigate = useNavigate();
  const pendingLoans = mockLoans.filter(l => l.status === "pending");
  const activeLoans = mockLoans.filter(l => l.status === "active");
  const totalOutstanding = activeLoans.reduce((sum, loan) => sum + (loan.total_repayment_amount - loan.amount_paid), 0);

  const stats = [
    { label: "Pending Requests", value: pendingLoans.length, icon: AlertCircle, color: "text-warning bg-warning/10" },
    { label: "Active Loans", value: activeLoans.length, icon: FileText, color: "text-primary bg-primary/10" },
    { label: "Total Members", value: mockMembers.length, icon: Users, color: "text-success bg-success/10" },
    { label: "Total Outstanding", value: formatCurrency(totalOutstanding), icon: Clock, color: "text-purple-600 bg-purple-500/10" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-heading font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground text-sm mt-1">Platform-wide statistics, settings, and reports.</p>
        </div>
        <button onClick={() => navigate({ to: "/admin/loans" })} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-all">Review Loans</button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-card p-4 rounded-xl border border-border">
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-2 ${color}`}><Icon className="w-4 h-4" /></div>
            <h3 className="text-base sm:text-xl font-heading font-bold text-foreground">{value}</h3>
            <p className="text-[10px] text-muted-foreground mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      <div className="bg-card p-4 sm:p-5 rounded-xl border border-border">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-heading font-semibold text-foreground">Pending Approvals</h3>
          <button onClick={() => navigate({ to: "/admin/loans" })} className="text-xs font-medium text-primary hover:underline">View all</button>
        </div>
        {pendingLoans.length > 0 ? (
          <div className="space-y-3">
            {pendingLoans.map(loan => (
              <div key={loan.id} className="p-3 rounded-lg border border-border bg-secondary/30">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{loan.product.name}</h4>
                    <p className="text-xs text-muted-foreground">Req by: {loan.member_name}</p>
                  </div>
                  <span className="font-heading font-bold text-foreground text-sm">{formatCurrency(loan.total_loan_amount)}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
            <CheckCircle className="w-10 h-10 mb-2 text-success/30" />
            <p className="text-sm font-medium text-foreground">All caught up!</p>
          </div>
        )}
      </div>
    </div>
  );
}
