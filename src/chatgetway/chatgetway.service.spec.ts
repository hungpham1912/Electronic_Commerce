import { Test, TestingModule } from '@nestjs/testing';
import { ChatgetwayService } from './chatgetway.service';

describe('ChatgetwayService', () => {
  let service: ChatgetwayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatgetwayService],
    }).compile();

    service = module.get<ChatgetwayService>(ChatgetwayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
