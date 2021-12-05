import { Controller, UseGuards, Get, Post, Delete, Put, Body, Param, Header, Req, Request, Res, Response } from '@nestjs/common';
import { UsersService } from './users.service'
import { AuthGuard } from '@nestjs/passport';
import * as dotenv from 'dotenv'
dotenv.config();


@Controller('users')
export class UsersController {
    constructor(private readonly UserMethod: UsersService) {}

    @Post('login')
    @UseGuards(AuthGuard('local'))
    foo(@Request() req): any {
        return req.user;
    }

    @Get('authorization')
    myEnforcement() {
        return "Content in here..."
    }

}
