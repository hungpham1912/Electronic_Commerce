import { Module } from '@nestjs/common';
import { OdersController } from './oders.controller';
import { OdersService } from './oders.service';
import { DatabaseModule } from '../database/database.module';
import {odersProviders} from './oders.providers'

@Module({
  imports: [DatabaseModule],
  controllers: [OdersController],
  providers: [
    ...odersProviders,
    OdersService,]
})
export class OderModule {}
