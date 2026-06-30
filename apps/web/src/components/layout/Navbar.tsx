/**
 * ============================================================
 * KELTA Enterprise Platform
 * Module      : Shared Layout
 * Component   : Navbar
 * Purpose     : Primary navigation for the public website
 * ============================================================
 */

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import { publicNavigation } from '@/data/navigation/public';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-sky-700"
        >
          KELTA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {publicNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-sky-600"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="text-sm font-medium text-slate-700 hover:text-sky-600"
          >
            Login
          </Link>

          <Link
            href="/membership"
            className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700"
          >
            Join KELTA
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((open) => !open)}
          className="rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="flex flex-col p-4">
            {publicNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {item.label}
              </Link>
            ))}

            <hr className="my-3" />

            <Link
              href="/login"
              className="rounded-md px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Login
            </Link>

            <Link
              href="/membership"
              className="mt-2 rounded-lg bg-sky-600 px-3 py-3 text-center text-sm font-semibold text-white hover:bg-sky-700"
            >
              Join KELTA
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}