import { BadGatewayException, Injectable } from '@nestjs/common';
import { SrvRecord } from 'dns';
import { prismaService } from 'src/prisma.service';
import { YouTubeDto } from '../dto/youtube.request.dto';

@Injectable()
export class YouTubeService {
  constructor(private prismaService: prismaService) {}

  async upload(content: YouTubeDto) {
    try {
      const data = await this.prismaService.youTube.createMany({
        data: content,
      });

      return data;
    } catch (error) {
      throw new BadGatewayException();
    }
  }

  async takeList() {
    try {
      const data = await this.prismaService.youTube.findMany();
      return data;
    } catch (error) {
      throw new BadGatewayException();
    }
  }
  async findtag(id: string) {
    try {
      const data = await this.prismaService.youTube.findUnique({
        where: { id: Number(id) },
      });
      return data;
    } catch (error) {
      throw new BadGatewayException();
    }
  }
}
