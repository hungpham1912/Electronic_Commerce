import { Controller, Get, Post, Put, UseGuards, Body, Request } from '@nestjs/common';
import { UsersService } from "../users/users.service";
import { LocalAuthGuard } from "../auth/local-auth.guard";
import { CreateUserDto } from 'src/users/dto/create-use.dto';

@Controller('auth')
export class AuthController {

    constructor (
        private readonly userService: UsersService
    ){}

    @Get('/forgot-password')
    answerForgotPassword(@Body() Email: any) {
      return this.userService.answerForgotPassword(Email.email);
    }
  
    @Post('signin')
    @UseGuards(LocalAuthGuard)
    serverRequiestSignin(@Request() req: any): any {
      return req.user;
    }
  
    @Post('signup')
    serverRequestSignup(@Body() infomationSignup: CreateUserDto) {
      return this.userService.authenticationSignup(infomationSignup);
    }
  
    @Put('/change-password')
    changePassword(@Body() newPassword: any) {
      return this.userService.changePassword(newPassword);
    }
}
