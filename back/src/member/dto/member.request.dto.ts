import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class MemberDto {
  @ApiProperty({
    example: '사람이름',
    description: '엄...',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: '간단한 1줄짜리 설명',
    description: '없어도 되긴함 나이 몇세 장로직 이런식으로',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  explain: string;

  @ApiProperty({
    example: '직책',
    description: '장로',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  line: string;
}
