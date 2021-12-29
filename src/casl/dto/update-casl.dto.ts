import { PartialType } from '@nestjs/swagger';
import { CreateCaslDto } from './create-casl.dto';

export class UpdateCaslDto extends PartialType(CreateCaslDto) {}
