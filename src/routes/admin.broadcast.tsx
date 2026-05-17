import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Megaphone, Send } from "lucide-react";
import { FormEvent, useState } from "react";

export const Route = createFileRoute("/admin/broadcast")({ component: AdminBroadcast });

function AdminBroadcast() {
  const broadcasts = useQuery(api.broadcasts.list) ?? [];
  const sendBroadcast = useMutation(api.broadcasts.send);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [audience, setAudience] = useState("all members");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setBusy(true);
    try {
      await sendBroadcast({ title: title.trim(), body: body.trim(), audience: audience.trim() });
      setTitle("");
      setBody("");
      setAudience("all members");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send broadcast");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-heading font-bold text-foreground">Broadcasts</h1>
        <p className="text-muted-foreground text-sm mt-1">Send announcements and store them in Convex.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border p-4 sm:p-6 space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-1 text-sm">
            <span className="text-muted-foreground">Title</span>
            <input className="w-full rounded-lg border border-border bg-background px-3 py-2" value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <label className="space-y-1 text-sm">
            <span className="text-muted-foreground">Audience</span>
            <input className="w-full rounded-lg border border-border bg-background px-3 py-2" value={audience} onChange={(e) => setAudience(e.target.value)} />
          </label>
          <label className="space-y-1 text-sm md:col-span-2">
            <span className="text-muted-foreground">Message</span>
            <textarea className="w-full rounded-lg border border-border bg-background px-3 py-2 min-h-28" value={body} onChange={(e) => setBody(e.target.value)} />
          </label>
        </div>

        {error && <div className="rounded-lg border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">{error}</div>}

        <button disabled={busy} className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50">
          <Send className="w-4 h-4" />
          Send broadcast
        </button>
      </form>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="px-4 sm:px-6 py-4 border-b border-border flex items-center justify-between">
          <div>
            <h2 className="font-heading font-semibold text-foreground">Recent broadcasts</h2>
            <p className="text-xs text-muted-foreground">{broadcasts.length} persisted messages</p>
          </div>
        </div>
        {broadcasts.length === 0 ? (
          <div className="p-8 text-sm text-muted-foreground">No broadcasts yet.</div>
        ) : (
          <div className="divide-y divide-border">
            {broadcasts.map((broadcast) => (
              <div key={broadcast.externalId} className="p-4 sm:p-6 space-y-2">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-md bg-primary/10 p-1.5 text-primary"><Megaphone className="w-4 h-4" /></div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-foreground">{broadcast.title}</p>
                    <p className="text-xs text-muted-foreground">{broadcast.audience} · {broadcast.sent_by} · {broadcast.sent_at}</p>
                    <p className="text-sm text-muted-foreground mt-2 whitespace-pre-wrap">{broadcast.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
