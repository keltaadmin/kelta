import { Injectable, UnauthorizedException } from '@nestjs/common';
import { createClient, User } from '@supabase/supabase-js';

@Injectable()
export class SupabaseAuthService {
  private readonly client = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
  );

  async verifyAccessToken(token: string): Promise<User> {
    const { data, error } = await this.client.auth.getUser(token);

    if (error || !data.user) {
      throw new UnauthorizedException('Invalid Supabase access token');
    }

    return data.user;
  }
}
