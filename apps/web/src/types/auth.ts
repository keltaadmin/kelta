import type { User } from './user';

export interface AuthState {
  user: User | null;
  loading: boolean;
  authenticated: boolean;
}

export interface AuthContextValue
  extends AuthState {
  refresh: () => Promise<void>;
}