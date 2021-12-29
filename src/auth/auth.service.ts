import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as jwt from 'jsonwebtoken';
import { OdersService } from "../oders/oders.service";
import { LoginDto } from "./dto/login.dto";
import { use } from 'passport';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private readonly orderService: OdersService
  ) { }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    switch (true) {
      case (user == null): return { error: 401, };
      case ((user != null) && (user.password != password)): return { error: 401, };
      case ((user != null) && (user.password == password)): {
        const userAccessToken = { accessToken: jwt.sign(user, process.env.ACCESS_TOKEN_SECRET), }
        return {...user,...userAccessToken};
      }
    }
  }




}