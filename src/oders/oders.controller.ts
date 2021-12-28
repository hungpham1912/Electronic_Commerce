import { Controller, Get, Post, Delete, Put, Body, Param, Header, Req, Request,Res, Response } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import {OdersService} from './oders.service'
import { ValidationPipe } from "../auth/validations/validation.pipe";
@Controller('orders')
export class OdersController {
    constructor(private readonly OderMethod: OdersService) { }
  

    @Post('/:userId')
    create(@Param() Ids: any,@Body() order: CreateOrderDto){
        return this.OderMethod.create(Ids.userId,order)
    }

    @Get()
    getAll(){
        return this.OderMethod.findAll()
    }

  




}
