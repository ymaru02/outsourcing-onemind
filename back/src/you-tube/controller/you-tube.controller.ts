import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { YouTubeDto } from '../dto/youtube.request.dto';
import { YouTubeService } from '../service/you-tube.service';

@Controller('you-tube')
export class YouTubeController {
  constructor(private readonly service: YouTubeService) {}

  @UseGuards(JwtAuthGuard)
  @Post('upload')
  async upload(@Body() content: YouTubeDto) {
    console.log(content);
    return this.service.upload(content);
  }

  @Get('list')
  async takeList() {
    return this.service.takeList();
  }

  @Get('tag')
  async takeTag(@Query('id') num) {
    return this.service.findtag(num);
  }
}
