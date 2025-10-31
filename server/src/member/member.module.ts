import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { authModule } from 'src/auth/module/module.module';
import { MemberController } from './controller/member.controller';
import { MemberService } from './service/member.service';

@Module({
  imports: [
    authModule,
    MulterModule.register({
      dest: './upload',
    }),
  ],
  controllers: [MemberController],
  providers: [MemberService],
  exports: [MemberService],
})
export class MemberModule {}
