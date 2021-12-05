import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express-serve-static-core';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const authorizationHeader = req.headers['authorization'];
        if (authorizationHeader == null) {
            res.send({error: 401,})
        }
        else {
            const /*String*/  token = authorizationHeader.split(" ")[1];
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
                if (err) {
                    res.send({error: 403,})
                }
                else {
                    next();
                }
            })
        }
    }
}
