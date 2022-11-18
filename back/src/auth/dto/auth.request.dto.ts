import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class assignAuth {
  @ApiProperty({
    example: 'aaa@aaa.com',
    description: '이메일',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'abc123!!',
    description: '비밀번호',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: '응우옌 꾸억 푸억 뿌직뿌직',
    description: '이름',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
