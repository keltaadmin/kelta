import {
  Controller,
  Get,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';

import { AuthService } from './services/auth.service';
import { SupabaseAuthService } from './services/supabase-auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly supabaseAuthService: SupabaseAuthService,
  ) {}

  @Get('me')
  async me(
    @Headers('authorization') authorization?: string,
  ) {
    if (!authorization?.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing Bearer token');
    }

    const token = authorization.substring(7);

    const supabaseUser =
      await this.supabaseAuthService.verifyAccessToken(
        token,
      );

    return this.authService.authenticateSupabaseUser(
      supabaseUser,
    );
  }
}
