import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Post } from '@prisma/client';
import { prismaService } from 'src/prisma.service';
import { Request } from 'express';
import { PostDto } from '../dto/post.request.dto';
import { Type } from 'class-transformer';

@Injectable()
export class PostService {
  constructor(private prismaService: prismaService) {}

  async uploadImg(files: Array<Express.Multer.File>) {
    let url = 'http://localhost:8080/media/announced/';
    url += files[0].filename;
    return url;
  }

  async uploadPost(postInfo: PostDto) {
    try {
      const num = Number(postInfo.authorId);
      const result = await this.prismaService.user.findUnique({
        where: { id: 1 },
      });
      const creatdata = {
        title: postInfo.title,
        content: postInfo.content,
        authorId: result.id,
      };
      const data = await this.prismaService.post.createMany({
        data: creatdata,
      });

      return data;
    } catch (error) {
      throw new UnauthorizedException('알수없는오류로 업로드가 불가합니다');
    }
  }

  async takePost(id: number): Promise<Post[]> {
    try {
      const data = await this.prismaService.post.findMany({
        where: { authorId: id },
      });

      return data;
    } catch (error) {
      throw new UnauthorizedException('알수없는오류로 업로드가 불가합니다');
    }
  }
}
