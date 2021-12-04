import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as jwt from 'jsonwebtoken';

import { use } from 'passport';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    switch (true) {
      case (user == null): return { error: 404, };
      case ((user != null) && (user.password != password)): return { error: 401, };
      case ((user != null) && (user.password == password)): {
        const userAccessToken = {accessToken :jwt.sign(user, process.env.ACCESS_TOKEN_SECRET) ,}
        return userAccessToken;
      }
    }
  }

}