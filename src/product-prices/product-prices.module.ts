import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ProductPriceProviders} from './product-prices.providers';
import { ProductPricesService } from './product-prices.service';
import { DatabaseModule } from "../database/database.module";
import { ProductPricesController } from './product-prices.controller';
import { LoggerMiddleware } from "../middleware/logger.middleware";
@Module({
  imports: [DatabaseModule],

  providers: [
    ...ProductPriceProviders,
    ProductPricesService],
  exports:[ProductPricesService],
  controllers: [ProductPricesController]
})
export class ProductPricesModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleware)
    .forRoutes(
      { path: 'product-prices', method: RequestMethod.GET },
      
    );
  }
}
