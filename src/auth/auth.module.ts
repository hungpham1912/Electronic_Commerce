import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { OderModule } from '../oders/oder.module';
import { JwtStrategy } from './strategy/jwt.strategy';
import { AuthController } from './auth.controller';
import { AppleStrategy } from './strategy/apple.strategy';
import { RolesGuard } from './guard/role.guard';
import { ObjectSchema } from 'joi';
import { JwtTestAuthGuard } from './guard/jwt-test.guard';
import { JwtTestStrategy } from './strategy/jwt-test.strategy';

@Module({
  imports: [
    UsersModule,

    PassportModule,
    OderModule,
    JwtModule.register({
      secret: process.env.ACCESS_TOKEN_SECRET,
      signOptions: { expiresIn: '60h' },
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    JwtTestStrategy,
    AppleStrategy,
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
  ],
  controllers: [AuthController],
  exports: [],
})
export class AuthModule {}
