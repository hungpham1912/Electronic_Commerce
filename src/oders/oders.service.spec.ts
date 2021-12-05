import { Test, TestingModule } from '@nestjs/testing';
import { OdersService } from './oders.service';

describe('OdersService', () => {
  let service: OdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OdersService],
    }).compile();

    service = module.get<OdersService>(OdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
