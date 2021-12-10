import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { StoresService } from './stores.service';
import { ProductProviders } from "./stores.providers";

@Module({
  imports:[DatabaseModule],
  providers: [
    ...ProductProviders,
    StoresService],
  exports: [StoresService]
})
export class StoresModule {}
