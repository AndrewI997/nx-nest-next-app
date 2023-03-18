import { PartialType } from '@nestjs/mapped-types';
import { TypeDto } from './create-type.dto';

export class UpdateTypeDto extends PartialType(TypeDto) {}