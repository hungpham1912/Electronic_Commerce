import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { userProviders } from './user.providers';
import { DatabaseModule } from '../database/database.module';
import { OderModule } from '../oders/oder.module';
import { LoggerMiddleware } from '../middleware/logger.middleware';
import { ConfigModule } from '@nestjs/config';
import { SendGridModule } from "@anchan828/nest-sendgrid";
import { EmailModule } from '../email/email.module';
import { User } from "./users.entity";
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([User]),DatabaseModule,EmailModule ,OderModule,ConfigModule.forRoot(), SendGridModule.forRoot({
    apikey: process.env.SEND_GRID_ACCESS_KEY
  })],
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
