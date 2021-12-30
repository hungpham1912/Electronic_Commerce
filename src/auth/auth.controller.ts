import { Controller, Get, Post, Put, UseGuards, Body, Request } from '@nestjs/common';
import { UsersService } from "../users/users.service";
import { LocalAuthGuard } from "../auth/local-auth.guard";

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
    serverRequestSignup(@Body() infomationSignup: any) {
      return this.userService.authenticationSignup(infomationSignup);
    }
  
    @Put('/change-password')
    changePassword(@Body() newPassword: any) {
      return this.userService.changePassword(newPassword);
    }
}
