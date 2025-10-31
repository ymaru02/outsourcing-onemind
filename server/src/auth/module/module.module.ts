import { Controller, Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { prismaService } from 'src/prisma.service';
import { ControllerController } from '../controller/controller.controller';
import { JwtStrategy } from '../jwt/jwt.strategy';
import { ServiceService } from '../service/service.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt', session: true }),
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '1y' },
    }),
  ],
  controllers: [ControllerController],
  providers: [ServiceService, prismaService, JwtStrategy],
  exports: [ServiceService, prismaService, JwtStrategy],
})
export class authModule {}
