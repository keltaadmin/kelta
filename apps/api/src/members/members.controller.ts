import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { MembersService } from './members.service';

import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { MemberQueryDto } from './dto/member-query.dto';

/**
 * ============================================================================
 * Members Controller
 * ============================================================================
 *
 * Responsibilities
 * ----------------
 * • Expose Member REST endpoints
 * • Delegate business logic to MembersService
 * • Remain free of business rules
 *
 * Business operations:
 * • Activate Member
 * • Suspend Member
 * • Restore Member
 * • Renew Membership
 * • Retire Member
 *
 * Future integrations:
 * • RBAC Permissions
 * • Swagger Documentation
 * • Audit Logging
 * • API Versioning
 * • Rate Limiting
 * ============================================================================
 */
@Controller('members')
export class MembersController {
  constructor(
    private readonly membersService: MembersService,
  ) {}

  // ---------------------------------------------------------------------------
  // Directory
  // ---------------------------------------------------------------------------

  @Get()
  async findAll(
    @Query() query: MemberQueryDto,
  ) {
    return this.membersService.findAll(query);
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
  ) {
    return this.membersService.findOne(id);
  }

  // ---------------------------------------------------------------------------
  // CRUD
  // ---------------------------------------------------------------------------

  @Post()
  async create(
    @Body() dto: CreateMemberDto,
  ) {
    return this.membersService.create(dto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateMemberDto,
  ) {
    return this.membersService.update(id, dto);
  }

  @Delete(':id')
  async remove(
    @Param('id') id: string,
  ) {
    return this.membersService.remove(id);
  }

  // ---------------------------------------------------------------------------
  // Business Operations
  // ---------------------------------------------------------------------------

  /**
   * Activate a member.
   *
   * Future:
   * - Timeline
   * - Audit
   * - Notification
   * - Digital ID generation
   */
  @Post(':id/activate')
  async activate(
    @Param('id') id: string,
  ) {
    return this.membersService.activateMember(id);
  }

  /**
   * Suspend a member.
   *
   * Placeholder for Sprint 4.
   */
  @Post(':id/suspend')
  async suspend(
    @Param('id') id: string,
  ) {
    return this.membersService.suspendMember(id);
  }

  /**
   * Restore a suspended member.
   */
  @Post(':id/restore')
  async restore(
    @Param('id') id: string,
  ) {
    return this.membersService.restoreMember(id);
  }

  /**
   * Renew membership.
   */
  @Post(':id/renew')
  async renew(
    @Param('id') id: string,
  ) {
    return this.membersService.renewMember(id);
  }

  /**
   * Retire a member.
   */
  @Post(':id/retire')
  async retire(
    @Param('id') id: string,
  ) {
    return this.membersService.retireMember(id);
  }
}
