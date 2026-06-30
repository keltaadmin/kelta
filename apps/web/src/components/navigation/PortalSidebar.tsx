'use client';

import Link from 'next/link';

import { portalMenus } from '@/lib/constants/portal-menu';

export default function PortalSidebar() {
  const workspace = portalMenus[0];

  return (
    <aside className="w-64 min-h-screen border-r bg-white">
      <div className="p-4 border-b">
        <h2 className="font-bold text-lg">
          {workspace.title}
        </h2>
      </div>

      <nav className="p-4 space-y-6">
        {workspace.sections.map((section) => (
          <div key={section.id}>
            <h3 className="mb-2 text-xs font-semibold uppercase text-gray-500">
              {section.title}
            </h3>

            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href ?? '#'}
                    className="block rounded px-3 py-2 hover:bg-gray-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}