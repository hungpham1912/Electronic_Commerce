import { Inject, Injectable } from '@nestjs/common';
import { Repository } from "typeorm";
import { Product } from "./product.entity";
@Injectable()
export class ProductsService {
    constructor(
        @Inject('PRODUCT_REPOSITORY')
        private ProducRepository: Repository<Product>,
    ){}

    async findProductByProducId(id: any){
        const as = await this.ProducRepository.findOne(id);
        return as;
    }





}
