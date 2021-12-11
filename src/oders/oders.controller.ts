import { Controller, Get, Post, Delete, Put, Body, Param, Header, Req, Request,Res, Response } from '@nestjs/common';
import { User } from '../users/users.entity';
import {OdersService} from './oders.service'

@Controller('oders')
export class OdersController {
    constructor(private readonly OderMethod: OdersService) { }
    @Get('/cart/:userId')
    getCart(@Param() param:any, @Body() UserDs: User ){
        return this.OderMethod.getCart(param.userId);
    }

    @Post('/cart/:userId')
    postCart(@Param() param:any, @Body() UserDs: User ){
        return 
    }




}
