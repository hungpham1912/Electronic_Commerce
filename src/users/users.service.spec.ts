import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let controller: UsersController;
  let mockUserService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    })
      .overrideProvider(UsersService)
      .useValue(mockUserService)
      .compile();
    service = module.get<UsersService>(UsersService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
