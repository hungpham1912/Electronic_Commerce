import { Test, TestingModule } from '@nestjs/testing';
import { ProductPricesService } from './product-prices.service';

describe('ProductPricesService', () => {
  let service: ProductPricesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductPricesService],
    }).compile();

    service = module.get<ProductPricesService>(ProductPricesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
