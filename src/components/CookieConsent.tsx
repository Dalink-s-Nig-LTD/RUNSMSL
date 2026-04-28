import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "runsmsl-cookie-consent";

export const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const t = setTimeout(() => setVisible(true), 600);
        return () => clearTimeout(t);
      }
    } catch {}
  }, []);

  const decide = (choice: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ choice, ts: Date.now() }));
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-3 left-3 right-3 sm:left-6 sm:right-auto sm:bottom-6 sm:max-w-md z-[60] animate-in fade-in slide-in-from-bottom-4">
      <div className="rounded-2xl border border-border bg-card shadow-2xl p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Cookie className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-heading font-semibold text-foreground text-sm">
              Privacy & Cookie Policy
            </h3>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              We respect your privacy and use cookies to enhance your experience.{" "}
              <Link to="/privacy" className="text-primary underline underline-offset-2">
                View our Privacy Policy
              </Link>{" "}
              for detailed information.
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-3">
              <Button size="sm" onClick={() => decide("accepted")}>Accept All</Button>
              <Button size="sm" variant="outline" onClick={() => decide("declined")}>Decline</Button>
              <Link to="/cookies" className="text-xs text-muted-foreground underline underline-offset-2 ml-1">
                Cookie settings
              </Link>
            </div>
          </div>
          <button
            type="button"
            onClick={() => decide("declined")}
            aria-label="Close"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
