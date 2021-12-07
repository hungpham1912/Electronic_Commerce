import { Connection } from 'typeorm';
import { OderItems } from './oder-items.entity';

export const odersProviders = [
  {
    provide: 'ODERITEMS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(OderItems),
    inject: ['DATABASE_CONNECTION'],
  },
];
