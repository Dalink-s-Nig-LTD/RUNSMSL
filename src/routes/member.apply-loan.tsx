import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Calculator } from "lucide-react";
import { formatCurrency, calculateEMI, mockSettings } from "@/data/mockData";

export const Route = createFileRoute("/member/apply-loan")({ component: LoanApplication });

const PURPOSES = [
  { value: "emergency", label: "Emergency" },
  { value: "school_fees", label: "School Fees" },
  { value: "business", label: "Business" },
  { value: "medical", label: "Medical" },
  { value: "housing", label: "Housing" },
  { value: "other", label: "Other" },
];

function LoanApplication() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ amount: "", purpose: "", repayment_months: 6, description: "" });

  const amount = Number(form.amount) || 0;
  const emi = amount > 0 ? calculateEMI(amount, mockSettings.loan_interest_rate, form.repayment_months) : 0;
  const totalRepayment = emi * form.repayment_months;
  const totalInterest = totalRepayment - amount;
  const canSubmit = amount >= 10000 && form.purpose;

  const handleSubmit = () => {
    alert("Loan application submitted!");
    navigate({ to: "/member/loans" });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <button onClick={() => navigate({ to: "/member" })} className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="w-4 h-4 mr-1.5" />Back to Dashboard
      </button>

      <div>
        <h1 className="text-xl sm:text-2xl font-heading font-bold text-foreground">Apply for a Loan</h1>
        <p className="text-muted-foreground text-sm mt-1">Complete the form below to submit your loan application.</p>
      </div>

      <div className="bg-card rounded-xl border border-border p-5 sm:p-6 space-y-5">
        <div className="flex items-center gap-2"><Calculator className="w-5 h-5 text-primary" /><h2 className="font-heading font-bold text-foreground">Loan Details</h2></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1.5">Loan Amount (₦)</label>
            <input type="number" placeholder="e.g. 500000" value={form.amount} onChange={e => setForm({ ...form, amount: e.target.value })} className="w-full px-3 py-2.5 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1.5">Purpose</label>
            <select value={form.purpose} onChange={e => setForm({ ...form, purpose: e.target.value })} className="w-full px-3 py-2.5 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
              <option value="">Select purpose...</option>
              {PURPOSES.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5">Repayment Period</label>
          <div className="flex gap-2">
            {[3, 6, 9, 12].map(m => (
              <button key={m} onClick={() => setForm({ ...form, repayment_months: m })} className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-colors ${form.repayment_months === m ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"}`}>
                {m} Mo
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5">Additional Details (Optional)</label>
          <textarea placeholder="Describe why you need this loan..." value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className="w-full px-3 py-2.5 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none h-20" />
        </div>

        {amount > 0 && (
          <div className="bg-secondary/50 rounded-xl p-4 border border-border space-y-3">
            <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">Repayment Simulator</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-card p-3 rounded-lg border border-border">
                <p className="text-[10px] text-muted-foreground">Principal</p>
                <p className="text-sm font-heading font-bold text-foreground">{formatCurrency(amount)}</p>
              </div>
              <div className="bg-card p-3 rounded-lg border border-border">
                <p className="text-[10px] text-muted-foreground">Interest</p>
                <p className="text-sm font-heading font-bold text-warning">{formatCurrency(totalInterest)}</p>
              </div>
              <div className="bg-card p-3 rounded-lg border border-border">
                <p className="text-[10px] text-muted-foreground">Total</p>
                <p className="text-sm font-heading font-bold text-foreground">{formatCurrency(totalRepayment)}</p>
              </div>
              <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
                <p className="text-[10px] text-primary font-medium">Monthly EMI</p>
                <p className="text-sm font-heading font-bold text-primary">{formatCurrency(emi)}</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end">
          <button disabled={!canSubmit} onClick={handleSubmit} className="flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-bold hover:opacity-90 transition-all disabled:opacity-40">
            <Check className="w-4 h-4" /> Submit Application <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
