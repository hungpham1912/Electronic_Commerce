import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ProductsService } from './products.service';
import { ProductProviders } from "./products.providers";
@Module({
  imports:[DatabaseModule],
  providers: [
    ...ProductProviders,
    ProductsService],
  exports:[ProductsService]
})
export class ProductsModule {}
