import { Test, TestingModule } from '@nestjs/testing';
import { ItcotpController } from './itcotp.controller';
import { ItcotpService } from './itcotp.service';

describe('ItcotpController', () => {
  let controller: ItcotpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItcotpController],
      providers: [ItcotpService],
    }).compile();

    controller = module.get<ItcotpController>(ItcotpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
