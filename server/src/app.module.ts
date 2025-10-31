import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { authModule } from './auth/module/module.module';
import { ServiceService } from './auth/service/service.service';
import { ControllerController } from './auth/controller/controller.controller';
import { LoggerMiddleware } from './logger/logger.middleware';
import { prismaService } from './prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PostModule } from './post/post.module';
import { MemberService } from './member/service/member.service';
import { MemberController } from './member/controller/member.controller';
import { MemberModule } from './member/member.module';
import { YouTubeModule } from './you-tube/you-tube.module';

@Module({
  imports: [
    authModule,
    PassportModule.register({ defaultStrategy: 'jwt', session: true }),
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '1h' },
    }),
    PostModule,
    MemberModule,
    YouTubeModule,
  ],
  controllers: [AppController, ControllerController, MemberController],
  providers: [AppService, ServiceService, prismaService, MemberService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
