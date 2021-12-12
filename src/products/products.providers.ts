import { Connection } from 'typeorm';
import { Product } from './product.entity';

export const ProductProviders = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Product),
    inject: ['DATABASE_CONNECTION'],
  },
];
