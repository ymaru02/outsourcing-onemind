import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { authModule } from './auth/module/module.module';
import { ServiceService } from './auth/service/service.service';
import { ControllerController } from './auth/controller/controller.controller';
import { LoggerMiddleware } from './logger/logger.middleware';

@Module({
  imports: [authModule],
  controllers: [AppController, ControllerController],
  providers: [AppService, ServiceService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
