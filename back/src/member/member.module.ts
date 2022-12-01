import { Module } from '@nestjs/common';
import { authModule } from 'src/auth/module/module.module';
import { MemberController } from './controller/member.controller';
import { MemberService } from './service/member.service';

@Module({
  imports: [authModule],
  controllers: [MemberController],
  providers: [MemberService],
  exports: [MemberService],
})
export class MemberModule {}
