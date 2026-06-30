'use client';

import {
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { AuthContext } from '@/contexts/AuthContext';

import { authService } from '@/lib/auth/auth.service';

import type { User } from '@/types/user';

interface Props {
  children: ReactNode;
}

export default function AuthProvider({
  children,
}: Props) {
  const [user, setUser] =
    useState<User | null>(null);

  const [loading, setLoading] =
    useState(true);

  const refresh =
    useCallback(async () => {
      setLoading(true);

      try {
        await authService.refresh();

        setUser(null);

        /**
         * Packet C
         *
         * Replace this with
         * Supabase session lookup.
         */
      } finally {
        setLoading(false);
      }
    }, []);

  useEffect(() => {
    const initialize = async () => {
      await refresh();
    };

    void initialize();
  }, [refresh]);

  return (
    <AuthContext.Provider
      value={{
        user,

        loading,

        authenticated:
          user !== null,

        refresh,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}