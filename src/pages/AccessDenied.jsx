import React from "react";
import { useAuth } from "../context/AuthContext";

export default function AccessDenied() {
  const auth = useAuth();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 px-6">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-white">
        <h1 className="text-2xl font-extrabold mb-2">Access restricted</h1>
        <p className="text-sm text-gray-200 mb-5">
          Your account can’t access this area yet.
        </p>

        <div className="text-sm text-gray-200 space-y-2">
          {!auth.isApproved && <p>- Waiting for admin approval.</p>}
          {!auth.isNeighborhoodMember && (
            <p>
              - Not a member of this neighborhood (
              {auth.neighborhoodKey || "unknown"}).
            </p>
          )}
        </div>

        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={() => auth.signOut()}
            className="px-4 py-2 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-100"
          >
            Sign out
          </button>
        </div>

        {auth.error && (
          <p className="text-xs text-red-200 mt-4">
            {String(auth.error.message || auth.error)}
          </p>
        )}
      </div>
    </main>
  );
}
