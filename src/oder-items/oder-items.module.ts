import { Module } from '@nestjs/common';
import { OderItemsService } from './oder-items.service';
import { OderItemsController } from './oder-items.controller';

@Module({
  providers: [OderItemsService],
  controllers: [OderItemsController]
})
export class OderItemsModule {}
