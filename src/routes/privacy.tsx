import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Lock, FileCheck, UserCheck, Mail } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — RUNSMSL" },
      { name: "description", content: "How RUNSMSL collects, uses and protects member personal data, in line with the Nigeria Data Protection Act (NDPA) 2023." },
      { property: "og:title", content: "Privacy Policy — RUNSMSL" },
      { property: "og:description", content: "Our commitment to protecting members' personal data and privacy." },
      { property: "og:url", content: "https://runsmsl.lovable.app/privacy" },
    ],
    links: [
      { rel: "canonical", href: "https://runsmsl.lovable.app/privacy" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 sm:pt-28 pb-10 bg-gradient-to-br from-primary/5 via-background to-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            <ShieldCheck className="h-3.5 w-3.5 mr-1.5" /> Data Protection
          </Badge>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Your trust is everything to us. This policy explains how the Run Staff Cooperative
            Multipurpose Society Limited (RUNSMSL) collects, uses and protects your personal information.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-3">Last updated: April 28, 2026</p>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl space-y-10">
          {/* Promise cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: FileCheck, title: "Only what's essential", body: "We collect only the data needed for your membership, savings and loan services." },
              { icon: Lock, title: "Never sold or misused", body: "We will never sell your personal information or share it for unrelated purposes." },
              { icon: UserCheck, title: "You stay in control", body: "You can request access, corrections or deletion of your data at any time." },
              { icon: ShieldCheck, title: "Trusted partners only", body: "We work with vetted partners who meet strict data protection standards." },
            ].map((p) => (
              <div key={p.title} className="rounded-xl border border-border bg-card p-5">
                <p.icon className="h-6 w-6 text-primary mb-2" />
                <h2 className="font-heading font-semibold text-foreground mb-1">{p.title}</h2>
                <p className="text-sm text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>

          <Block title="1. Who we are">
            <p>
              The Run Staff Cooperative Multipurpose Society Limited ("RUNSMSL", "we", "us", "our") is a
              registered cooperative society serving staff of Redeemer's University, Ede, Osun State.
              We act as the data controller for personal data processed through our services and this website.
            </p>
          </Block>

          <Block title="2. Information we collect">
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Identity details — full name, staff ID, date of birth, gender, photograph.</li>
              <li>Contact details — email address, phone number, residential address.</li>
              <li>Membership & financial data — savings contributions, loan applications, repayments, guarantor details.</li>
              <li>Employment data — department, designation, salary scale (for loan eligibility).</li>
              <li>Technical data — IP address, browser type, device information and cookies when you use our website.</li>
            </ul>
          </Block>

          <Block title="3. How we use your information">
            <ul className="list-disc pl-5 space-y-1.5">
              <li>To register and manage your cooperative membership.</li>
              <li>To process savings, withdrawals, loan applications, repayments and dividends.</li>
              <li>To verify your identity and prevent fraud.</li>
              <li>To communicate notices, statements, AGM invitations and policy updates.</li>
              <li>To comply with legal, regulatory and audit obligations.</li>
              <li>To improve our website, services and member experience.</li>
            </ul>
          </Block>

          <Block title="4. Lawful basis for processing">
            <p>
              We process your data under the Nigeria Data Protection Act (NDPA) 2023 on the basis of: your
              consent, performance of your membership contract, compliance with legal obligations, and our
              legitimate interests as a cooperative society.
            </p>
          </Block>

          <Block title="5. Sharing your information">
            <p>We do not sell your data. We may share it only with:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>Authorised cooperative officials and trustees on a need-to-know basis.</li>
              <li>Banks and payment processors to execute transactions.</li>
              <li>Auditors, regulators and law enforcement where required by law.</li>
              <li>Service providers (e.g. hosting, email) bound by confidentiality and data protection terms.</li>
            </ul>
          </Block>

          <Block title="6. Data retention">
            <p>
              We keep personal data only for as long as needed for the purposes above and to meet legal,
              accounting and regulatory requirements. Member records are typically retained for the duration
              of membership and for a defined period thereafter, in line with applicable retention schedules.
            </p>
          </Block>

          <Block title="7. Data security">
            <p>
              Your data is protected behind multiple layers of administrative, technical and physical
              safeguards, including access controls, encryption in transit, secure backups and staff training.
            </p>
          </Block>

          <Block title="8. Your rights">
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Access — request a copy of the data we hold about you.</li>
              <li>Rectification — ask us to correct inaccurate or incomplete data.</li>
              <li>Erasure — request deletion where there is no overriding legal reason to keep it.</li>
              <li>Restriction & objection — limit or object to certain processing.</li>
              <li>Withdraw consent — at any time, where processing is based on consent.</li>
              <li>Lodge a complaint — with the Nigeria Data Protection Commission (NDPC).</li>
            </ul>
          </Block>

          <Block title="9. Children's data">
            <p>Our services are intended for adult staff members. We do not knowingly collect data from minors.</p>
          </Block>

          <Block title="10. Changes to this policy">
            <p>
              We may update this policy from time to time. Material changes will be communicated to members
              through the website or direct notice.
            </p>
          </Block>

          <Block title="11. Contact us">
            <p>
              For privacy questions or to exercise your rights, contact us at{" "}
              <a href="mailto:cooperative@run.edu.ng" className="text-primary underline underline-offset-2">
                cooperative@run.edu.ng
              </a>
              .
            </p>
            <a
              href="mailto:cooperative@run.edu.ng"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
            >
              <Mail className="h-4 w-4" /> Send us a message
            </a>
          </Block>

          <div className="pt-4 border-t border-border text-sm text-muted-foreground">
            See also our{" "}
            <Link to="/cookies" className="text-primary underline underline-offset-2">
              Cookie Policy
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
