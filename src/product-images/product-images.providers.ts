import { Connection } from 'typeorm';
import { ProductImages } from './product-images.entity';

export const ProductPriceProviders = [
  {
    provide: 'PRODUCTIMAGES_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(ProductImages),
    inject: ['DATABASE_CONNECTION'],
  },
];
