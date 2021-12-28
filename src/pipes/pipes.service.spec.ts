import { Test, TestingModule } from '@nestjs/testing';
import { PipesService } from './pipes.service';

describe('PipesService', () => {
  let service: PipesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PipesService],
    }).compile();

    service = module.get<PipesService>(PipesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
