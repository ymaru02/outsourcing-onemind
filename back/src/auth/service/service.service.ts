import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User, Post } from '@prisma/client';
import { prismaService } from 'src/prisma.service';
import { assignAuth } from '../dto/auth.request.dto';
import { LoginRequestDto } from '../dto/login.request.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { EmailRequestDto } from '../dto/email.request.dto';
import { NameRequestDto } from '../dto/name.request.dto';
@Injectable()
export class ServiceService {
  constructor(
    private prismaService: prismaService,
    private jwtService: JwtService,
  ) {}

  async takeOneUser(): Promise<User[]> {
    console.log('들어는 왔음');
    return await this.prismaService.user.findMany();
  }

  async findUser(info: EmailRequestDto): Promise<User> {
    return await this.prismaService.user.findUnique({
      where: { email: info.email },
    });
  }

  async checkName(nicname: NameRequestDto): Promise<User> {
    return await this.prismaService.user.findUnique({
      where: { name: nicname.name },
    });
  }

  async Assign(body: assignAuth) {
    const { email, name, password } = body;
    const hashP = await bcrypt.hash(password, 10);
    const data = { email, name, password: hashP };
    const creatUser = await this.prismaService.user.create({ data: data });
    return { code: 200 };
  }

  async JwtLogin(info: LoginRequestDto) {
    const { email, password } = info;
    try {
      const people = await this.prismaService.user.findUnique({
        where: { email: info.email },
      });
      const passwordIsOkay: boolean = await bcrypt.compare(
        password,
        people.password,
      );
      if (!people) {
        throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요');
      }
      if (!passwordIsOkay) {
        throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요');
      }
      const payload = { email: email, id: people.id, name: people.name };

      return {
        token: this.jwtService.sign(payload),
      };
    } catch (error) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요');
    }
  }
}
