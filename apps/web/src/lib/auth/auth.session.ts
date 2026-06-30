import {
  AUTH,
} from './auth.constants';

import type {
  SessionUser,
} from './auth.types';

/**
 * Session Utilities
 *
 * Browser-only helpers.
 */

export function saveSession(
  session: SessionUser
) {
  if (
    typeof window ===
    'undefined'
  )
    return;

  localStorage.setItem(
    AUTH.ACCESS_TOKEN_KEY,
    session.accessToken
  );

  localStorage.setItem(
    AUTH.REFRESH_TOKEN_KEY,
    session.refreshToken
  );
}

export function clearSession() {
  if (
    typeof window ===
    'undefined'
  )
    return;

  localStorage.removeItem(
    AUTH.ACCESS_TOKEN_KEY
  );

  localStorage.removeItem(
    AUTH.REFRESH_TOKEN_KEY
  );
}

export function isAuthenticated() {
  if (
    typeof window ===
    'undefined'
  )
    return false;

  return Boolean(
    localStorage.getItem(
      AUTH.ACCESS_TOKEN_KEY
    )
  );
}