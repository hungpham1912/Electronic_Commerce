import { Test, TestingModule } from '@nestjs/testing';
import { ChatgetwayController } from './chatgetway.controller';
import { ChatgetwayService } from './chatgetway.service';

describe('ChatgetwayController', () => {
  let controller: ChatgetwayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatgetwayController],
      providers: [ChatgetwayService],
    }).compile();

    controller = module.get<ChatgetwayController>(ChatgetwayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
