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

    // async findOderItemsByOrderId(id: number){
    //     const as = await this.oderItemsRepository.find({where:{productPrices:id}});
    //     return as;
    // }


    async findOderItemsByOrderId(id: number){
        const as = await this.oderItemsRepository.createQueryBuilder()
        .select('orderitems')
        .from(OderItems,'orderitems')
        .where("orderitems.oderId = :id", { id: id })
        .getMany();
        return as;
    }

}
