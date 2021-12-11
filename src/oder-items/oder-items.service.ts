import { Injectable,Inject } from '@nestjs/common';
import { OderItems } from './oder-items.entity';
import { Repository } from 'typeorm';
@Injectable()
export class OderItemsService {
    constructor(
        @Inject('ODERSITEMS_REPOSITORY')
        private oderItemsRepository: Repository<OderItems>,
    ) { }

    async addOderItem(){
        
    }

    async findByProductPriceId(id: number){
        const as = await this.oderItemsRepository.find({where:{productPrices:id}});
        return as;
    }


    async find_by_orderItemId(id: number){
        const as = await this.oderItemsRepository.find({where:{Oder:id}});
        return as;
    }

}
