import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { userProviders } from './entity/user.providers';
import { DatabaseModule } from '../database/database.module';
import { OderModule } from '../oders/oder.module';
import { LoggerMiddleware } from '../middleware/logger.middleware';
import { SignupMiddleware } from "../middleware/signup.middleware";

@Module({
  imports: [DatabaseModule, OderModule,],
  controllers: [UsersController],
  providers: [
    ...userProviders,
    UsersService,],
  exports: [UsersService],
})

export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(
        { path: 'users/authorization', method: RequestMethod.GET },
      );
  }


}
