import { registerAs } from '@nestjs/config';

export default registerAs('auth', () => ({
  supabase: {
    url: process.env.SUPABASE_URL!,
    anonKey: process.env.SUPABASE_ANON_KEY!,
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  },

  jwt: {
    issuer: process.env.JWT_ISSUER!,
    audience: process.env.JWT_AUDIENCE!,
  },
}));
