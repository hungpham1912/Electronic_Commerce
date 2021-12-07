import { Test, TestingModule } from '@nestjs/testing';
import { OderItemsService } from './oder-items.service';

describe('OderItemsService', () => {
  let service: OderItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OderItemsService],
    }).compile();

    service = module.get<OderItemsService>(OderItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
