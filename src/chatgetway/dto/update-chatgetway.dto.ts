import { PartialType } from '@nestjs/swagger';
import { CreateChatgetwayDto } from './create-chatgetway.dto';

export class UpdateChatgetwayDto extends PartialType(CreateChatgetwayDto) {}
