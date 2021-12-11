import { Injectable, Inject} from '@nestjs/common';
import { ProductPrices } from './product-prices.entity';
import { Repository } from 'typeorm';
import { OderItems } from "../oder-items/oder-items.entity";

@Injectable()
export class ProductPricesService {
    constructor(
        @Inject('PRODUCTPRICES_REPOSITORY')
        private ProducPriceRepository: Repository<ProductPrices>,

    ){}
    
    async find_by_producPriceId(oderItem: OderItems){
     
        const as = await this.ProducPriceRepository.findOne({where:{id:null}});
        // const as = await this.ProducPriceRepository.createQueryBuilder('ProductPrices')
        // .leftJoinAndSelect("OderItems.productPrices","ProductPrices")
        // .where("ProductPrices.id = :id", { id })
        return as;
    }


    

}
