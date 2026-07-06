import { Global, Module } from '@nestjs/common';

import { AuthorizationService } from './services/authorization.service';

/**
 * Enterprise RBAC Module
 *
 * Centralizes the application's authorization services.
 *
 * Responsibilities:
 * - Role resolution
 * - Permission resolution
 * - Authorization service
 * - Guards
 * - Future policy engine
 * * This module is marked Global so authorization can be
 * injected anywhere without repeatedly importing RBACModule.
 */
@Global()
@Module({
  providers: [AuthorizationService],

  exports: [AuthorizationService],
})
export class RbacModule {}
