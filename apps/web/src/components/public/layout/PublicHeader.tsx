/**
 * ============================================================
 * KELTA Enterprise Platform
 * Module      : Public Website
 * Component   : Public Header
 * Purpose     : Main navigation header for all public pages.
 * ============================================================
 */

import Link from 'next/link';

import { Logo } from '@/components/public/layout';

import { Button } from '@/components/ui/button';

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Organisation', href: '/organisation' },
  { label: 'Districts', href: '/districts' },
  { label: 'News', href: '/news' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Downloads', href: '/downloads' },
  { label: 'Contact', href: '/contact' },
];

export default function PublicHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-sky-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>

          <Button asChild>
            <Link href="/membership">
              Join KELTA
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}