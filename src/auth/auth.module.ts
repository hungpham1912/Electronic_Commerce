import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from "@nestjs/jwt";



@Module({
  imports: [UsersModule, PassportModule, 
    JwtModule.register({
    secret: 'secret',
    signOptions: { expiresIn: '1d' }
  })],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}