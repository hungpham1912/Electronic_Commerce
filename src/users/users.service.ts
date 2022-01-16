import {
  Injectable,
  HttpException,
  Inject,
  ConsoleLogger,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { User, Role } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { SendGridService } from '@anchan828/nest-sendgrid';
import { EmailService } from '../email/email.service';
import 'reflect-metadata';
import { CreateUserDto } from './dto/create-use.dto';
import * as bcrypt from 'bcrypt';
import { CaslAbilityFactory } from 'src/casl/casl-ability.factory';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    private readonly emailService: EmailService,
    private caslAbilityFactory: CaslAbilityFactory
  ) {}

  async findAll() {
    return await this.userRepository.find();
  }


  async findOne(email: string) {
    const as = await this.userRepository.find({ where: { email: email } });
    if (as.length > 0) {
      const User = {
        id: as[0].id,
        full_name: as[0].full_name,
        phone: as[0].phone,
        email: as[0].email,
        adress: as[0].adress,
        password: as[0].password,
        role: Role.USER,
      };
      return User;
    } else return null;
  }

   findById(id: number) {
    const ts =  this.userRepository.findOne(id);
    
    return ts;
   
    
  }

  async changePassword(newPassword: any) {
    const updatePassword = await this.userRepository
      .createQueryBuilder()
      .update(User)
      .set({ password: newPassword.newPassword })
      .where('id = :id', { id: newPassword.userId })
      .execute();
    return { statusCode: 200, message: 'OK' };
  }

  async authenticationSignup(infomationSignup: CreateUserDto) {
    infomationSignup.password =  String(await this.Enncryption(infomationSignup.password ))
    console.log(await this.Enncryption(infomationSignup.password ))
    const as = await this.userRepository.find();
    if (as.length == 0) {
      this.emailService.sendEmail(infomationSignup);
      this.userRepository.save(infomationSignup);
      return { error: 200, status: 'OK' };
    } else {
      const emailExist = await this.userRepository.findOne({
        where: { email: infomationSignup.email },
      });
      if (emailExist == null) {
        this.emailService.sendEmail(infomationSignup);
        this.userRepository.save(infomationSignup);
        return { error: 200, status: 'OK' };
      } else return { error: 403, status: 'Account alredy exist!!' };
    }
  }

  async Enncryption(password: string): Promise<string>{
    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);
  }

  async answerForgotPassword(email: string) {
    const checkMail = await this.findOne(email);
    if (checkMail != null) {
      this.emailService.sendEmailConfirmForgotPassword(
        email,
        checkMail.password,
      );
      return { statusCode: 200, message: 'OK' };
    } else return { statusCode: 404, message: 'Not find email' };
  }

  async test(test: User) {
    

    const asd: User = null;
    asd.full_name = test.full_name;
    asd.phone = test.phone;
    asd.email = test.email;
    asd.adress = test.adress;
    asd.password = test.password;
    asd.role = Role.USER;
    console.log(asd);
    this.userRepository.save(asd);
  }
}
