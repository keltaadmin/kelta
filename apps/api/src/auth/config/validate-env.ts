export function validateEnv(
  config: Record<string, unknown>,
): Record<string, unknown> {
  const required = [
    'SUPABASE_URL',
    'SUPABASE_ANON_KEY',
    'SUPABASE_SERVICE_ROLE_KEY',
  ];

  const missing = required.filter(
    (key) => typeof config[key] !== 'string' || config[key].trim() === '',
  );

  if (missing.length) {
    throw new Error(
      `Missing required environment variables:\n${missing.join('\n')}`,
    );
  }

  return config;
}
