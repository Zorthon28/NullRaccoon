import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { supabase, isSupabaseConfigured } from "../lib/supabaseClient";
import { getNeighborhoodKeyFromHostname } from "../utils/neighborhood";

const POST_LOGIN_KEY = "post_login_redirect";

const AuthContext = createContext(null);

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return value;
}

async function fetchProfile(userId) {
  if (!supabase) return { profile: null, error: null };

  const { data, error } = await supabase
    .from("profiles")
    .select("id, approved, is_admin, role, neighborhood_key, neighborhood_id")
    .eq("id", userId)
    .maybeSingle();

  return { profile: data ?? null, error };
}

async function fetchNeighborhoodMembership(userId, neighborhoodKey) {
  if (!supabase || !neighborhoodKey) return { membership: null, error: null };

  // Optional table. If it doesn't exist, we treat it as "no membership".
  const { data, error } = await supabase
    .from("neighborhood_memberships")
    .select("user_id, neighborhood_key, approved")
    .eq("user_id", userId)
    .eq("neighborhood_key", neighborhoodKey)
    .maybeSingle();

  return { membership: data ?? null, error };
}

function computeAccess({ user, profile, membership, neighborhoodKey }) {
  const isSignedIn = Boolean(user);
  const isAdmin = Boolean(profile?.is_admin) || profile?.role === "admin";

  // Admin bypass.
  if (isSignedIn && isAdmin) {
    return {
      isSignedIn,
      isAdmin,
      isApproved: true,
      isNeighborhoodMember: true,
      neighborhoodKey,
      canAccessRestricted: true,
    };
  }

  const isApproved = Boolean(profile?.approved);

  // Prefer explicit memberships table if present.
  const hasMembershipRow = Boolean(membership);
  const isNeighborhoodMember = hasMembershipRow
    ? membership?.approved === true
    : profile?.neighborhood_key
      ? profile.neighborhood_key === neighborhoodKey
      : Boolean(profile?.neighborhood_id); // fallback if app uses a single neighborhood per site

  const canAccessRestricted = Boolean(
    isSignedIn && isApproved && isNeighborhoodMember,
  );

  return {
    isSignedIn,
    isAdmin,
    isApproved,
    isNeighborhoodMember,
    neighborhoodKey,
    canAccessRestricted,
  };
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [membership, setMembership] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const neighborhoodKey = useMemo(() => getNeighborhoodKeyFromHostname(), []);

  useEffect(() => {
    let isMounted = true;

    async function init() {
      try {
        setLoading(true);
        setError(null);

        if (!isSupabaseConfigured) {
          setSession(null);
          setUser(null);
          setProfile(null);
          setMembership(null);
          return;
        }

        const { data } = await supabase.auth.getSession();
        if (!isMounted) return;

        setSession(data.session);
        setUser(data.session?.user ?? null);
      } catch (e) {
        if (!isMounted) return;
        setError(e);
      } finally {
        if (!isMounted) return;
        setLoading(false);
      }
    }

    init();

    if (!supabase) return;

    const { data } = supabase.auth.onAuthStateChange(
      async (_event, nextSession) => {
        if (!isMounted) return;
        setSession(nextSession);
        setUser(nextSession?.user ?? null);
      },
    );

    return () => {
      isMounted = false;
      data?.subscription?.unsubscribe?.();
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function hydrateUserData() {
      if (!user || !isSupabaseConfigured) {
        setProfile(null);
        setMembership(null);
        return;
      }

      const { profile: nextProfile, error: profileError } = await fetchProfile(
        user.id,
      );
      if (!isMounted) return;

      if (profileError) {
        setError(profileError);
      }
      setProfile(nextProfile);

      const { membership: nextMembership, error: membershipError } =
        await fetchNeighborhoodMembership(user.id, neighborhoodKey);

      if (!isMounted) return;

      // If the memberships table doesn't exist, we don't hard-fail; we just fall back.
      if (membershipError) {
        const msg = String(membershipError.message || "");
        const looksLikeMissingTable =
          msg.includes("does not exist") ||
          msg.includes("relation") ||
          msg.includes("404");

        if (!looksLikeMissingTable) {
          setError(membershipError);
        }
        setMembership(null);
        return;
      }

      setMembership(nextMembership);
    }

    hydrateUserData();

    return () => {
      isMounted = false;
    };
  }, [user, neighborhoodKey]);

  const access = useMemo(
    () => computeAccess({ user, profile, membership, neighborhoodKey }),
    [user, profile, membership, neighborhoodKey],
  );

  const value = useMemo(
    () => ({
      session,
      user,
      profile,
      membership,
      neighborhoodKey,
      loading,
      error,
      isSupabaseConfigured,
      ...access,
      signInWithGoogle: async (nextPath = "/") => {
        if (!supabase) {
          throw new Error(
            "Supabase is not configured. Set REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY.",
          );
        }

        const safeNext = typeof nextPath === "string" ? nextPath : "/";
        sessionStorage.setItem(POST_LOGIN_KEY, safeNext);

        const redirectTo = window.location.origin + "/auth/callback";

        const { error: signInError } = await supabase.auth.signInWithOAuth({
          provider: "google",
          options: {
            redirectTo,
          },
        });

        if (signInError) throw signInError;
      },
      signOut: async () => {
        if (!supabase) return;
        await supabase.auth.signOut();
      },
      refresh: async () => {
        if (!supabase) return;
        const { data } = await supabase.auth.getSession();
        setSession(data.session);
        setUser(data.session?.user ?? null);
      },
    }),
    [
      session,
      user,
      profile,
      membership,
      neighborhoodKey,
      loading,
      error,
      access,
    ],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
