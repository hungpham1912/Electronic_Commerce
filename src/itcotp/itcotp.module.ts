import { Module } from '@nestjs/common';
import { ItcotpService } from './itcotp.service';
import { ItcotpController } from './itcotp.controller';

@Module({
  controllers: [ItcotpController],
  providers: [ItcotpService]
})
export class ItcotpModule {}
