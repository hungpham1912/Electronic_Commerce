import { Connection } from 'typeorm';
import { Oders } from './oders.entity';

export const odersProviders = [
  {
    provide: 'ODERS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Oders),
    inject: ['DATABASE_CONNECTION'],
  },
];
