import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AccessDenied from "../pages/AccessDenied";

export default function RequireAccess({ children }) {
  const auth = useAuth();
  const location = useLocation();

  // While bootstrapping, avoid flicker.
  if (auth.loading) {
    return null;
  }

  if (!auth.isSupabaseConfigured) {
    // If Supabase isn't configured, keep the site usable in dev.
    return children;
  }

  if (!auth.isSignedIn) {
    const next = encodeURIComponent(location.pathname + location.search);
    return <Navigate to={`/login?next=${next}`} replace />;
  }

  if (!auth.canAccessRestricted) {
    return <AccessDenied />;
  }

  return children;
}
