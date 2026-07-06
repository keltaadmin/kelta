export function validateEnv(
  config: Record<string, unknown>,
): Record<string, unknown> {
  const required = [
    'SUPABASE_URL',
    'SUPABASE_ANON_KEY',
    'SUPABASE_SERVICE_ROLE_KEY',
  ];

  const missing = required.filter(
    (key) =>
      config[key] === undefined ||
      config[key] === null ||
      String(config[key]).trim() === '',
  );

  if (missing.length) {
    throw new Error(
      `Missing required environment variables:\n${missing.join('\n')}`,
    );
  }

  return config;
}
