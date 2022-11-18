import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { ServiceService } from '../service/service.service';
import { ApiOperation } from '@nestjs/swagger';
import { assignAuth } from '../dto/auth.request.dto';
import { LoginRequestDto } from '../dto/login.request.dto';
import { JwtAuthGuard } from '../jwt/jwt.guard';
import { Request } from 'express';
@Controller('auth')
export class ControllerController {
  constructor(private readonly Service: ServiceService) {}

  @ApiOperation({ summary: '이메일 중복 체크' })
  @Get()
  @UseGuards(JwtAuthGuard)
  async takeU(@Req() req: Request) {
    return req.user;
  }

  @ApiOperation({ summary: '로그인' })
  @Post('login')
  async Login(@Body() Body: LoginRequestDto) {
    return this.Service.JwtLogin(Body);
  }

  @ApiOperation({ summary: '회원가입' })
  @Post('assign')
  async Assign(@Body() info: assignAuth) {
    return this.Service.Assign(info);
  }

  @ApiOperation({ summary: '이메일 중복 체크' })
  @Get('email')
  async checkE(@Body() info: assignAuth) {
    return this.Service.findUser(info);
  }

  @ApiOperation({ summary: '이름 중복 체크' })
  @Get('id')
  async checkN(@Body() info: assignAuth) {
    return this.Service.checkName(info.name);
  }
}
