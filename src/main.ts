import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe  } from "@nestjs/common";
import * as dotenv from 'dotenv'
import * as session from 'express-session';

dotenv.config();


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
    }),
  )
  await app.listen(3001);
}
bootstrap();
