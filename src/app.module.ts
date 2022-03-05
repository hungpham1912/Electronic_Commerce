import { CacheModule, Module } from '@nestjs/common';
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
import { RouterModule } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ChatgetwayModule } from './chatgetway/chatgetway.module';
import { Chatgetway } from './chatgetway/entities/chatgetway.entity';
import { ChatGateway } from './chat.getway';
import { ItcotpModule } from './itcotp/itcotp.module';
import { PetsModule } from './pets/pets.module';
import { OtpModule } from './module/otp/otp.module';
@Module({
  imports: [
    ConfigModule.forRoot({}),
    EventEmitterModule.forRoot({
      // set this to `true` to use wildcards
      wildcard: false,
      // the delimiter used to segment namespaces
      delimiter: '.',
      // set this to `true` if you want to emit the newListener event
      newListener: false,
      // set this to `true` if you want to emit the removeListener event
      removeListener: false,
      // the maximum amount of listeners that can be assigned to an event
      maxListeners: 10,
      // show event name in memory leak message when more than maximum amount of listeners is assigned
      verboseMemoryLeak: false,
      // disable throwing uncaughtException if an error event is emitted and it has no listeners
      ignoreErrors: false,
    }),
    CacheModule.register(),
    OderModule,
    AuthModule,
    UsersModule,
    EmailModule,
    OderItemsModule,
    StoresModule,
    ProductPricesModule,
    ProductsModule,
    ProductImagesModule,
    PublicFilesModule,
    RouterModule.register([
      {
        path: 'e-commerce',
        module: UsersModule,
      },
    ]),
    ItcotpModule,
    PetsModule,
    OtpModule,
    
  ],
  providers: [ChatGateway],
})
export class AppModule {}
