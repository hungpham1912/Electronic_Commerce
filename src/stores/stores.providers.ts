import { Connection } from 'typeorm';
import { Stores } from './stores.entity';

export const ProductProviders = [
  {
    provide: 'STORES_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Stores),
    inject: ['DATABASE_CONNECTION'],
  },
];
