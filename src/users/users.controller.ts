import { Controller, UseGuards, Get, Post, Delete, Put, Body, Param, Header, Req, Request, Res, Response } from '@nestjs/common';
import { UsersService } from './users.service'
import { LocalAuthGuard } from "../auth/local-auth.guard";
import * as dotenv from 'dotenv'
dotenv.config();


@Controller('users')
export class UsersController {
    constructor(
        private readonly UserMethod: UsersService,
    ) { }

    @Post('signin')
    @UseGuards(LocalAuthGuard)
    serverRequiestSignin(@Request() req): any {
        return req.user;
    }

    @Post('signup')
    serverRequestSignup(@Body() infomationSignup: any) {
        return this.UserMethod.athenticationSignup(infomationSignup);
    }

    @Get('authorization')
    myEnforcement() {
        return "Content in here..."
    }

}
