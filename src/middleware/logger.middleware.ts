import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express-serve-static-core';
import * as jwt from 'jsonwebtoken';
const config = process.env;

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const authorizationHeader = req.headers['authorization'];
        if (authorizationHeader == null) {
            res.sendStatus(401);
        }
        else {
            const token = authorizationHeader.split(" ")[1];
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
                console.log(err, data);
                if (err) {
                    res.sendStatus(403);
                }
                else {
                    next();
                }
            })
        }
    }
}
