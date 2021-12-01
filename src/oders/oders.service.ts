import { Injectable, HttpException, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import {Oders } from './entity/oders.entity';
import "reflect-metadata";
@Injectable()
export class OdersService {
    constructor(
        @Inject('ODERS_REPOSITORY')
        private oderRepository: Repository<Oders>,
    ) { }

    public async getAll(): Promise<Oders[]>{
        return this.oderRepository.find();
    }
}
