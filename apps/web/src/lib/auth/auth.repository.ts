import { apiClient } from '@/lib/api/client';
import { getSupabaseClient } from '@/lib/supabase/client';

import {
  clearSession,
  saveSession,
} from './auth.session';

import type {
  LoginRequest,
  LoginResponse,
  MeResponse,
  SessionUser,
} from './auth.models';

export class AuthRepository {
  async login(
    credentials: LoginRequest,
  ): Promise<LoginResponse> {
    const supabase =
      getSupabaseClient();

    const {
      data,
      error,
    } =
      await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password,
      });

    if (
      error ||
      !data.session
    ) {
      return {
        success: false,
        message:
          error?.message ??
          'Login failed.',
      };
    }

  let me: MeResponse;

try {
  me = await this.currentUser();
} catch {
  await supabase.auth.signOut();

  clearSession();

  return {
    success: false,
    message:
      'Unable to connect to KELTA server.',
  };
}

const session: SessionUser = {
      accessToken:
        data.session.access_token,

      refreshToken:
        data.session.refresh_token,

      user: me,
    };

    saveSession(session);

    return {
      success: true,
      message: 'Login successful.',
    };
  }

  async logout(): Promise<void> {
    const supabase =
      getSupabaseClient();

    await supabase.auth.signOut();

    clearSession();
  }

  async refreshSession(): Promise<boolean> {
    const supabase =
      getSupabaseClient();

    const { data } =
      await supabase.auth.getSession();

    if (!data.session) {
      clearSession();
      return false;
    }

    let me: MeResponse;

    try {
      me = await this.currentUser();
    } catch {
      await supabase.auth.signOut();

      clearSession();

      return false;
    }

    saveSession({
      accessToken:
        data.session.access_token,

      refreshToken:
        data.session.refresh_token,

      user: me,
    });

    return true;
  }

  async currentUser(): Promise<MeResponse> {
    return apiClient.get<MeResponse>(
      '/auth/me',
    );
  }
}

export const authRepository =
  new AuthRepository();
