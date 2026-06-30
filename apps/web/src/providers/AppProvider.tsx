'use client';

import { ReactNode } from 'react';

import ThemeProvider from './ThemeProvider';
import AuthProvider from './AuthProvider';

interface Props {
  children: ReactNode;
}

export default function AppProvider({
  children,
}: Props) {
  return (
    <ThemeProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </ThemeProvider>
  );
}