import { ConfigService } from '@nestjs/config';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { CaslAbilityFactory } from 'src/casl/casl-ability.factory';
import { EmailService } from 'src/email/email.service';
import { ItcotpService } from 'src/itcotp/itcotp.service';
import { Repository } from 'typeorm';
import { UsersController } from './users.controller';
import { User } from './users.entity';
import { UsersService } from './users.service';
import { Cache } from 'cache-manager';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;
  let userRepository: Repository<User>;
  let emailService: EmailService;
  let itcotpService: ItcotpService;
  let caslAbilityFactory: CaslAbilityFactory;
  let configService: ConfigService;
  let eventEmitter: EventEmitter2;
  let cacheManager: Cache;


  beforeEach(async () => {

    const mock = {}

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService]
    }).overrideProvider(UsersService).useValue(mock).compile();

    controller = module.get<UsersController>(UsersController);
    // service = new UsersService(
    //   userRepository,
    //   emailService,
    //   itcotpService,
    //   caslAbilityFactory,
    // );
    // controller = new UsersController(
    //   service,
    //   caslAbilityFactory,
    //   configService,
    //   eventEmitter,
    //   cacheManager
    // );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
