'use client';

import {
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { AuthContext } from '@/contexts/AuthContext';

import { authRepository } from '@/lib/auth/auth.repository';
import { getSupabaseClient } from '@/lib/supabase/client';

import type { User } from '@/types/user';

interface Props {
  children: ReactNode;
}

export default function AuthProvider({
  children,
}: Props) {
  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);

  /**
   * Refreshes the authenticated user state.
   */
  const refresh = useCallback(async (): Promise<void> => {
    setLoading(true);

    try {
      const authenticated =
        await authRepository.refreshSession();

      if (!authenticated) {
        setUser(null);
        return;
      }

      const currentUser =
        await authRepository.currentUser();

      setUser(currentUser);
    } catch (error) {
      console.error(
        'Authentication refresh failed:',
        error,
      );

      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Initial authentication state.
   */
  const initialize = useCallback(async (): Promise<void> => {
    await refresh();
  }, [refresh]);

  useEffect(() => {
    const supabase = getSupabaseClient();

    let mounted = true;

    void (async () => {
      if (mounted) {
        await initialize();
      }
    })();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event) => {
      switch (event) {
        case 'INITIAL_SESSION':
        case 'SIGNED_IN':
        case 'SIGNED_OUT':
        case 'TOKEN_REFRESHED':
        case 'USER_UPDATED':
          if (mounted) {
            await refresh();
          }
          break;

        default:
          break;
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [initialize, refresh]);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        authenticated: user !== null,
        refresh,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
