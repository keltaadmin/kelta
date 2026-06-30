import type {
  SupabaseClient,
} from '@supabase/supabase-js';

/**
 * Temporary placeholder until
 * Supabase generated types
 * are added.
 */
export type Database = Record<string, never>;

export type AppSupabaseClient =
  SupabaseClient<Database>;

export interface SupabaseConfig {
  url: string;
  anonKey: string;
}