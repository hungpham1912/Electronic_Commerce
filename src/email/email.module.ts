import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { ConfigModule } from '@nestjs/config';
import { SendGridModule } from "@anchan828/nest-sendgrid";

@Module({
  imports: [ConfigModule.forRoot(), SendGridModule.forRoot({
    apikey: process.env.SEND_GRID_ACCESS_KEY
  })],
  providers: [EmailService],
  exports:[EmailService]
})
export class EmailModule {}
