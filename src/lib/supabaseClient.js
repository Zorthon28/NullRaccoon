import { createClient } from "@supabase/supabase-js";

// CRA only exposes env vars prefixed with REACT_APP_ at build time.
// However, some deployments (Next.js-style) already define NEXT_PUBLIC_*.
// Support both so Netlify users don't have to duplicate env vars.
const supabaseUrl =
  process.env.REACT_APP_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey =
  process.env.REACT_APP_SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
