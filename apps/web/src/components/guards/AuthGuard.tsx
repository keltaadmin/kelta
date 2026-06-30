'use client';

import {
  ReactNode,
} from 'react';

import {
  useRouter,
} from 'next/navigation';

import {
  useEffect,
} from 'react';

import {
  useAuth,
} from '@/hooks/useAuth';

interface Props {

  children: ReactNode;

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

    if (
      !loading &&
      !authenticated
    ) {

      router.replace('/login');

    }

  }, [
    authenticated,
    loading,
    router,
  ]);

  if (
    loading ||
    !authenticated
  ) {

    return null;

  }

  return <>{children}</>;

}