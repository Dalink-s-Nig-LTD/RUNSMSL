import { HeadContent, Outlet, Scripts, Link, createRootRoute } from "@tanstack/react-router";
import { ConvexAuthProvider } from "@convex-dev/auth/react";

import appCss from "../styles.css?url";
import { CookieConsent } from "@/components/CookieConsent";
import { convexClient } from "@/lib/convex";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "RUNSMSL" },
      { name: "description", content: "RUN Cooperative Society - Run Staff Cooperative Multipurpose Society Limited" },
      { name: "author", content: "RUNSMSL" },
      { property: "og:title", content: "RUNSMSL" },
      { property: "og:description", content: "RUN Cooperative Society - Run Staff Cooperative Multipurpose Society Limited" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "RUNSMSL" },
      { name: "twitter:description", content: "RUN Cooperative Society" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  const content = (
    <>
      <Outlet />
      <CookieConsent />
      <Scripts />
    </>
  );

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {convexClient ? <ConvexAuthProvider client={convexClient}>{content}</ConvexAuthProvider> : content}
      </body>
    </html>
  );
}
