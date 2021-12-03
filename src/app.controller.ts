import { Controller,UseGuards, Get, Post, Delete, Put, Body, Param, Header, Req, Request, Res, Response } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';


@Controller()
export class AppController {


    @Get()
    private async getUser(){
        return 
    }


    @Post('loginsss')
    @UseGuards(AuthGuard('local'))
    private test(@Request() req){
        // return req.user;
        // return ;
        
        console.log("asdasd")
    }
}
