import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtModule } from "@nestjs/jwt";
import { OderModule } from "../oders/oder.module";


@Module({
  imports: [UsersModule, PassportModule, OderModule,
    JwtModule.register({
    secret: 'secret',
    signOptions: { expiresIn: '1d' }
  })],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}