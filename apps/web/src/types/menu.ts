export type WorkspaceType =
  | 'member'
  | 'district'
  | 'state'
  | 'admin';

export interface MenuItem {
  id: string;
  label: string;
  href?: string;
  iconKey?: string;
  permission?: string;
  children?: MenuItem[];
}

export interface MenuSection {
  id: string;
  title: string;
  items: MenuItem[];
}

export interface WorkspaceMenu {
  workspace: WorkspaceType;
  title: string;
  sections: MenuSection[];
}