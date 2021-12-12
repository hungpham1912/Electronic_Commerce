import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { StoresService } from './stores.service';
import { ProductProviders } from "./stores.providers";
import { StoresController } from './stores.controller';

@Module({
  imports:[DatabaseModule],
  providers: [
    ...ProductProviders,
    StoresService],
  exports: [StoresService],
  controllers: [StoresController]
})
export class StoresModule {}
