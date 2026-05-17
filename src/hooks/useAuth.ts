import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { type Member } from "@/lib/domain";

export type User = Member | null;

function getSessionToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("sessionToken");
}

export function useCurrentUser() {
  const token = getSessionToken();
  const user = useQuery(api.authLocal.currentByToken, token ? { token } : "skip") as User | undefined;
  return { user: user ?? null };
}

export function useLocalAuth() {
  const logoutMutation = useMutation(api.authLocal.logout);

  const logoutLocal = async () => {
    const token = getSessionToken();
    if (token) {
      try {
        await logoutMutation({ token });
      } catch {
        // Ignore logout errors and clear the client session either way.
      }
    }
    localStorage.removeItem("sessionToken");
    window.location.href = "/login";
  };

  return { logoutLocal };
}

export default useCurrentUser;