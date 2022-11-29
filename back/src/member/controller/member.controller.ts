import {
  Body,
  Controller,
  Get,
  Post,
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
  async takeMember(@Req() req: Request) {
    try {
      const data = await this.service.takemember();
      return { code: 200, data: data };
    } catch (error) {
      throw new UnauthorizedException('mysql is dead');
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('img')
  @UseInterceptors(FilesInterceptor('files', 1, multerOptions('memberImg')))
  async uploadImg(
    @Body() member: MemberDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    return this.service.plusMember(member, files);
  }
}
