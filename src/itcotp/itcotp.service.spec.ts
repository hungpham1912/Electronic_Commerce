import { Test, TestingModule } from '@nestjs/testing';
import { ItcotpService } from './itcotp.service';

describe('ItcotpService', () => {
  let service: ItcotpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItcotpService],
    }).compile();

    service = module.get<ItcotpService>(ItcotpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
