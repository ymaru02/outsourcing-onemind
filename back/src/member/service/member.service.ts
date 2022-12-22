import { BadGatewayException, ConsoleLogger, Injectable } from '@nestjs/common';
import { Member } from '@prisma/client';
import { prismaService } from 'src/prisma.service';
import { MemberDto } from '../dto/member.request.dto';

@Injectable()
export class MemberService {
  constructor(private prismaService: prismaService) {}
  // `${Number(qur)}-0${i}`
  async takemember(qur): Promise<Member[]> {
    const index = (Number(qur) - 1) * 20;
    const result = [];
    for (let i = 1; i < 12; i++) {
      let strgte = qur;
      let strlt = qur;
      if (i > 9) {
        strgte += '-';
        strlt += '-';
      } else {
        strgte += '-0';
        strlt += '-0';
      }
      strgte += String(i);
      strlt += String(i + 1);
      //console.log(strgte, strlt);
      const data = await this.prismaService.member.findMany({
        where: {
          createdAt: {
            gte: new Date(String(strgte)),
            lt: new Date(String(strlt)),
          },
        },
      });
      result.push(data);
    }
    const data = await this.prismaService.member.findMany({
      where: {
        createdAt: {
          gte: new Date(qur + '-012'),
          lt: new Date(String(Number(qur) + 1)),
        },
      },
    });
    result.push(data);
    return result;
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

  async deleteMember(id) {
    try {
      const data = await this.prismaService.member.delete({
        where: { id: Number(id) },
      });
    } catch (error) {
      throw new BadGatewayException('알수없는오류로 업로드가 불가합니다');
    }
  }
}
