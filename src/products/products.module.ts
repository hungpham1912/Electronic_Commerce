import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ProductsService } from './products.service';
import { ProductProviders } from "./products.providers";
import { ProductsController } from './products.controller';
@Module({
  imports:[DatabaseModule],
  providers: [
    ...ProductProviders,
    ProductsService],
  exports:[ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
