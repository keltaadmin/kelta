export const AUTH = {
  LOGIN_PATH: '/login',

  DASHBOARD_PATH: '/dashboard',

  SESSION_COOKIE: 'kelta-session',

  REMEMBER_COOKIE: 'kelta-remember',

  ACCESS_TOKEN_KEY: 'access_token',

  REFRESH_TOKEN_KEY: 'refresh_token',

  MIN_PASSWORD_LENGTH: 8,

  MAX_PASSWORD_LENGTH: 64,

  EMAIL_REGEX:
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

  SESSION_TIMEOUT: 60 * 60 * 24,

  REMEMBER_TIMEOUT: 60 * 60 * 24 * 30,
} as const;