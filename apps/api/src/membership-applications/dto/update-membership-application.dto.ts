import { PartialType } from '@nestjs/mapped-types';

import { CreateMembershipApplicationDto } from './create-membership-application.dto';

export class UpdateMembershipApplicationDto extends PartialType(
  CreateMembershipApplicationDto,
) {}
