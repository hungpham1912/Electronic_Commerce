import { Controller, Get, Post, Delete, Put, Body, Param, Header, Req, Request,Res, Response } from '@nestjs/common';
import {OdersService} from './oders.service'

@Controller('oders')
export class OdersController {
    constructor(private readonly OderMethod: OdersService) { }
    @Get()
    private async get(){
    }
}
