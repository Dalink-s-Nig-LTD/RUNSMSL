import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { mockApplications, formatCurrency } from "@/data/mockData";
import { CheckCircle, XCircle, UserPlus, Mail, Phone, Building2, Search } from "lucide-react";

export const Route = createFileRoute("/admin/applications")({
  head: () => ({ meta: [{ title: "Membership Applications — RUNSMSL Admin" }] }),
  component: AdminApplications,
});

type App = (typeof mockApplications)[number];
type AppStatus = "pending" | "approved" | "rejected";

function AdminApplications() {
  const [apps, setApps] = useState<(App & { status: AppStatus })[]>(mockApplications as (App & { status: AppStatus })[]);
  const [filter, setFilter] = useState<"all" | AppStatus>("pending");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<App | null>(null);

  const setStatus = (id: string, status: AppStatus) => {
    setApps(prev => prev.map(a => (a.id === id ? { ...a, status } : a)));
    setSelected(null);
  };

  const filtered = apps.filter(a => {
    if (filter !== "all" && a.status !== filter) return false;
    const q = search.toLowerCase();
    return !q || a.name.toLowerCase().includes(q) || a.email.toLowerCase().includes(q) || a.staff_id.toLowerCase().includes(q);
  });

  const pendingCount = apps.filter(a => a.status === "pending").length;

  const badgeClass = (s: AppStatus) =>
    s === "approved"
      ? "bg-success/10 text-success border border-success/20"
      : s === "rejected"
        ? "bg-destructive/10 text-destructive border border-destructive/20"
        : "bg-warning/10 text-warning border border-warning/20";

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row justify-between gap-3 sm:items-center">
        <div>
          <h1 className="text-xl sm:text-2xl font-heading font-bold text-foreground flex items-center gap-2">
            <UserPlus className="w-6 h-6 text-primary" />
            Membership Applications
          </h1>
          <p className="text-muted-foreground text-sm mt-1">Review and approve new member sign-ups.</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-warning/10 text-warning rounded-full text-xs font-bold border border-warning/20 self-start">
          {pendingCount} pending
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by name, email or staff ID..."
            className="w-full pl-9 pr-3 py-2.5 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div className="bg-card rounded-lg border border-border p-0.5 flex">
          {(["pending", "approved", "rejected", "all"] as const).map(k => (
            <button key={k} onClick={() => setFilter(k)} className={`flex-1 sm:flex-none px-3 py-1.5 rounded-md text-xs font-medium capitalize transition-colors ${filter === k ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              {k}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="bg-card rounded-xl border border-border p-12 text-center">
          <CheckCircle className="w-12 h-12 text-success/30 mx-auto mb-3" />
          <p className="font-heading font-semibold text-foreground">No applications match.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filtered.map(app => (
            <div key={app.id} className="bg-card rounded-xl border border-border p-4 hover:border-primary/30 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-primary/15 text-primary font-heading font-bold flex items-center justify-center shrink-0">
                    {app.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">{app.name}</p>
                    <p className="text-[10px] text-muted-foreground">{app.staff_id}</p>
                  </div>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${badgeClass(app.status)}`}>{app.status}</span>
              </div>
              <div className="space-y-1.5 text-xs text-muted-foreground mb-3">
                <p className="flex items-center gap-2"><Mail className="w-3 h-3" /> {app.email}</p>
                <p className="flex items-center gap-2"><Phone className="w-3 h-3" /> {app.phone}</p>
                <p className="flex items-center gap-2"><Building2 className="w-3 h-3" /> {app.department}</p>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Monthly Savings</p>
                  <p className="text-sm font-heading font-bold text-foreground">{formatCurrency(app.monthly_savings)}</p>
                </div>
                <button onClick={() => setSelected(app)} className="text-xs font-semibold text-primary hover:underline">Review →</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 bg-foreground/40 backdrop-blur-sm">
          <div className="bg-card rounded-xl border border-border w-full max-w-md shadow-xl">
            <div className="px-5 py-4 border-b border-border">
              <h3 className="font-heading font-bold text-foreground">Review Application</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{selected.name} — {selected.staff_id}</p>
            </div>
            <div className="p-5 space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-3">
                <div><p className="text-[10px] text-muted-foreground uppercase tracking-wider">Email</p><p className="text-foreground">{selected.email}</p></div>
                <div><p className="text-[10px] text-muted-foreground uppercase tracking-wider">Phone</p><p className="text-foreground">{selected.phone}</p></div>
                <div><p className="text-[10px] text-muted-foreground uppercase tracking-wider">Department</p><p className="text-foreground">{selected.department}</p></div>
                <div><p className="text-[10px] text-muted-foreground uppercase tracking-wider">Monthly Savings</p><p className="text-foreground">{formatCurrency(selected.monthly_savings)}</p></div>
              </div>
              <div className="bg-secondary/40 rounded-lg p-3 text-xs text-muted-foreground">
                Submitted {new Date(selected.submitted_at).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}
              </div>
            </div>
            <div className="px-5 py-3 border-t border-border flex justify-end gap-2">
              <button onClick={() => setSelected(null)} className="px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary rounded-md">Cancel</button>
              <button onClick={() => setStatus(selected.id, "rejected")} className="px-4 py-2 text-sm font-bold bg-destructive text-destructive-foreground hover:opacity-90 rounded-md inline-flex items-center gap-1.5"><XCircle className="w-4 h-4" /> Reject</button>
              <button onClick={() => setStatus(selected.id, "approved")} className="px-4 py-2 text-sm font-bold bg-primary text-primary-foreground hover:opacity-90 rounded-md inline-flex items-center gap-1.5"><CheckCircle className="w-4 h-4" /> Approve</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
