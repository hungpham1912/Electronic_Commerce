import { Module } from '@nestjs/common';
import { ProductImagesService } from './product-images.service';

@Module({
  providers: [ProductImagesService]
})
export class ProductImagesModule {}
