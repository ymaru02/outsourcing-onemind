import { Controller, Get } from '@nestjs/common';
import { User } from '@prisma/client';
import { ServiceService } from '../service/service.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('auth')
export class ControllerController {
  constructor(private readonly Service: ServiceService) {}

  @ApiOperation({ summary: '로그인' })
  @Get()
  async fetchAllUser(): Promise<User[]> {
    return this.Service.takeOneUser();
  }
}
