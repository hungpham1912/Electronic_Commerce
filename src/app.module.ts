import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { OderModule } from './oders/oder.module';


@Module({
  imports: [ OderModule, UsersModule],
  
})
export class AppModule {}
