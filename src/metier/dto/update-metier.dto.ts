import { PartialType } from '@nestjs/mapped-types';
import { CreateMetierDto } from './create-metier.dto';

export class UpdateMetierDto extends PartialType(CreateMetierDto) {}
