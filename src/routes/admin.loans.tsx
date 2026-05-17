import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { CheckCircle, Clock, XCircle } from "lucide-react";
import { useState } from "react";

import { formatCurrency } from "@/data/mockData";

export const Route = createFileRoute("/admin/loans")({ component: AdminLoans });

function AdminLoans() {
  const loans = useQuery(api.loans.listAll) ?? [];
  const reviewLoan = useMutation(api.loans.reviewLoan);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const pendingLoans = loans.filter((loan) => loan.status === "pending");

  const handleReview = async (externalId: string, status: "active" | "rejected") => {
    setBusyId(externalId);
    setError(null);
    try {
      await reviewLoan({ externalId, status });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to review loan");
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-heading font-bold text-foreground">Loan Requests</h1>
        <p className="text-muted-foreground text-sm mt-1">Review and manage member loan applications.</p>
      </div>

      {error && (
        <div className="rounded-lg border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </div>
      )}

      {pendingLoans.length === 0 ? (
        <div className="bg-card rounded-xl border border-border p-12 text-center">
          <CheckCircle className="w-12 h-12 text-success/30 mx-auto mb-3" />
          <p className="font-heading font-semibold text-foreground">No pending loans.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {pendingLoans.map((loan) => (
            <div key={loan.externalId} className="bg-card rounded-xl border border-border p-4 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">{loan.member_name}</p>
                <p className="text-xs text-muted-foreground truncate">{loan.product_name} · {loan.purpose}</p>
                <p className="text-sm font-semibold text-foreground mt-2">{formatCurrency(loan.total_loan_amount)}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="px-2 py-1 rounded-full text-[10px] font-bold uppercase bg-warning/10 text-warning border border-warning/20 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> Pending
                </span>
                <button
                  onClick={() => void handleReview(loan.externalId, "rejected")}
                  disabled={busyId === loan.externalId}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-medium text-destructive hover:bg-destructive/10 disabled:opacity-50"
                >
                  <XCircle className="w-3.5 h-3.5" /> Reject
                </button>
                <button
                  onClick={() => void handleReview(loan.externalId, "active")}
                  disabled={busyId === loan.externalId}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50"
                >
                  <CheckCircle className="w-3.5 h-3.5" /> Approve
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="text-sm text-muted-foreground">
        Reviewed loans persist to Convex and emit an audit log entry automatically.
      </div>
    </div>
  );
}
