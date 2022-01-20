import { Controller, Get, Post, Put, UseGuards, Body, Request, Req } from '@nestjs/common';
import { UsersService } from "../users/users.service";
import { LocalAuthGuard } from "../auth/guard/local-auth.guard";
import { CreateUserDto } from 'src/users/dto/create-use.dto';
import { LoginByAppleDto, SigninDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { Public } from './decorator/jwt.decorator';

@Controller('auth')
export class AuthController {

    constructor (
        private readonly userService: UsersService,
        private readonly authService: AuthService
    ){}

    @Get('/forgot-password')
    answerForgotPassword(@Body() Email: any) {
      return this.userService.answerForgotPassword(Email.email);
    }

    @Get('/apple/callback')
    getToken(@Request() req: any) {
      return this.authService.getAccessToken(req);
    }


    @Post('signin/apple')
    signByApple(@Body() inf: LoginByAppleDto) {
      return this.authService.loginByApple(inf)
    }
  
    @Post('signin')
    @UseGuards(LocalAuthGuard)
    @Public()
    serverRequiestSignin(@Body() body: SigninDto) {
      console.log(body)
      return this.authService.login(body);
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
