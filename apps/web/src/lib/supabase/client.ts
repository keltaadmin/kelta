import {
  createClient,
} from '@supabase/supabase-js';

import type {
  AppSupabaseClient,
} from '@/types/supabase';

let client:
  | AppSupabaseClient
  | undefined;

function getConfig() {
  const url =
    process.env.NEXT_PUBLIC_SUPABASE_URL;

  const anonKey =
    process.env
      .NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error(
      'Supabase environment variables are missing.'
    );
  }

  return {
    url,
    anonKey,
  };
}

export function getSupabaseClient() {
  if (client) {
    return client;
  }

  const config =
    getConfig();

  client =
    createClient(
      config.url,
      config.anonKey
    ) as AppSupabaseClient;

  return client;
}

/*
Temporary compatibility export.

Will be removed after the
authentication migration is complete.
*/

export const supabase =
  getSupabaseClient();