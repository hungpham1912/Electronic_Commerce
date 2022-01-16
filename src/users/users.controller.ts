import {
  Controller,
  UseGuards,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  Header,
  Req,
  Request,
  Res,
  Response,
  ParseIntPipe,
  UseInterceptors,
  ClassSerializerInterceptor,
  UsePipes,
  ValidationPipe,
  SerializeOptions,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { LocalAuthGuard } from '../auth/guard/local-auth.guard';
import * as dotenv from 'dotenv';
import { Humman, Role, Teacher, User } from './users.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/role/role.decorator';
import { JwtStrategy } from 'src/auth/strategy/jwt.strategy';
import * as bcrypt from 'bcrypt';
import { createCipheriv, createDecipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';
import { AppleAuthGuard } from '../auth/guard/apple-auth.guard';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { CreateUserDto } from './dto/create-use.dto';
import { UserDecorator } from './decorator/user.decorator';
import { ValidationPipeNew } from 'src/auth/validations/validation.pipe';
import { JoiValidationPipe } from 'src/auth/validations/JoiValidationPipe.pipe';
import { use } from 'passport';
import { RolesGuard } from 'src/auth/guard/role.guard';
import { CaslAbilityFactory, Action, AppAbility } from 'src/casl/casl-ability.factory';
import { CheckPolicies } from 'src/auth/policies/check-policies';
import { PoliciesGuard } from 'src/auth/guard/policies.guard';
import { testS } from './user.test';

dotenv.config();
@Controller('users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard, PoliciesGuard)
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    // private caslAbilityFactory: CaslAbilityFactory,
    private  testS : testS
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
  get() {
    // const human = new Humman('adasd','asda','asd')
    // human.name = "Hung",
    // human.sex = "asdsad"
    // human.type = "Asdasd"
    // const ds = new Teacher('adasd','asda','asd')
    // ds.job= "Asd" 
    // console.log(ds) 
    this.testS.run()
  }

  @Get('authorization')
  @Roles(Role.ADMIN)
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
    console.log(hash);
    const salt = await bcrypt.genSalt();
    console.log(salt);
    const isMatch = await bcrypt.compare(password, hash);
    console.log(isMatch);

    return 'Content in here...';
  }

  @Get('/test/:id')
  @UseGuards(LocalAuthGuard)
  // @Roles(Role.ADMIN)
  // @UsePipes(new JoiValidationPipe(TestSc))
  // @CheckPolicies((ability: AppAbility) =>
  //   ability.can(Action.Manage, User),
  // )
  test(@Req() req) {
    // const ability = this.caslAbilityFactory.createForUser(req.user);
    // // console.log(ability.can(Action.Read, 'all'))
    // if (ability.can(Action.Manage, 'all')) {
      console.log('complete...');
    // }
  }
  
  @Get('/decorator')
  getDecorator(@UserDecorator() user: User) {
    console.log(user);
  }
}
