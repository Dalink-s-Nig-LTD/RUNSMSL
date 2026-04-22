import { createFileRoute } from "@tanstack/react-router";
import { mockLoans, mockOverdueLoans, mockMembers, formatCurrency } from "@/data/mockData";
import { CheckCircle, Clock, AlertTriangle, FileText, Users } from "lucide-react";

export const Route = createFileRoute("/officer/")({ component: OfficerDashboard });

function OfficerDashboard() {
  const pendingLoans = mockLoans.filter(l => l.status === "pending");
  const activeLoans = mockLoans.filter(l => l.status === "active");

  const stats = [
    { label: "Pending Requests", value: pendingLoans.length, icon: Clock, color: "text-warning bg-warning/10" },
    { label: "Active Loans", value: activeLoans.length, icon: FileText, color: "text-primary bg-primary/10" },
    { label: "Overdue EMIs", value: mockOverdueLoans.length, icon: AlertTriangle, color: "text-destructive bg-destructive/10" },
    { label: "Total Members", value: mockMembers.length, icon: Users, color: "text-success bg-success/10" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-heading font-bold text-foreground">Loan Officer Dashboard</h1>
        <p className="text-muted-foreground text-sm mt-1">Review applications, record deposits, and manage overdue loans.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-card p-4 rounded-xl border border-border">
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${color}`}><Icon className="w-4 h-4" /></div>
              <div>
                <p className="text-lg font-heading font-bold text-foreground">{value}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="px-5 py-4 border-b border-border flex items-center justify-between">
          <h2 className="font-heading font-bold text-foreground">Pending Approvals</h2>
          <span className="text-xs font-bold text-warning bg-warning/10 px-2 py-0.5 rounded">{pendingLoans.length}</span>
        </div>
        {pendingLoans.length === 0 ? (
          <div className="p-12 text-center">
            <CheckCircle className="w-12 h-12 text-success/30 mx-auto mb-3" />
            <p className="font-heading font-semibold text-foreground">All caught up!</p>
          </div>
        ) : (
          <div className="divide-y divide-border">
            {pendingLoans.map(loan => (
              <div key={loan.id} className="p-4 hover:bg-secondary/30 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">{loan.member_name}</p>
                  <p className="text-[10px] text-muted-foreground">{loan.product.name} · {loan.repayment_duration_months} months</p>
                </div>
                <div className="text-right">
                  <p className="text-base font-heading font-bold text-foreground">{formatCurrency(loan.total_loan_amount)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
