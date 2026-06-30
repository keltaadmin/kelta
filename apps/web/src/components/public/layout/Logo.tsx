/**
 * ============================================================
 * KELTA Enterprise Platform
 * Module      : Public Website
 * Component   : Logo
 * Purpose     : Official reusable KELTA branding component.
 * ============================================================
 */

import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
  compact?: boolean;
  href?: string;
};

export default function Logo({
  compact = false,
  href = '/',
}: LogoProps) {
  const content = (
    <div className="flex items-center gap-4">
      <div className="relative h-14 w-14 flex-shrink-0">
        <Image
          src="/images/branding/kelta-logo.png"
          alt="KELTA Logo"
          fill
          sizes="56px"
          priority
          className="object-contain"
        />
      </div>

      {!compact && (
        <div className="leading-tight">
          <h1 className="text-xl font-extrabold tracking-wide text-slate-900">
            KELTA
          </h1>

          <p className="text-xs text-slate-500">
            Kerala Local Body Technical
          </p>

          <p className="text-xs text-slate-500">
            Assistants Association
          </p>
        </div>
      )}
    </div>
  );

  return (
    <Link
      href={href}
      aria-label="KELTA Home"
      className="transition-opacity hover:opacity-90"
    >
      {content}
    </Link>
  );
}