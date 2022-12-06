import { BadGatewayException, Injectable } from '@nestjs/common';
import { Member } from '@prisma/client';
import { prismaService } from 'src/prisma.service';
import { MemberDto } from '../dto/member.request.dto';

@Injectable()
export class MemberService {
  constructor(private prismaService: prismaService) {}

  async takemember(qur): Promise<Member[]> {
    const index = (Number(qur) - 1) * 20;
    const data = await this.prismaService.member.findMany({
      take: 20,
      skip: index,
    });
    return data;
  }
  async uploadImg(files: Array<Express.Multer.File>) {
    try {
      for (let index = 0; index < files.length; index++) {
        const result = {
          imgLink: `http://localhost:8080/media/history/${files[index].filename}`,
        };
        const data = await this.prismaService.member.createMany({
          data: result,
        });
      }
      return { code: 200 };
    } catch (error) {
      throw new BadGatewayException('알수없는오류로 업로드가 불가합니다');
    }
  }
}
