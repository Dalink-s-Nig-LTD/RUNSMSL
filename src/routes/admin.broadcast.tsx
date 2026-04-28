import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { mockBroadcasts } from "@/data/mockData";
import { Megaphone, Send, Users, CheckCircle, Trash2 } from "lucide-react";

export const Route = createFileRoute("/admin/broadcast")({
  head: () => ({ meta: [{ title: "Broadcast Announcements — RUNSMSL Admin" }] }),
  component: AdminBroadcast,
});

type Broadcast = (typeof mockBroadcasts)[number];

function AdminBroadcast() {
  const [broadcasts, setBroadcasts] = useState<Broadcast[]>(mockBroadcasts);
  const [form, setForm] = useState({ title: "", body: "", audience: "all" });
  const [success, setSuccess] = useState(false);

  const handleSend = () => {
    if (!form.title.trim() || !form.body.trim()) return;
    const newB: Broadcast = {
      id: `b${Date.now()}`,
      title: form.title.trim(),
      body: form.body.trim(),
      audience: form.audience,
      sent_at: new Date().toISOString(),
      sent_by: "Mrs. Adaeze",
    };
    setBroadcasts([newB, ...broadcasts]);
    setForm({ title: "", body: "", audience: "all" });
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2500);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Delete this announcement?")) setBroadcasts(broadcasts.filter(b => b.id !== id));
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl sm:text-2xl font-heading font-bold text-foreground flex items-center gap-2">
          <Megaphone className="w-6 h-6 text-primary" />
          Broadcast Announcements
        </h1>
        <p className="text-muted-foreground text-sm mt-1">Send notifications to all members or specific groups.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-card rounded-xl border border-border p-5 sm:p-6">
          <h2 className="font-heading font-bold text-foreground mb-4 flex items-center gap-2">
            <Send className="w-5 h-5 text-primary" /> New Announcement
          </h2>
          {success && (
            <div className="mb-4 p-3 rounded-lg bg-success/10 border border-success/20 text-success text-xs font-medium flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> Announcement sent successfully.
            </div>
          )}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">Title</label>
              <input
                value={form.title}
                onChange={e => setForm({ ...form, title: e.target.value.slice(0, 100) })}
                placeholder="e.g. AGM 2026 Notice"
                maxLength={100}
                className="w-full px-3 py-2.5 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <p className="text-[10px] text-muted-foreground mt-1">{form.title.length}/100</p>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">Message</label>
              <textarea
                value={form.body}
                onChange={e => setForm({ ...form, body: e.target.value.slice(0, 1000) })}
                rows={6}
                placeholder="Write the announcement body..."
                maxLength={1000}
                className="w-full px-3 py-2.5 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              />
              <p className="text-[10px] text-muted-foreground mt-1">{form.body.length}/1000</p>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">Audience</label>
              <select
                value={form.audience}
                onChange={e => setForm({ ...form, audience: e.target.value })}
                className="w-full px-3 py-2.5 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none"
              >
                <option value="all">All users</option>
                <option value="members">Members only</option>
                <option value="officers">Loan officers</option>
                <option value="executives">Executives</option>
              </select>
            </div>
            <button
              onClick={handleSend}
              disabled={!form.title.trim() || !form.body.trim()}
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg text-sm font-bold hover:opacity-90 transition-all disabled:opacity-40 inline-flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" /> Send Announcement
            </button>
          </div>
        </div>

        <div className="bg-card rounded-xl border border-border p-5 sm:p-6">
          <h2 className="font-heading font-bold text-foreground mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" /> Recent Broadcasts
          </h2>
          <div className="space-y-3 max-h-[480px] overflow-y-auto">
            {broadcasts.length === 0 ? (
              <p className="text-sm text-muted-foreground italic text-center py-8">No announcements sent yet.</p>
            ) : broadcasts.map(b => (
              <div key={b.id} className="p-3.5 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 transition-colors">
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <p className="text-sm font-semibold text-foreground">{b.title}</p>
                  <button onClick={() => handleDelete(b.id)} className="text-muted-foreground hover:text-destructive shrink-0">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{b.body}</p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-border/60">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-primary">{b.audience}</span>
                  <span className="text-[10px] text-muted-foreground">
                    {new Date(b.sent_at).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })} · {b.sent_by}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
