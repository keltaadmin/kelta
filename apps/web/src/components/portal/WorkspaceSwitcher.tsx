'use client';

import WorkspaceSelector from './WorkspaceSelector';

import { useWorkspace } from '@/hooks/useWorkspace';

export default function WorkspaceSwitcher() {
  const {
    workspace,
    setWorkspace,
  } = useWorkspace();

  return (
    <WorkspaceSelector
      value={workspace}
      onChange={setWorkspace}
    />
  );
}