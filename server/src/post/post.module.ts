import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { authModule } from 'src/auth/module/module.module';
import { PostController } from './controller/post.controller';
import { PostService } from './service/post.service';

@Module({
  imports: [
    authModule,
    MulterModule.register({
      dest: './upload',
    }),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
