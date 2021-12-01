import { Test, TestingModule } from '@nestjs/testing';
import { OdersController } from './oders.controller';

describe('OdersController', () => {
  let controller: OdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OdersController],
    }).compile();

    controller = module.get<OdersController>(OdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
