// import config = require('config');
// import { ExtractJwt, Strategy } from 'passport-jwt';
// import { PassportStrategy } from '@nestjs/passport';
// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { AuthService } from '../auth.service';

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor(private authService: AuthService) {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       ignoreExpiration: false,
//       secretOrKey: config.get('auth.jwt.secret'),
//     });
//   }

//   async validate(payload: any) {
//     const user = await this.authService.validateUserByToken(payload.id);

//     if (!user) {
//       throw new UnauthorizedException();
//     }

//     return user;
//   }
// }
