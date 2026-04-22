import { createFileRoute } from "@tanstack/react-router";
import { Clock, ShieldAlert, AlertCircle, Info } from "lucide-react";

export const Route = createFileRoute("/admin/audit")({ component: AdminAuditLog });

const AUDIT_DATA = [
  { id: 1, time: "Apr 7, 2026 09:14", user: "Mrs. Adaeze (Admin)", action: "Approved loan LN-0049", ip: "41.58.12.33", level: "info" },
  { id: 2, time: "Apr 6, 2026 16:02", user: "Mrs. Adaeze (Admin)", action: "Rejected loan LN-0048 — Exceeds credit limit", ip: "41.58.12.33", level: "warning" },
  { id: 3, time: "Apr 5, 2026 11:30", user: "Emmanuel (Super Admin)", action: "Placed account RU/2020/0078 on Hold", ip: "105.22.44.11", level: "danger" },
  { id: 4, time: "Apr 4, 2026 14:55", user: "Mrs. Adaeze (Admin)", action: "Added product: Binatone Standing Fan", ip: "41.58.12.33", level: "info" },
  { id: 5, time: "Apr 3, 2026 09:00", user: "c.adeyemi@run.edu.ng (Member)", action: "Login from new device", ip: "197.210.55.99", level: "info" },
];

function AdminAuditLog() {
  const getLevelIcon = (level: string) => {
    if (level === "danger") return <ShieldAlert className="w-4 h-4 text-destructive" />;
    if (level === "warning") return <AlertCircle className="w-4 h-4 text-warning" />;
    return <Info className="w-4 h-4 text-primary" />;
  };
  const getLevelBg = (level: string) => level === "danger" ? "bg-destructive/10" : level === "warning" ? "bg-warning/10" : "bg-primary/10";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-heading font-bold text-foreground">Audit Log</h1>
        <p className="text-muted-foreground text-sm mt-1">Review system activities and admin actions.</p>
      </div>
      <div className="bg-card rounded-xl border border-border overflow-hidden divide-y divide-border">
        {AUDIT_DATA.map(log => (
          <div key={log.id} className="p-4 hover:bg-secondary/30">
            <div className="flex items-start gap-3">
              <div className={`p-1.5 rounded-md shrink-0 ${getLevelBg(log.level)}`}>{getLevelIcon(log.level)}</div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{log.action}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{log.user}</p>
                <div className="flex items-center gap-3 mt-2 text-[10px] text-muted-foreground">
                  <span className="flex items-center"><Clock className="w-3 h-3 mr-1" />{log.time}</span>
                  <span className="font-mono bg-secondary px-1.5 py-0.5 rounded">{log.ip}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
