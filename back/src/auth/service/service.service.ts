import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ServiceService {
  constructor(private PrismaService: PrismaService) {}

  async takeOneUser(): Promise<User[]> {
    return await this.PrismaService.user.findMany();
  }
}
