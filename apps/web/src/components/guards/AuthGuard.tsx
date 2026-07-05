'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useAuth } from '@/hooks/useAuth';

interface Props {
  children: React.ReactNode;
}

export default function AuthGuard({
  children,
}: Props) {
  const router = useRouter();

  const {
    authenticated,
    loading,
  } = useAuth();

  useEffect(() => {
    if (!loading && !authenticated) {
      router.replace('/login');
    }
  }, [
    authenticated,
    loading,
    router,
  ]);

  if (loading) {
    return null;
  }

  if (!authenticated) {
    return null;
  }

  return <>{children}</>;
}
