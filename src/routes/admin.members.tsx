import { createFileRoute } from "@tanstack/react-router";
import { mockMembers, formatCurrency } from "@/data/mockData";

export const Route = createFileRoute("/admin/members")({ component: AdminMembers });

function AdminMembers() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-heading font-bold text-foreground">Members</h1>
        <p className="text-muted-foreground text-sm mt-1">Manage platform members and permissions.</p>
      </div>
      <div className="bg-card rounded-xl border border-border overflow-hidden divide-y divide-border">
        {mockMembers.map(m => (
          <div key={m.id} className="p-4 hover:bg-secondary/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/15 text-primary font-heading font-bold text-xs flex items-center justify-center">
                {m.name.split(" ").map(n => n[0]).join("").substring(0, 2)}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{m.name}</p>
                <p className="text-[10px] text-muted-foreground">{m.email} · {m.role}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-foreground">{formatCurrency(m.savings_balance)}</p>
              <span className={`text-[10px] font-bold uppercase ${m.status === "active" ? "text-success" : "text-destructive"}`}>{m.status.replace("_", " ")}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
