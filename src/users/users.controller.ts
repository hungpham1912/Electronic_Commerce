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
import { LocalAuthGuard } from '../auth/guard/local-auth.guard'
import * as dotenv from 'dotenv';
import { Role, User } from './users.entity';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/role/role.decorator';
import { JwtStrategy } from 'src/auth/strategy/jwt.strategy';
import * as bcrypt from 'bcrypt';
import { createCipheriv, createDecipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';
import { AppleAuthGuard } from "../auth/guard/apple-auth.guard";
import { JwtAuthGuard } from "../auth/guard/jwt-auth.guard";

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
  async myEnforcement(@Req() req) {
    // const iv = randomBytes(16);
    // console.log(iv);
    // const password = 'Password used to generate key';
    // const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
    // console.log(key);
    // const cipher = createCipheriv('aes-256-ctr', key, iv);
    // console.log(cipher);
    // const textToEncrypt = 'Nest';
    // const encryptedText = Buffer.concat([
    //   cipher.update(textToEncrypt),
    //   cipher.final(),
    // ]);
    // console.log(encryptedText);

    // const decipher = createDecipheriv('aes-256-ctr', key, iv);
    // const decryptedText = Buffer.concat([
    //   decipher.update(encryptedText),
    //   decipher.final(),
    // ]);

    // console.log(decryptedText);
    const saltOrRounds = 10;
    const password = 'random_password';
    const hash = await bcrypt.hash(password, saltOrRounds);
    console.log(hash)
    const salt = await bcrypt.genSalt();
    console.log(salt)
    const isMatch = await bcrypt.compare(password, hash);
    console.log(isMatch)


    return 'Content in here...';
  }

  @Get('/test/:id')
  @UseGuards(JwtAuthGuard)
  test(@Param('id', ParseIntPipe) id: number, @Req() req : any) {
    // console.log( req.user)
    console.log(id);
  }
}
