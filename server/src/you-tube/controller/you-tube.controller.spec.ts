import { Test, TestingModule } from '@nestjs/testing';
import { YouTubeController } from './you-tube.controller';

describe('YouTubeController', () => {
  let controller: YouTubeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YouTubeController],
    }).compile();

    controller = module.get<YouTubeController>(YouTubeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
