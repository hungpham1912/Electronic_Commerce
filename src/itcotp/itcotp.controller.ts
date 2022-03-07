import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ItcotpService } from './itcotp.service';
import { CreateItcotpDto } from './dto/create-itcotp.dto';
import { UpdateItcotpDto } from './dto/update-itcotp.dto';

@Controller('itcotp')
export class ItcotpController {
  constructor(private readonly itcotpService: ItcotpService) {}

  @Post()
  create(@Body() createItcotpDto: CreateItcotpDto) {
    // console.log('test')
    return this.itcotpService.sendOTP(createItcotpDto);
  }
}
