import { Injectable,Inject } from '@nestjs/common';
import { Repository } from "typeorm";
import { Stores } from "./stores.entity";
@Injectable()
export class StoresService {
    constructor(
        @Inject('STORES_REPOSITORY')
        private ProducRepository: Repository<Stores>,
    ){}

    async find_by_storeId(id: any){
        const as = await this.ProducRepository.find({where:{id:id}});
        return as;
    }

}
