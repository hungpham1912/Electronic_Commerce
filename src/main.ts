import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe  } from "@nestjs/common";
import * as dotenv from 'dotenv'
import * as session from 'express-session';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as cookieParser from 'cookie-parser';
import { RedisIoAdapter } from './users/adapter/RedisIo.adapter';

const cors = require('cors')
dotenv.config();


async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
  ); 
  // app.useWebSocketAdapter(new RedisIoAdapter(app));
  app.use(cookieParser()); 
  app.useGlobalPipes(new ValidationPipe({
    // disableErrorMessages: true,
    // whitelist: true,
    // transform: true,

  }));
  app.use(cors())
  app.enableCors();
  // app.useStaticAssets(join(__dirname, '..', 'public'));
  // app.setBaseViewsDir(join(__dirname, '..', 'views'));
  // app.setViewEngine('hbs');
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
