import { Injectable } from '@nestjs/common';
import { User as SupabaseUser } from '@supabase/supabase-js';

import { UsersService } from '../../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  async authenticateSupabaseUser(
    supabaseUser: SupabaseUser,
  ) {
    const existingUser =
      await this.usersService.findBySupabaseId(
        supabaseUser.id,
      );

    const user =
      existingUser ??
      (await this.usersService.createFromSupabase({
        supabaseAuthId: supabaseUser.id,
        email: supabaseUser.email ?? '',
      }));

    await this.usersService.updateLastLogin(user.id);

    return {
      id: user.id,
      email: user.email,
      memberId: user.memberId,
      roles: user.roles.map((r) => r.role.name),
    };
  }
}
