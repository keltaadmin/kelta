import Link from 'next/link';

import { quickActions } from '@/lib/constants/dashboard-data';

export default function QuickActions() {
  return (
    <div className="rounded-lg border bg-white p-4">
      <h3 className="font-semibold mb-4">
        Quick Actions
      </h3>

      <div className="grid gap-2">
        {quickActions.map((action) => (
          <Link
            key={action.id}
            href={action.href}
            className="rounded border p-2 hover:bg-gray-50"
          >
            {action.title}
          </Link>
        ))}
      </div>
    </div>
  );
}