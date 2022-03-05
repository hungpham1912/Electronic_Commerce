import {
  Controller,
  UseGuards,
  Get,
  Post,
  // Delete,
  // Put,
  Body,
  Param,
  // Header,
  Req,
  // Request,
  // Res,
  // Response,
  // ParseIntPipe,
  MessageEvent,
  UseInterceptors,
  ClassSerializerInterceptor,
  // UsePipes,
  // ValidationPipe,
  SerializeOptions,
  Session,
  Render,
  Inject,
  CACHE_MANAGER,
  UploadedFile,
  // HttpException,
  // HttpStatus,
  Sse,
} from '@nestjs/common';
import { UsersService } from './users.service';
// import { LocalAuthGuard } from '../auth/guard/local-auth.guard';
import * as dotenv from 'dotenv';
import { Humman, Role, Teacher, User } from './users.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
// import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/role/role.decorator';
// import { JwtStrategy } from 'src/auth/strategy/jwt.strategy';
import * as bcrypt from 'bcrypt';
// import { createCipheriv, createDecipheriv, randomBytes, scrypt } from 'crypto';
// import { promisify } from 'util';
// import { AppleAuthGuard } from '../auth/guard/apple-auth.guard';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
// import { CreateUserDto } from './dto/create-use.dto';
// import { UserDecorator } from './decorator/user.decorator';
// import { ValidationPipeNew } from 'src/auth/validations/validation.pipe';
// import { JoiValidationPipe } from 'src/auth/validations/JoiValidationPipe.pipe';
// import { use } from 'passport';

import { RolesGuard } from 'src/auth/guard/role.guard';
// import {
//   CaslAbilityFactory,
//   Action,
//   AppAbility,
// } from 'src/casl/casl-ability.factory';
// import { CheckPolicies } from 'src/auth/policies/check-policies';
import { PoliciesGuard } from 'src/auth/guard/policies.guard';
// import { testS } from './user.test';
// import { ConfigService } from '@nestjs/config';
// import { UpdateUserDto } from './dto/update-user.dto';
import { Cache } from 'cache-manager';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { FileInterceptor } from '@nestjs/platform-express';
// import { Cookie } from 'express-session';
// import { Public } from 'src/auth/decorator/jwt.decorator';
// import { JwtTestAuthGuard } from 'src/auth/guard/jwt-test.guard';
import { interval, map, Observable } from 'rxjs';
import { UserDecorator } from './decorator/user.decorator';
// import { LoggingInterceptor } from 'src/auth/interceptor/logging.interceptor';
// dotenv.config();

export class OrderCreatedEvent {
  constructor(Id) {
    this.Id = Id;
  }

  Id: number;
  payload: object;
}

@Controller('users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
// @UseInterceptors(LoggingInterceptor)
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    // private caslAbilityFactory: CaslAbilityFactory,
    // private configService: ConfigService,
    private eventEmitter: EventEmitter2,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    excludePrefixes: ['a'],
  })
  @Get('/:id')
  getById(@Param() param: any) {
    // console.log(param.id)
    return this.userService.findById(param.id);
  }

  @Get()
  getAll() {
    // const human = new Humman('adasd','asda','asd')
    // human.name = "Hung",
    // human.sex = "asdsad"
    // human.type = "Asdasd"
    // const ds = new Teacher('adasd','asda','asd')
    // ds.job= "Asd"
    // console.log(ds)
    return this.userService.findAll();
  }

  @Sse('sse')
  sse(): Observable<MessageEvent> {
    return interval(1000).pipe(map((_) => ({ data: { hello: 'world' } })));
  }

  @Get('authorization')
  // @Roles(Role.ADMIN)
  @UseInterceptors(ClassSerializerInterceptor)
  async myEnforcement(@Req() req) {
    // const iv = randomBytes(16);
    // console.log(iv);
    // const password = 'Password used to generate key';
    // const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
    // console.log(key);
    // const cipher = createCipheriv('aes-256-ctr', key, iv);
    // console.log(cipher);
    // const textToEncrypt = 'Nest';
    // const encryptedText = Buffer.concat([
    //   cipher.update(textToEncrypt),
    //   cipher.final(),
    // ]);
    // console.log(encryptedText);

    // const decipher = createDecipheriv('aes-256-ctr', key, iv);
    // const decryptedText = Buffer.concat([
    //   decipher.update(encryptedText),
    //   decipher.final(),
    // ]);

    // console.log(decryptedText);
    const saltOrRounds = 10;
    const password = 'random_password';
    const hash = await bcrypt.hash(password, saltOrRounds);
    const salt = await bcrypt.genSalt();
    console.log(salt);
    const isMatch = await bcrypt.compare(password, hash);

    return 'Content in here...';
  }

  // @UseGuards(LocalAuthGuard)
  @UseGuards(RolesGuard, PoliciesGuard)
  @Get('/test/:id')
  @Roles(Role.ADMIN)
  // @UsePipes(new ValidationPipeNew())
  // @UsePipes(new JoiValidationPipe(TestSc))
  // @CheckPolicies((ability: AppAbility) =>
  //   ability.can(Action.Manage, User),
  // )
  async test(
    @Req() request,
    @Session() session: Record<string, any>,
    @Param('id') id: number,
    @Body() body: any,
    // @Cookies('name') name: string
  ) {
    // const ability = this.caslAbilityFactory.createForUser(request.user);
    // // console.log(ability.can(Action.Read, 'all'))
    // if (ability.can(Action.Read, 'all')) {
    // console.log('asdasdasd');
    // request.session.visits = request.session.visits
    //   ? request.session.visits + 1
    //   : 1;
    // console.log(session);
    // console.log(request.user);
    // const host = process.env.ACCESS_TOKEN_SECRET
    // console.log(host)
    // console.log(typeof id);
    // const ude = new UpdateUserDto();
    // ude.adress = 'Asdasd';
    // ude.email = 'asdasd';
    // console.log(ude);
    // const dbUser = this.configService.get<string>('ACCESS_TOKEN_SECRET');
    // console.log(dbUser)
    // }
    // console.log(request.cookie)
    // await this.cacheManager.set('keyy', 'sdfsfsfsf', { ttl: 1000 });
    // return request.user
    // if(id==3){
    //   throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    // }
    console.log('typeof id');
  }

  @Get('demo/cache')
  async cache() {
    const value = await this.cacheManager.get('keyy');
    console.log(value);
    await this.cacheManager.reset();
  }

  @Get('demo/event')
  async event() {
    this.eventEmitter.emit(
      'order.created',
      new OrderCreatedEvent({
        Id: 1,
        payload: {},
      }),
    );
  }

  @OnEvent('order.created')
  handleOrderCreatedEvent(payload: OrderCreatedEvent) {
    // handle and process "OrderCreatedEvent" event
    console.log('dadasd');
    console.log(payload);
  }

  @Post('/demo/file')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file.buffer);
    const base64String = btoa(String.fromCharCode(...new Uint8Array()));
    return file;
  }

  @Get('demo/mvc')
  @Render('index')
  root() {
    return { message: 'Hello world!', test: 'asdasdas' };
  }
}
