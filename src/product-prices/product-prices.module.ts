import { Module } from '@nestjs/common';
import { ProductPricesService } from './product-prices.service';

@Module({
  providers: [ProductPricesService]
})
export class ProductPricesModule {}
