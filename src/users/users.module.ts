import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { userProviders } from './user.providers';
import { DatabaseModule } from '../database/database.module';
import { LoggerMiddleware } from '../middleware/logger.middleware';
import { ConfigModule } from '@nestjs/config';
import { SendGridModule } from '@anchan828/nest-sendgrid';
import { EmailModule } from '../email/email.module';
import { User } from './users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesGuard } from 'src/auth/guard/role.guard';
import { APP_GUARD } from '@nestjs/core';
import { PassportModule } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
// import { JwtModule } from '@nestjs/jwt';
// import {  } from "@nestjs/apple";
@Module({
  imports: [
    DatabaseModule,
    EmailModule,
    ConfigModule.forRoot(),
    SendGridModule.forRoot({
      apikey: process.env.SEND_GRID_ACCESS_KEY,
    }),
  ],
  controllers: [UsersController],
  providers: [
    ...userProviders,
    UsersService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    }
  ],
  exports: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(
        // { path: 'e-commerce/users/authorization', method: RequestMethod.GET },
        // { path: 'e-commerce/users/change-password', method: RequestMethod.PUT },
        // { path: 'e-commerce/users/', method: RequestMethod.GET },
        // { path: 'e-commerce/users/test/:id', method: RequestMethod.GET },
      );
  }
}
