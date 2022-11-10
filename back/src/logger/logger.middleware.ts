import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import * as Express from 'express';
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger();
  private logtimeval = Date.now();
  use(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
    const logtimeval = Date.now();
    res.on('finish', () => {
      this.logger.log(
        `${req.ip} ${req.method} ${res.statusCode} +${
          Date.now() - logtimeval
        }ms`,
        req.originalUrl,
      );
    });
    next();
  }
}
