import { Controller, Get, Post, Delete, Put, Body, Param, Header, Req, Request,Res, Response } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import {OdersService} from './oders.service'
import { ValidationPipe } from "../auth/validations/validation.pipe";
@Controller('oders')
export class OdersController {
    constructor(private readonly OderMethod: OdersService) { }
  

    @Post()
    create(@Body() order: CreateOrderDto){
        return this.OderMethod.create(order)
    }

    @Get()
    getAll(){
        return this.OderMethod.findAll()
    }

  




}
