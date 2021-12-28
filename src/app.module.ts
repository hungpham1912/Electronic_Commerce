import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { OderModule } from './oders/oder.module';
import { AuthModule } from './auth/auth.module';
import { EmailModule } from './email/email.module';
import { OderItemsModule } from './oder-items/oder-items.module';
import { StoresModule } from './stores/stores.module';
import { ProductPricesModule } from './product-prices/product-prices.module';
import { ProductsModule } from './products/products.module';
import { ProductImagesModule } from './product-images/product-images.module';
import { PublicFilesModule } from './public-files/public-files.module';
import { PipesModule } from './pipes/pipes.module';


@Module({
  imports: [ OderModule,AuthModule, UsersModule, EmailModule, OderItemsModule, StoresModule, ProductPricesModule, ProductsModule, ProductImagesModule, PublicFilesModule, PipesModule],
  providers: [],
})
export class AppModule {}
