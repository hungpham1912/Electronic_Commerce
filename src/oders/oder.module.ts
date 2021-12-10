import { Module } from '@nestjs/common';
import { OdersController } from './oders.controller';
import { OdersService } from './oders.service';
import { DatabaseModule } from '../database/database.module';
import {odersProviders} from './oders.providers'
import { OderItemsModule } from '../oder-items/oder-items.module';
import { ProductPricesModule } from '../product-prices/product-prices.module';
import { ProductsModule } from '../products/products.module';
import { StoresModule } from '../stores/stores.module';
import { OderItemProviders } from "../oder-items/oder-items.providers";
import { ProductPriceProviders } from "../product-prices/product-prices.providers";

@Module({
  imports: [DatabaseModule,OderItemsModule,ProductPricesModule,ProductsModule,StoresModule],
  controllers: [OdersController],
  providers: [
    ...odersProviders,
    ...OderItemProviders,
    ...ProductPriceProviders,
    OdersService,]
})
export class OderModule {}
