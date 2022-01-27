import { PartialType } from '@nestjs/swagger';
import { CreateItcotpDto } from './create-itcotp.dto';

export class UpdateItcotpDto extends PartialType(CreateItcotpDto) {}
