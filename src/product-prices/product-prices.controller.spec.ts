import { Test, TestingModule } from '@nestjs/testing';
import { ProductPricesController } from './product-prices.controller';

describe('ProductPricesController', () => {
  let controller: ProductPricesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductPricesController],
    }).compile();

    controller = module.get<ProductPricesController>(ProductPricesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
