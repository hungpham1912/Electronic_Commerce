import { Injectable,Inject } from '@nestjs/common';
import { Repository } from "typeorm";
import { Stores } from "./stores.entity";
@Injectable()
export class StoresService {
    constructor(
        @Inject('STORES_REPOSITORY')
        private StoresRepository: Repository<Stores>,
    ){}

    async findAll(){
        return this.StoresRepository.find();
    }

    async findByStoreId(id: any){
        const as = await this.StoresRepository.findOne(id);
        return as;
    }
     

}
