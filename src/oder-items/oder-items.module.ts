import { Module } from '@nestjs/common';
import { OderItemsService } from './oder-items.service';
import { OderItemsController } from './oder-items.controller';
import { OderItemProviders } from "./oder-items.providers";
import { DatabaseModule } from "../database/database.module";
import { ProductPricesModule } from '../product-prices/product-prices.module';
import { ProductsModule } from '../products/products.module';
import { StoresModule } from "../stores/stores.module";
import { OderModule } from "../oders/oder.module";
@Module({
  imports: [DatabaseModule,OderItemsModule,ProductPricesModule,ProductsModule,StoresModule,OderModule ],
  exports:[OderItemsService],
  providers: [
    ...OderItemProviders,
    OderItemsService],
  controllers: [OderItemsController]
})
export class OderItemsModule {}
