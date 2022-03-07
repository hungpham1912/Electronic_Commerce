import { Module } from '@nestjs/common';
import { ChatgetwayService } from './chatgetway.service';
import { ChatgetwayController } from './chatgetway.controller';

@Module({
  controllers: [ChatgetwayController],
  providers: [ChatgetwayService]
})
export class ChatgetwayModule {}
