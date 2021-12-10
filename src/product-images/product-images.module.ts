import { Module } from '@nestjs/common';
import { ProductImagesService } from './product-images.service';
import { ProductPriceProviders } from "./product-images.providers";
import { DatabaseModule } from '../database/database.module';

@Module({
  imports:[DatabaseModule],
  providers: [
    ...ProductPriceProviders,
    ProductImagesService],
  exports:[ProductImagesService]

})
export class ProductImagesModule {}
