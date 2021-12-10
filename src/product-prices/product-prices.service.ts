import { Injectable, Inject} from '@nestjs/common';
import { ProductPrices } from './product-prices.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductPricesService {
    constructor(
        @Inject('PRODUCTPRICES_REPOSITORY')
        private ProducPriceRepository: Repository<ProductPrices>,

    ){}
    
    async find_by_producPriceId(id: any){
        const as = await this.ProducPriceRepository.find({where:{id:id}});
        return as;
    }


    

}
