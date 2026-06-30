import {
  validateLogin,
} from './auth.schema';

import {
  authRepository,
} from './auth.repository';

import type {
  LoginRequest,
  LoginResponse,
} from './auth.types';

/**
 * Enterprise Authentication Service
 *
 * Business logic lives here.
 * Repository handles external provider.
 */
export class AuthService {
  async login(
    data: LoginRequest
  ): Promise<LoginResponse> {
    const errors =
      validateLogin(data);

    if (errors.length > 0) {
      return {
        success: false,
        message:
          errors.join(' '),
      };
    }

    return authRepository.login(
      data
    );
  }

  async logout() {
    return authRepository.logout();
  }

  async refresh() {
    return authRepository.refreshSession();
  }
}

export const authService =
  new AuthService();