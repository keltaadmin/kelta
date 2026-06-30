import { PartialType } from '@nestjs/mapped-types';

import { CreateCommitteePositionDto } from './create-committee-position.dto';

export class UpdateCommitteePositionDto extends PartialType(
  CreateCommitteePositionDto,
) {}
