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
}
