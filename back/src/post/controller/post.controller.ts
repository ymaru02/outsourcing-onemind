import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  Req,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { PostService } from '../service/post.service';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { FilesInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/common/utils/multer.options';
import { PostDto } from '../dto/post.request.dto';
@Controller('post')
export class PostController {
  constructor(private service: PostService) {}

  // @UseGuards(JwtAuthGuard)
  @Post('img')
  @UseInterceptors(FilesInterceptor('files', 10, multerOptions('announced')))
  async uploadImg(
    @Req() req: Request,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    console.log(files);
    return this.service.uploadImg(files);
  }

  @UseGuards(JwtAuthGuard)
  @Post('upload')
  async uploadPost(@Body() content: PostDto) {
    console.log(content);
    return this.service.uploadPost(content);
  }

  @Get('takepost')
  async takePost(@Req() req: Request) {
    const result = this.service.takePost(Number(req.query.id));
    return result;
  }

  @Get('takecontent')
  async takeContent(@Req() req: Request) {
    const result = this.service.takeContent(Number(req.query.id));
    return result;
  }

  @Post('update')
  async updatePost(@Body() content) {
    const result = this.service.updatePost(content.id, content.data);
    return result;
  }

  @Delete('delete')
  async deletePost(@Query('id') id: any) {
    const result = this.service.deletePost(id);
    return result;
  }

  @Post('attachfile')
  @UseInterceptors(FilesInterceptor('files', 10, multerOptions('attachFile')))
  async attachFile(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body('authorId') id: any,
    @Body('originalName') name: any,
  ) {
    // console.log(files, id);
    const result = this.service.attachFiles(id, name, files);
    return result;
  }
}
