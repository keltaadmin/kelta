import { WorkspaceType } from '@/types/workspace';

let currentWorkspace: WorkspaceType =
  'member';

export function getWorkspace() {
  return currentWorkspace;
}

export function setWorkspace(
  workspace: WorkspaceType
) {
  currentWorkspace = workspace;
}