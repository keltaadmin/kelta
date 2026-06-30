import type { Metadata } from 'next';
import './globals.css';
import AppProvider from '@/providers/AppProvider';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: 'KELTA',
  description:
    'Kerala Local Body Technical Assistants Association',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col">
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}