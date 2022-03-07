import { Injectable, NestMiddleware, Request, Response } from '@nestjs/common';
import {NextFunction } from 'express-serve-static-core';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
       
       console.log(req)
       next()
    }
}
