import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "convex/react";
import { Clock, ShieldAlert, AlertCircle, Info } from "lucide-react";

export const Route = createFileRoute("/admin/audit")({ component: AdminAuditLog });

function AdminAuditLog() {
  const auditLogs = (useQuery("auditLogs:list") as Array<any> | undefined) ?? [];

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
        {auditLogs.length === 0 ? (
          <div className="p-8 text-sm text-muted-foreground">No audit entries yet.</div>
        ) : auditLogs.map(log => (
          <div key={log.externalId} className="p-4 hover:bg-secondary/30">
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
