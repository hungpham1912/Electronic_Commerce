import { Injectable, HttpException, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Oders } from './oders.entity';
import { OderItemsService } from "../oder-items/oder-items.service";
import { ProductPricesService } from "../product-prices/product-prices.service";
import { ProductsService } from "../products/products.service";
import { StoresService } from "../stores/stores.service";
import { ProductPrices } from "../product-prices/product-prices.entity";
import "reflect-metadata";
import { OderItems } from 'src/oder-items/oder-items.entity';
@Injectable()
export class OdersService {
    constructor(
        @Inject('ODERS_REPOSITORY',)
        private oderRepository: Repository<Oders>,
        @Inject('ODERSITEMS_REPOSITORY')
        private OderItemsRepository: Repository<OderItems>,
        @Inject('PRODUCTPRICES_REPOSITORY')
        private ProducPriceRepository: Repository<ProductPrices>,


        private readonly OdersItemsService: OderItemsService,

        private readonly ProductPricesService: ProductPricesService,
        private readonly ProductService: ProductsService,
        private readonly StoresService: StoresService

    ) { }

    async get_Cart(id: number) {
        const Order = await this.oderRepository.find({ where: { user: id, status: "ordered" } });
        const OrderItem = await this.OdersItemsService.find_by_orderItemId(Order[0].id);
        const Product_Prices = await this.ProducPriceRepository.find({where: {id: OrderItem[0].Product_Prices}})
        // const ms = await this.ProductService.find_by_producId(ts[0].id)
        // const gs = await this.StoresService.find_by_storeId(ms[0].id)
        // var mergedObj = { ...as[0], ...ds[0] };
        console.log(Order)
        console.log(OrderItem[0].Product_Prices)
        console.log(Product_Prices)
        // console.log(ms)
        // console.log(gs);
        // return as;
    }
}
