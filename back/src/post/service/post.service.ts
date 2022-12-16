import {
  BadGatewayException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
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
        where: { id: num },
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
      throw new BadGatewayException('알수없는오류로 업로드가 불가합니다');
    }
  }

  async takePost(id: number): Promise<Post[]> {
    try {
      const data = await this.prismaService.post.findMany();

      return data;
    } catch (error) {
      throw new BadGatewayException();
    }
  }
  async takeContent(id: number): Promise<Post> {
    const data = await this.prismaService.post.findUnique({
      where: { id: id },
    });
    return data;
  }

  async deletePost(id: any) {
    try {
      const data = await this.prismaService.post.delete({
        where: { id: Number(id) },
      });
    } catch (error) {
      throw new BadGatewayException();
    }
  }

  async updatePost(num: any, postInfo: PostDto) {
    try {
      const authNum = Number(postInfo.authorId);
      const result = await this.prismaService.user.findUnique({
        where: { id: authNum },
      });
      const creatdata = {
        title: postInfo.title,
        content: postInfo.content,
        authorId: result.id,
      };
      const data = await this.prismaService.post.update({
        data: creatdata,
        where: { id: Number(num) },
      });
      return data;
    } catch (error) {
      throw new BadGatewayException();
    }
  }
}
