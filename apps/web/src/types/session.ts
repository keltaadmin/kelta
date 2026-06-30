import { User } from './user';

export interface SessionData {
  accessToken: string | null;
  refreshToken: string | null;

  expiresAt?: number;

  user: User | null;
}