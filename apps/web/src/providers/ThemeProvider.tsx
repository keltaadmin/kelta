'use client';

import { ReactNode } from 'react';

import { ThemeContext } from '@/contexts/ThemeContext';

interface Props {
  children: ReactNode;
}

export default function ThemeProvider({
  children,
}: Props) {
  return (
    <ThemeContext.Provider
      value={{
        theme: 'light',
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}