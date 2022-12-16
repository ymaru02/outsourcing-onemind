import { BadGatewayException, Injectable } from '@nestjs/common';
import { SrvRecord } from 'dns';
import { prismaService } from 'src/prisma.service';
import { YouTubeDto } from '../dto/youtube.request.dto';

@Injectable()
export class YouTubeService {
  constructor(private prismaService: prismaService) {}

  async upload(content: YouTubeDto) {
    const sdata = {
      title: content.title,
      tag: content.tag,
    };
    const data = await this.prismaService.youTube.createMany({
      data: sdata,
    });

    return data;
  }

  async takeList() {
    try {
      const data = await this.prismaService.youTube.findMany();
      return data;
    } catch (error) {
      throw new BadGatewayException();
    }
  }
  async findtag(id) {
    try {
      const data = await this.prismaService.youTube.findUnique({
        where: { id: Number(id) },
      });
      console.log(data);
      return data;
    } catch (error) {
      throw new BadGatewayException();
    }
  }

  async deleteTag(id) {
    try {
      const data = await this.prismaService.youTube.delete({
        where: { id: Number(id) },
      });
      console.log(data);
      return data;
    } catch (error) {
      throw new BadGatewayException();
    }
  }
}
