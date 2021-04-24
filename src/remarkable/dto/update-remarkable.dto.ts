import { PartialType } from '@nestjs/mapped-types';
import { CreateRemarkableDto } from './create-remarkable.dto';

export class UpdateRemarkableDto extends PartialType(CreateRemarkableDto) {}
