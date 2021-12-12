import { Module } from '@nestjs/common';
import { OderItemsService } from './oder-items.service';
import { OderItemsController } from './oder-items.controller';
import { OderItemProviders } from "./oder-items.providers";
import { DatabaseModule } from "../database/database.module";
@Module({
  imports: [DatabaseModule ],
  exports:[OderItemsService],
  providers: [
    ...OderItemProviders,
    OderItemsService],
  controllers: [OderItemsController]
})
export class OderItemsModule {}
