/**
 * ============================================================
 * KELTA Enterprise Platform
 * Public UI Library
 * Component : LeaderCard
 * ============================================================
 */

import { Phone } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils/cn';

interface LeaderCardProps {
  name: string;
  designation: string;
  phone?: string;
  image?: string | null;
  className?: string;
}

export default function LeaderCard({
  name,
  designation,
  phone,
  image,
  className,
}: LeaderCardProps) {
  return (
    <div
      className={cn(
        'group overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl',
        className
      )}
    >
      <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-slate-100">
        {image ? (
            <Image
                src={image}
                alt={name}
                width={96}
                height={96}
                className="h-full w-full object-cover"
            />
            ) : (
            <span className="text-3xl font-bold text-sky-700">
                {name.charAt(0)}
            </span>
            )}
      </div>

      <h3 className="text-xl font-semibold text-slate-900">
        {name}
      </h3>

      <p className="mt-2 font-medium text-sky-700">
        {designation}
      </p>

      {phone && (
        <div className="mt-5 flex items-center justify-center gap-2 text-sm text-slate-500">
          <Phone size={16} />
          {phone}
        </div>
      )}
    </div>
  );
}