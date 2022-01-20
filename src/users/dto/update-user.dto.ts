import { PartialType, PickType } from '@nestjs/swagger';
import { CreateUserDto } from './create-use.dto';

export class UpdateUserDto extends PickType(CreateUserDto, [
  'adress',
  'email',
] as const) {}
