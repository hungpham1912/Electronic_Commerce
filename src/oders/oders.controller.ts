import { Controller, Get, Post, Delete, Put, Body, Param, Header, Req, Request,Res, Response } from '@nestjs/common';
import {OdersService} from './oders.service'

@Controller('oders')
export class OdersController {
    constructor(private readonly OderMethod: OdersService) { }
    @Get('/cart/:userId')
    getCart(@Param() param ){
        return this.OderMethod.get_Cart(param.userId);
    }
}
