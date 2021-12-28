import { Test, TestingModule } from '@nestjs/testing';
import { PipesController } from './pipes.controller';
import { PipesService } from './pipes.service';

describe('PipesController', () => {
  let controller: PipesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PipesController],
      providers: [PipesService],
    }).compile();

    controller = module.get<PipesController>(PipesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
