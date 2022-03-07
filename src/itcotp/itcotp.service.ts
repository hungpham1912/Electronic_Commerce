import { Injectable } from '@nestjs/common';
import { CreateItcotpDto } from './dto/create-itcotp.dto';
import * as dotenv from 'dotenv';
import { createCipheriv, createDecipheriv, randomBytes, scrypt } from 'crypto';

import { UpdateItcotpDto } from './dto/update-itcotp.dto';
dotenv.config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const crypto = require('crypto');
const client = require('twilio')(accountSid, authToken);

@Injectable()
export class ItcotpService {
  async sendOTP(inf: CreateItcotpDto) {
    // const otp = Math.floor(100000 + Math.random() * 900000);
    // console.log(
    //   '🚀 ~ file: itcotp.service.ts ~ line 15 ~ ItcotpService ~ otp',
    //   otp,
    // );
    // const ttl = 2 * 60 * 1000;
    // const expires = Date.now() + ttl;
    // console.log(
    //   '🚀 ~ file: itcotp.service.ts ~ line 21 ~ ItcotpService ~ expires',
    //   Date.now(),
    // );
    // const data = `${inf.reciever_phone}.${otp}.${expires}`;
    // const hash = crypto
    //   .createHmac('sha256', 'asdsad')
    //   .update(data)
    //   .digest('hex');
    // const fullHash = `${hash}.${expires}`;
    // // const data = `${phone}.${otp}.${expires}`;
    // // const hash = crypto.createHmac('sha256', smsKey).update(data).digest('hex');

    client.messages
      .create({
        body: inf.content,
        from: process.env.SEND_PHONE,
        to: inf.reciever_phone,
      })
      .then((message) => console.log(message.sid));
  }
}
