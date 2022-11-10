import { Controller, Get } from '@nestjs/common';
import { User } from '@prisma/client';
import { ServiceService } from '../service/service.service';

@Controller('auth')
export class ControllerController {
  constructor(private readonly Service: ServiceService) {}

  @Get()
  async fetchAllUser(): Promise<User[]> {
    return this.Service.takeOneUser();
  }
}
