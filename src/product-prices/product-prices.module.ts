import { Module } from '@nestjs/common';
import { ProductPriceProviders} from './product-prices.providers';
import { ProductPricesService } from './product-prices.service';
import { DatabaseModule } from "../database/database.module";
import { ProductPricesController } from './product-prices.controller';
@Module({
  imports: [DatabaseModule],

  providers: [
    ...ProductPriceProviders,
    ProductPricesService],
  exports:[ProductPricesService],
  controllers: [ProductPricesController]
})
export class ProductPricesModule {}
