import {
  BadGatewayException,
  Injectable,
  NotFoundException,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { Post } from '@prisma/client';
import { prismaService } from 'src/prisma.service';
import { Request, Response } from 'express';
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
      const data = await this.prismaService.post.create({
        data: creatdata,
      });
      console.log(data);
      return data;
    } catch (error) {
      throw new BadGatewayException('알수없는오류로 업로드가 불가합니다');
    }
  }

  async takePost(id: number): Promise<Post[]> {
    try {
      const data = await this.prismaService.post.findMany({
        orderBy: { id: 'desc' },
        include: { File: true },
      });

      return data;
    } catch (error) {
      throw new BadGatewayException();
    }
  }
  async takeContent(id: number): Promise<Post> {
    const data = await this.prismaService.post.findUnique({
      where: { id: id },
      include: { File: true },
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
    const search = await this.prismaService.post.findUnique({
      where: { id: Number(num) },
    });
    console.log(search);
    const result = await this.prismaService.user.findUnique({
      where: { id: search.authorId },
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
  }

  async attachFiles(id, name, files: Array<Express.Multer.File>) {
    let url = '';
    url += files[0].filename;
    const findFileNum = await this.prismaService.post.findUnique({
      where: { id: Number(id) },
    });
    // console.log(findFileNum);
    const data = { tag: url, PostId: findFileNum.id, name: name };
    const insertData = await this.prismaService.file.create({ data: data });
    return 1;
  }

  async filedownload(res: Response, name: string) {
    const url = './dist/common/uploads/attachFile/';
    const data = await this.prismaService.file.findUnique({
      where: { id: Number(name) },
    });
    return res.download(`${url}${data.tag}`);
  }
}
