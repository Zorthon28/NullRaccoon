import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const next = params.get("next") || "/";

  useEffect(() => {
    if (!auth.loading && auth.isSignedIn) {
      // If already signed in, go where they intended.
      navigate(next, { replace: true });
    }
  }, [auth.loading, auth.isSignedIn, navigate, next]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 px-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-white">
        <h1 className="text-2xl font-extrabold mb-2">Sign in</h1>
        <p className="text-sm text-gray-200 mb-6">
          Sign in with Google to access the neighborhood portal.
        </p>

        {!auth.isSupabaseConfigured && (
          <div className="text-sm text-yellow-200 bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-3 mb-5">
            Supabase isn’t configured. Set <b>REACT_APP_SUPABASE_URL</b> and{" "}
            <b>REACT_APP_SUPABASE_ANON_KEY</b>.
          </div>
        )}

        <button
          type="button"
          onClick={() => auth.signInWithGoogle(next)}
          disabled={!auth.isSupabaseConfigured}
          className="w-full py-3 rounded-xl font-semibold bg-white text-gray-900 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue with Google
        </button>

        {auth.error && (
          <p className="text-sm text-red-200 mt-4">
            {String(auth.error.message || auth.error)}
          </p>
        )}

        <p className="text-xs text-gray-300 mt-6">
          After signing in, access requires admin approval and neighborhood
          membership.
        </p>
      </div>
    </main>
  );
}
