import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { CheckCircle, DollarSign, UserRound } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

import { PortalLayout } from "@/components/PortalLayout";
import { formatCurrency } from "@/data/mockData";

export const Route = createFileRoute("/officer")({
  head: () => ({ meta: [{ title: "Officer Portal — RUNSMSL" }] }),
  component: OfficerDashboard,
});

type DepositForm = {
  memberExternalId: string;
  amount: string;
  note: string;
  kind: "mandatory" | "voluntary";
};

const emptyForm: DepositForm = {
  memberExternalId: "",
  amount: "",
  note: "Savings deposit",
  kind: "mandatory",
};

function OfficerDashboard() {
  const members = useQuery(api.members.listByRole, { role: "member" }) ?? [];
  const transactions = useQuery(api.transactions.listAll) ?? [];
  const recordDeposit = useMutation(api.transactions.recordDeposit);
  const [form, setForm] = useState<DepositForm>(emptyForm);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selectedMember = useMemo(
    () => members.find((member) => member.externalId === form.memberExternalId) ?? null,
    [form.memberExternalId, members],
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const amount = Number(form.amount);
    if (!form.memberExternalId || !form.note.trim() || Number.isNaN(amount) || amount <= 0) {
      setError("Pick a member and enter a valid amount.");
      return;
    }

    setBusy(true);
    try {
      await recordDeposit({
        memberExternalId: form.memberExternalId,
        amount,
        note: form.note.trim(),
        kind: form.kind,
      });
      setForm(emptyForm);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to record deposit");
    } finally {
      setBusy(false);
    }
  };

  return (
    <PortalLayout role="officer">
      <div className="space-y-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-heading font-bold text-foreground">Officer Dashboard</h1>
          <p className="text-muted-foreground text-sm mt-1">Record deposits and review recent activity.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border p-4 sm:p-6 space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-1 text-sm">
              <span className="text-muted-foreground">Member</span>
              <select className="w-full rounded-lg border border-border bg-background px-3 py-2" value={form.memberExternalId} onChange={(e) => setForm((current) => ({ ...current, memberExternalId: e.target.value }))}>
                <option value="">Select member</option>
                {members.map((member) => (
                  <option key={member.externalId} value={member.externalId}>
                    {member.name} · {member.externalId}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-1 text-sm">
              <span className="text-muted-foreground">Amount</span>
              <input type="number" step="0.01" className="w-full rounded-lg border border-border bg-background px-3 py-2" value={form.amount} onChange={(e) => setForm((current) => ({ ...current, amount: e.target.value }))} />
            </label>
            <label className="space-y-1 text-sm">
              <span className="text-muted-foreground">Deposit type</span>
              <select className="w-full rounded-lg border border-border bg-background px-3 py-2" value={form.kind} onChange={(e) => setForm((current) => ({ ...current, kind: e.target.value as DepositForm["kind"] }))}>
                <option value="mandatory">Mandatory</option>
                <option value="voluntary">Voluntary</option>
              </select>
            </label>
            <label className="space-y-1 text-sm">
              <span className="text-muted-foreground">Note</span>
              <input className="w-full rounded-lg border border-border bg-background px-3 py-2" value={form.note} onChange={(e) => setForm((current) => ({ ...current, note: e.target.value }))} />
            </label>
          </div>

          {selectedMember && (
            <div className="rounded-lg border border-border bg-secondary/30 px-4 py-3 text-sm text-muted-foreground flex items-center gap-2">
              <UserRound className="w-4 h-4" />
              Selected member: <span className="font-medium text-foreground">{selectedMember.name}</span> · Balance {formatCurrency(selectedMember.savings_balance)}
            </div>
          )}

          {error && <div className="rounded-lg border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">{error}</div>}

          <button disabled={busy} className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50">
            <DollarSign className="w-4 h-4" />
            Record deposit
          </button>
        </form>

        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="px-4 sm:px-6 py-4 border-b border-border flex items-center justify-between">
            <div>
              <h2 className="font-heading font-semibold text-foreground">Recent transactions</h2>
              <p className="text-xs text-muted-foreground">Latest {transactions.length} entries</p>
            </div>
          </div>
          {transactions.length === 0 ? (
            <div className="p-8 text-sm text-muted-foreground">No transactions yet.</div>
          ) : (
            <div className="divide-y divide-border">
              {transactions.slice(0, 10).map((transaction) => (
                <div key={transaction.externalId} className="p-4 sm:p-6 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="font-medium text-foreground">{transaction.title}</p>
                    <p className="text-xs text-muted-foreground">{transaction.type} · {transaction.date}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-semibold text-foreground">{formatCurrency(transaction.amount)}</p>
                    <p className="text-xs text-muted-foreground">{transaction.reference}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="text-sm text-muted-foreground flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-success" />
          Deposits create transaction, contribution, and audit records in Convex.
        </div>
      </div>
    </PortalLayout>
  );
}
