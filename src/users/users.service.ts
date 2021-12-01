import { Injectable, HttpException, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entity/users.entity';
import "reflect-metadata";

@Injectable()
export class UsersService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ) { }

    public async getAll(): Promise<User[]>{
        return this.userRepository.find();
    }
}
