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
    
    async findByProducPriceById(productPricesId: number){
        const as = await this.ProducPriceRepository
        .createQueryBuilder()
        .select('product_prices')
        .from(ProductPrices,'product_prices')
        .where(`product_prices.id = ${productPricesId}`)
        .getOne();

        // const as = await this.ProducPriceRepository.createQueryBuilder('ProductPrices')
        // .leftJoinAndSelect("OderItems.productPrices","ProductPrices")
        // .where("ProductPrices.id = :id", { id })
        return as;
    }


    

}
