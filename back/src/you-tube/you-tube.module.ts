import { Module } from '@nestjs/common';
import { YouTubeService } from './service/you-tube.service';
import { YouTubeController } from './controller/you-tube.controller';
import { authModule } from 'src/auth/module/module.module';

@Module({
  imports: [authModule],
  providers: [YouTubeService],
  controllers: [YouTubeController],
})
export class YouTubeModule {}
