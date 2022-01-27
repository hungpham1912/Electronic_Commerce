import { Injectable } from '@nestjs/common';
import { CreateItcotpDto } from './dto/create-itcotp.dto';
import * as dotenv from 'dotenv'

import { UpdateItcotpDto } from './dto/update-itcotp.dto';
dotenv.config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);




@Injectable()
export class ItcotpService {
  
  async sendOTP(inf: CreateItcotpDto){
    
    client.messages
      .create({body: inf.content, from: process.env.SEND_PHONE, to: inf.reciever_phone})
      .then(message => console.log(message.sid));
  }
}
