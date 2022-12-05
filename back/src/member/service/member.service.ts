import { Injectable } from '@nestjs/common';
import { Member } from '@prisma/client';
import { prismaService } from 'src/prisma.service';
import { MemberDto } from '../dto/member.request.dto';

@Injectable()
export class MemberService {
  constructor(private prismaService: prismaService) {}

  async takemember(): Promise<Member[]> {
    const data = await this.prismaService.member.findMany();
    return data;
  }
}
