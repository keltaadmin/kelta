import type {
  LoginRequest,
  LoginResponse,
} from './auth.types';

/**
 * Authentication Repository
 *
 * Responsible only for talking to the
 * authentication provider (Supabase).
 *
 * Real Supabase integration will be
 * added in Packet C.
 */
export class AuthRepository {
  async login(
    credentials: LoginRequest
  ): Promise<LoginResponse> {
    void credentials;

    return {
      success: false,
      message:
        'Authentication provider not configured.',
    };
  }

  async logout(): Promise<void> {
    return;
  }

  async refreshSession(): Promise<boolean> {
    return false;
  }
}

export const authRepository =
  new AuthRepository();