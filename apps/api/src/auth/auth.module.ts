import { Module } from '@nestjs/common';

import { UsersModule } from '../users/users.module';

import { AuthController } from './auth.controller';
import { AuthService } from './services/auth.service';
import { SupabaseAuthService } from './services/supabase-auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [AuthService, SupabaseAuthService, JwtAuthGuard],
  exports: [AuthService],
})
export class AuthModule {}
