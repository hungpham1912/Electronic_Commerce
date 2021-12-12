import { Connection } from 'typeorm';
import { ProductPrices } from './product-prices.entity';

export const ProductPriceProviders = [
  {
    provide: 'PRODUCTPRICES_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(ProductPrices),
    inject: ['DATABASE_CONNECTION'],
  },
];
