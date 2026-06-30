export interface LoginRequest {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface LoginResponse {
  success: boolean;
  accessToken?: string;
  refreshToken?: string;
  message: string;
}

export interface AuthUser {
  id: string;
  email: string;
  fullName: string;
}

export interface SessionUser {
  user: AuthUser;
  accessToken: string;
  refreshToken: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  password: string;
  confirmPassword: string;
}