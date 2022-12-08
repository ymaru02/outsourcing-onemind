import {
  BadGatewayException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UnauthorizedException,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { MemberService } from '../service/member.service';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/common/utils/multer.options';
import { MemberDto } from '../dto/member.request.dto';
@Controller('member')
export class MemberController {
  constructor(private readonly service: MemberService) {}

  @Get('takemember')
  async takeMember(@Query('index') qer) {
    return await this.service.takemember(qer);
  }
  @Post('uploaddata')
  @UseInterceptors(FilesInterceptor('files', 10, multerOptions('history')))
  async uploadImg(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
    return this.service.uploadImg(files);
  }
}
