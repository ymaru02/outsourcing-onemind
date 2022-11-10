import { Controller, Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ControllerController } from '../controller/controller.controller';
import { ServiceService } from '../service/service.service';

@Module({
  controllers: [ControllerController],
  providers: [ServiceService, PrismaService],
  exports: [ServiceService, PrismaService],
})
export class authModule {}
