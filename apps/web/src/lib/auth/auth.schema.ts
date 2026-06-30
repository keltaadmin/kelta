import { z } from 'zod';

import { AUTH } from './auth.constants';

import type {
  LoginRequest,
  ResetPasswordRequest,
} from './auth.types';

/* ----------------------------------------------------
 * Zod Schemas (UI)
 * -------------------------------------------------- */

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email('Invalid email address'),

  password: z
    .string()
    .min(
      AUTH.MIN_PASSWORD_LENGTH,
      `Password must contain at least ${AUTH.MIN_PASSWORD_LENGTH} characters.`
    )
    .max(
      AUTH.MAX_PASSWORD_LENGTH,
      `Password cannot exceed ${AUTH.MAX_PASSWORD_LENGTH} characters.`
    ),

  rememberMe: z.boolean(),
});

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(AUTH.MIN_PASSWORD_LENGTH)
      .max(AUTH.MAX_PASSWORD_LENGTH),

    confirmPassword: z.string(),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      message: 'Passwords do not match.',
      path: ['confirmPassword'],
    }
  );

/* ----------------------------------------------------
 * Business Validation (Service)
 * -------------------------------------------------- */

export function validateEmail(
  email: string
): boolean {
  return AUTH.EMAIL_REGEX.test(email);
}

export function validatePassword(
  password: string
): boolean {
  return (
    password.length >= AUTH.MIN_PASSWORD_LENGTH &&
    password.length <= AUTH.MAX_PASSWORD_LENGTH
  );
}

export function validateLogin(
  data: LoginRequest
): string[] {
  const errors: string[] = [];

  if (!validateEmail(data.email)) {
    errors.push('Invalid email address.');
  }

  if (!validatePassword(data.password)) {
    errors.push(
      `Password must contain between ${AUTH.MIN_PASSWORD_LENGTH} and ${AUTH.MAX_PASSWORD_LENGTH} characters.`
    );
  }

  return errors;
}

export function validatePasswordReset(
  data: ResetPasswordRequest
): string[] {
  const errors: string[] = [];

  if (!validatePassword(data.password)) {
    errors.push(
      'Password does not meet security requirements.'
    );
  }

  if (
    data.password !==
    data.confirmPassword
  ) {
    errors.push(
      'Passwords do not match.'
    );
  }

  return errors;
}