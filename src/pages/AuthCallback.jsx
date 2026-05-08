import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase, isSupabaseConfigured } from "../lib/supabaseClient";

const POST_LOGIN_KEY = "post_login_redirect";

export default function AuthCallback() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function finishSignIn() {
      try {
        if (!isSupabaseConfigured || !supabase) {
          return;
        }

        const url = new URL(window.location.href);
        const code = url.searchParams.get("code");

        // For PKCE, Supabase returns `code`.
        if (code) {
          const { error: exchangeError } =
            await supabase.auth.exchangeCodeForSession(code);
          if (exchangeError) throw exchangeError;
        }

        const next = sessionStorage.getItem(POST_LOGIN_KEY) || "/";
        sessionStorage.removeItem(POST_LOGIN_KEY);
        if (!isMounted) return;

        navigate(next, { replace: true });
      } catch (e) {
        if (!isMounted) return;
        setError(e);
      }
    }

    finishSignIn();

    return () => {
      isMounted = false;
    };
  }, [navigate]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 px-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-white">
        <h1 className="text-2xl font-extrabold mb-2">Signing you in…</h1>
        <p className="text-sm text-gray-200">
          Finishing authentication. You’ll be redirected automatically.
        </p>

        {error && (
          <p className="text-sm text-red-200 mt-4">
            {String(error.message || error)}
          </p>
        )}

        {!isSupabaseConfigured && (
          <p className="text-sm text-yellow-200 mt-4">
            Supabase isn’t configured.
          </p>
        )}
      </div>
    </main>
  );
}
