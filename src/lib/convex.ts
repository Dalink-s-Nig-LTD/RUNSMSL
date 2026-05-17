import { ConvexReactClient } from "convex/react";

// Initialize Convex React client from Vite env var. Defaults to empty (no backend).
const convexUrl = typeof import.meta !== "undefined" ? (import.meta.env?.VITE_CONVEX_URL as string | undefined) : undefined;

export const convexClient: any = convexUrl ? new ConvexReactClient(convexUrl) : null;
export const hasConvexBackend = Boolean(convexClient);

export function createConvexClient(url?: string) {
  if (!url) return null;
  return new ConvexReactClient(url);
}

export default convexClient;
