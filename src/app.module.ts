import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { OderModule } from './oders/oder.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [ OderModule,AuthModule, UsersModule],
  // controllers: [AppController],
  
})
export class AppModule {}
