export type WorkspaceType =
  | 'member'
  | 'district'
  | 'state'
  | 'admin';

export interface Workspace {
  id: WorkspaceType;

  title: string;

  description: string;
}