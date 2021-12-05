import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express-serve-static-core';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class SignupMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        


    }

    
}
