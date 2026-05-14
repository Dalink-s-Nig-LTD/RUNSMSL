import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Badge } from "@/components/ui/badge";
import { Cookie } from "lucide-react";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — RUNSMSL" },
      { name: "description", content: "How RUNSMSL uses cookies and similar technologies on our website, and how you can control them." },
      { property: "og:title", content: "Cookie Policy — RUNSMSL" },
      { property: "og:description", content: "Understand the cookies we use and manage your preferences." },
      { property: "og:url", content: "https://runsmsl.lovable.app/cookies" },
    ],
    links: [
      { rel: "canonical", href: "https://runsmsl.lovable.app/cookies" },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 sm:pt-28 pb-10 bg-gradient-to-br from-primary/5 via-background to-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            <Cookie className="h-3.5 w-3.5 mr-1.5" /> Cookies
          </Badge>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Cookie Policy
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            We respect your privacy and use cookies to enhance your experience on the RUNSMSL website.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-3">Last updated: April 28, 2026</p>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl space-y-10">
          <Block title="1. What are cookies?">
            <p>
              Cookies are small text files placed on your device when you visit a website. They help the
              site work properly, remember your preferences, and give us insight into how the site is used.
            </p>
          </Block>

          <Block title="2. Types of cookies we use">
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              {[
                { t: "Strictly necessary", d: "Required for core functions like signing in, navigation and security. These cannot be turned off." },
                { t: "Functional", d: "Remember your preferences (e.g. language, layout) to give you a better experience." },
                { t: "Analytics", d: "Help us understand how members use the site so we can improve it. Aggregated and anonymised." },
                { t: "Performance", d: "Monitor uptime, errors and page speed to keep the platform reliable." },
              ].map((c) => (
                <div key={c.t} className="rounded-xl border border-border bg-card p-4">
                  <h3 className="font-heading font-semibold text-foreground mb-1">{c.t}</h3>
                  <p className="text-sm text-muted-foreground">{c.d}</p>
                </div>
              ))}
            </div>
          </Block>

          <Block title="3. Third-party cookies">
            <p>
              Some pages may include content from trusted third parties (for example analytics providers).
              These providers may set their own cookies, governed by their own privacy policies.
            </p>
          </Block>

          <Block title="4. Managing your preferences">
            <p>
              When you first visit our site you can choose to <strong>Accept</strong> or <strong>Decline</strong>{" "}
              non-essential cookies via the consent banner. You can also control or delete cookies at any
              time through your browser settings. Disabling some cookies may affect site functionality.
            </p>
            <button
              type="button"
              onClick={() => {
                try {
                  localStorage.removeItem("runsmsl-cookie-consent");
                  window.location.reload();
                } catch {}
              }}
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
            >
              Reset cookie preferences
            </button>
          </Block>

          <Block title="5. Changes to this policy">
            <p>We may update this Cookie Policy occasionally. Please check back for the latest version.</p>
          </Block>

          <Block title="6. Contact">
            <p>
              Questions about cookies or privacy? Email{" "}
              <a href="mailto:cooperative@run.edu.ng" className="text-primary underline underline-offset-2">
                cooperative@run.edu.ng
              </a>
              .
            </p>
          </Block>

          <div className="pt-4 border-t border-border text-sm text-muted-foreground">
            See also our{" "}
            <Link to="/privacy" className="text-primary underline underline-offset-2">
              Privacy Policy
            </Link>
            .
          </div>
        </div>
      </section>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-3">{title}</h2>
      <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-2">{children}</div>
    </div>
  );
}
