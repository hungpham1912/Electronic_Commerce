import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { userProviders } from './entity/user.providers';
import { DatabaseModule } from '../database/database.module';
import { OderModule } from '../oders/oder.module';
import { JwtModule } from "@nestjs/jwt";


@Module({
  imports: [DatabaseModule, OderModule,],
  controllers: [UsersController],
  providers: [
    ...userProviders,
    UsersService,],
  exports: [UsersService],

})

export class UsersModule { }
