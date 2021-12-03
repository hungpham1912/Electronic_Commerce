import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { use } from 'passport';

@Injectable()
export class AuthService {
  // constructor(private usersService: UsersService) {}
  constructor(
    private usersService: UsersService,
    private readonly jwtService: JwtService
  ) { }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (username && user.password == password) {
      const as =  {
        accessToken: this.jwtService.sign(user),
      }
      return as;
    }
    return null;
    // console.log(user)
  }
  async login(user: any) {
    const payload = { email: user.email, password: user.password };
    return 1;
  }
}