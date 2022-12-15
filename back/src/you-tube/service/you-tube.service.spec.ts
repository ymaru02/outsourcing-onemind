import { Test, TestingModule } from '@nestjs/testing';
import { YouTubeService } from './you-tube.service';

describe('YouTubeService', () => {
  let service: YouTubeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YouTubeService],
    }).compile();

    service = module.get<YouTubeService>(YouTubeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
