import { Module } from '@nestjs/common';
import { YouTubeService } from './service/you-tube.service';
import { YouTubeController } from './controller/you-tube.controller';
import { authModule } from 'src/auth/module/module.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    authModule,
    MulterModule.register({
      dest: './upload',
    }),
  ],
  providers: [YouTubeService],
  controllers: [YouTubeController],
})
export class YouTubeModule {}
