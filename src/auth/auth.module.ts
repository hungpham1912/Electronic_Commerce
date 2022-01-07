import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { OderModule } from '../oders/oder.module';
import { JwtStrategy } from './strategy/jwt.strategy';
import { AuthController } from './auth.controller';
import { AppleStrategy } from "./strategy/apple.strategy";
@Module({
  imports: [
    UsersModule,
    // PassportModule,
    OderModule,
    // JwtModule.register({
    //   secret: process.env.ACCESS_TOKEN_SECRET,
    //   signOptions: { expiresIn: '60h' },
    // }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, AppleStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
