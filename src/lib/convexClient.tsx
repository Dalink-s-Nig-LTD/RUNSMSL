import React, { PropsWithChildren } from "react";

// Minimal scaffold for Convex integration.
// Replace with the real Convex client/provider when ready.

type ConvexProviderProps = PropsWithChildren<{}> & { url?: string };

export function ConvexProvider({ children }: ConvexProviderProps) {
  // TODO: initialize real Convex client here, e.g.:
  // import { ConvexProvider } from "convex/react";
  // const client = new ConvexHttpClient(import.meta.env.VITE_CONVEX_URL || "");
  // return <ConvexProvider client={client}>{children}</ConvexProvider>;

  return <>{children}</>;
}

export default ConvexProvider;
