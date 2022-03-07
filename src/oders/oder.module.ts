import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { OdersController } from './oders.controller';
import { OdersService } from './oders.service';
import { DatabaseModule } from '../database/database.module';
import { odersProviders } from './oders.providers'

import { LoggerMiddleware } from "../middleware/logger.middleware";
import { UsersModule } from 'src/users/users.module';
@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [OdersController],
  providers: [
    ...odersProviders,
    OdersService,],
  exports: [OdersService]
})
export class OderModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(
        { path: 'oders/*', method: RequestMethod.GET },
      );
  }

}
