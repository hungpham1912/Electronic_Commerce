import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { OderModule } from './oders/oder.module';
import { AuthModule } from './auth/auth.module';
import { EmailModule } from './email/email.module';
import { OderItemsModule } from './oder-items/oder-items.module';


@Module({
  imports: [ OderModule,AuthModule, UsersModule, EmailModule, OderItemsModule],  
})
export class AppModule {}
