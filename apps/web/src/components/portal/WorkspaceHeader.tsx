'use client';

import WorkspaceSwitcher from './WorkspaceSwitcher';

export default function WorkspaceHeader() {
  return (
    <div className="flex items-center justify-between rounded-lg border bg-white p-4">
      <div>
        <h2 className="font-semibold">
          Active Workspace
        </h2>

        <p className="text-sm text-gray-500">
          Switch between member,
          district, state and admin workspaces.
        </p>
      </div>

      <WorkspaceSwitcher />
    </div>
  );
}