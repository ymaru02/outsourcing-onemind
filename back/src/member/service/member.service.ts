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
  async plusMember(member: MemberDto, files: Array<Express.Multer.File>) {
    let url = 'http://localhost:3000';
    url += files[0].path;
    const memberData = {
      name: member.name,
      explain: member.explain,
      line: member.line,
      imgLink: url,
    };
    const data = await this.prismaService.member.create({ data: memberData });
    return { code: 200, data: data };
  }
}
