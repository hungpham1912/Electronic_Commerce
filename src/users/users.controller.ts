import { Controller, UseGuards, Get, Post, Delete, Put, Body, Param, Header, Req, Request, Res, Response, ParseIntPipe, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { UsersService } from './users.service'
import { LocalAuthGuard } from "../auth/local-auth.guard";
import * as dotenv from 'dotenv'
import { User } from "./users.entity";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

dotenv.config();


@Controller('users')
@UseGuards(LocalAuthGuard)
@ApiBearerAuth()
export class UsersController {
    constructor(
        private readonly userService: UsersService,
    ) { }

    @Get()
    get(){
        return this.userService.findAll();
    }

    @Get('/forgot-password')
    answerForgotPassword(@Body() Email: any){
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
    changePassword(@Body() newPassword: any){
        return this.userService.changePassword(newPassword)
    }

    @Get('authorization')
    @UseInterceptors(ClassSerializerInterceptor)
    myEnforcement(@Req() req) {
        console.log(req.user)
        return "Content in here..."
    }

    @Get('/test/:id')
    test(@Param('id', ParseIntPipe) id: number, ){
       console.log("Test")
    }

}
