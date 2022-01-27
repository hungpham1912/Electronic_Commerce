import config = require('config');
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Req, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { ContextIdFactory, ModuleRef } from '@nestjs/core';

// import { jwtConstants } from './constants';

@Injectable()

export class JwtTestStrategy extends PassportStrategy(Strategy,'test') {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.ACCESS_TOKEN_SECRET
    });
  }

  async validate(payload: any) {
    console.log("sdfsfsdfsdfsdfsd")
    // const contextId = ContextIdFactory.getByRequest(req);
    // const user = await  this.authService.validateById(payload.id);
    return payload
  }
}