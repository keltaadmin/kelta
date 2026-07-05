/**
 * ============================================================
 * KELTA Enterprise Authentication Models
 * ============================================================
 * Single source of truth for frontend authentication types.
 * ============================================================
 */

export interface LoginRequest {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface LoginResponse {
  success: boolean;
  message: string;
}

export interface AuthenticatedUser {
  id: string;
  email: string;
  memberId: string | null;
  roles: string[];
}

export interface SessionUser {
  accessToken: string;
  refreshToken: string;
  user: AuthenticatedUser;
}

export interface MeResponse {
  id: string;
  email: string;
  memberId: string | null;
  roles: string[];
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  password: string;
  confirmPassword: string;
}


