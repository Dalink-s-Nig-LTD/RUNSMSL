import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { mockLoans, formatCurrency } from "@/data/mockData";
import { ArrowLeft, Clock, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/member/loans/$id")({ component: LoanDetail });

function LoanDetail() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const loan = mockLoans.find(l => l.id === id);

  if (!loan) return <div className="p-8 text-muted-foreground">Loan not found</div>;

  const progress = loan.status === "cleared" ? 100 : loan.status === "pending" ? 0 : (loan.amount_paid / loan.total_repayment_amount) * 100;

  const installments = Array.from({ length: loan.repayment_duration_months }, (_, i) => {
    const date = new Date(loan.created_at);
    date.setMonth(date.getMonth() + i + 1);
    let remaining = loan.amount_paid - i * loan.monthly_installment;
    const status = loan.status === "pending" ? "pending" : remaining >= loan.monthly_installment ? "paid" : remaining > 0 ? "partial" : "due";
    return { id: i + 1, month: i + 1, date, amount: loan.monthly_installment, status };
  });

  return (
    <div className="max-w-5xl mx-auto space-y-5 sm:space-y-6 pb-8">
      <button onClick={() => navigate({ to: "/member/loans" })} className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="w-4 h-4 mr-1.5" />Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-card rounded-xl p-4 sm:p-5 border border-border">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary rounded-lg p-1.5 mb-4 border border-border flex items-center justify-center">
            <img src={loan.product.image_url} alt={loan.product.name} className="w-full h-full object-contain" />
          </div>
          <h2 className="font-heading font-bold text-foreground text-base sm:text-lg leading-tight mb-1">{loan.product.name}</h2>
          <p className="text-xs text-muted-foreground mb-4">Ref: #{loan.id.toUpperCase()}</p>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between pb-3 border-b border-border"><span className="text-muted-foreground">Duration</span><span className="font-medium text-foreground">{loan.repayment_duration_months} Months</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Monthly</span><span className="font-semibold text-foreground">{formatCurrency(loan.monthly_installment)}</span></div>
          </div>
          {loan.status !== "pending" && (
            <div className="mt-5 pt-4 border-t border-border">
              <div className="flex justify-between text-xs mb-1.5">
                <span className="font-medium text-muted-foreground">Progress</span>
                <span className="font-bold text-foreground">{Math.round(progress)}%</span>
              </div>
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${progress === 100 ? "bg-success" : "bg-primary"}`} style={{ width: `${progress}%` }} />
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-2 bg-card rounded-xl border border-border overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-border">
            <h2 className="font-heading font-bold text-foreground">Repayment Schedule</h2>
          </div>
          <div className="p-3 sm:p-4 space-y-2">
            {installments.map(inst => (
              <div key={inst.id} className={`flex items-center p-2.5 sm:p-3 rounded-lg border ${
                inst.status === "paid" ? "bg-success/5 border-success/15" :
                inst.status === "pending" ? "bg-card border-border opacity-50" :
                inst.status === "partial" ? "bg-primary/5 border-primary/15" :
                "bg-card border-border"
              }`}>
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                  inst.status === "paid" ? "bg-success/15 text-success" : "bg-secondary text-muted-foreground"
                }`}>
                  {inst.status === "paid" ? <CheckCircle className="w-3.5 h-3.5" /> : inst.month}
                </div>
                <div className="ml-2.5 sm:ml-3 flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-foreground">{inst.date.toLocaleDateString("en-US", { month: "short", year: "numeric" })}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs sm:text-sm font-semibold text-foreground">{formatCurrency(inst.amount)}</p>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">{inst.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Clock className="hidden" />
    </div>
  );
}
