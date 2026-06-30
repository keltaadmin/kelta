export type RoleCode =
  | 'member'
  | 'district-secretary'
  | 'district-president'
  | 'district-treasurer'
  | 'state-secretary'
  | 'state-president'
  | 'state-treasurer'
  | 'admin';

export interface Permission {
  code: string;
  description: string;
}

export interface RolePermission {
  role: RoleCode;
  permissions: string[];
}