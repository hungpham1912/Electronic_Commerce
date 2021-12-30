import {
  Controller,
  UseGuards,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  Header,
  Req,
  Request,
  Res,
  Response,
  ParseIntPipe,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import * as dotenv from 'dotenv';
import { Role, User } from './users.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/role/role.decorator';
import { LocalStrategy } from 'src/auth/strategy/local.strategy';
import { JwtStrategy } from 'src/auth/strategy/jwt.strategy';

dotenv.config();

@Controller('users')
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  get() {
    return this.userService.findAll();
  }

  @Get('authorization')
  //   @UseGuards(JwtAuthGuard)
  //   @Roles(Role.ADMIN)
  @UseInterceptors(ClassSerializerInterceptor)
  myEnforcement(@Req() req) {
    console.log(req.user);
    return 'Content in here...';
  }

  @Get('/test/:id')
  test(@Param('id', ParseIntPipe) id: number) {
    console.log('Test');
  }
}
