import { PartialType } from '@nestjs/mapped-types';
import { SubtypeDto } from './create-subtype.dto';

export class UpdateSubtypeDto extends PartialType(SubtypeDto) {}
