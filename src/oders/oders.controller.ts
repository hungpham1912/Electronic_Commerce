import { Controller, Get, Post, Delete, Put, Body, Param, Header, Req, Request,Res, Response, UseGuards } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { UserDecorator } from 'src/users/decorator/user.decorator';
import { User } from 'src/users/users.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import {OdersService} from './oders.service'
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

    @Get('/condition')
    getCondition(){
        return this.OderMethod.getCondition()
    }
  
    @UseGuards(JwtAuthGuard)
    @Get('decorater')
    // @UserDecorator(user)
    decoratorTest(@UserDecorator()user: User){
      console.log(user)
      return "Asdadasd"
    }




}
