import { Injectable, HttpException, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Oders } from './oders.entity';
import { OderItemsService } from "../oder-items/oder-items.service";
import { ProductPricesService } from "../product-prices/product-prices.service";
import { ProductsService } from "../products/products.service";
import { StoresService } from "../stores/stores.service";
import "reflect-metadata";
import { CartItemsDto } from "./dto/cart.dto";
import { User } from "../users/users.entity";
import { OderItems } from '../oder-items/oder-items.entity';
import { ProductPrices } from "../product-prices/product-prices.entity";
import { Stores } from 'src/stores/stores.entity';
@Injectable()
export class OdersService {
    constructor(
        @Inject('ODERS_REPOSITORY',)
        private oderRepository: Repository<Oders>,
        private readonly OdersItemsService: OderItemsService,
        private readonly ProductPricesService: ProductPricesService,
        private readonly ProductService: ProductsService,
        private readonly StoresService: StoresService

    ) {}


    async postCart(){ 
    }

    async getCart(userId: string){
        const Order = await this.oderRepository.findOne({where:{user:userId, status:'ordered'}});
        const OrderItem = await this.OdersItemsService.findOderItemsByOrderId(Order.id);

        // const Product = await this.ProductService.find_by_producId(Product_Prices.product);
        // const Store = await this.StoresService.findByStoreId(Product_Prices.Stores);
       
        let Cart: CartItemsDto[] = [];
        for(let i = 0;i<OrderItem.length;i++){
            const ProductPrices = await this.ProductPricesService.findByProducPriceById(OrderItem[i].productPricesId);
            const Product = await this.ProductService.findProductByProducId(ProductPrices.productId);
            const Store = await this.StoresService.findByStoreId(ProductPrices.storesId);
            Cart[i] = {
                nameProduct:ProductPrices.nameProductPrice ,
                price: ProductPrices.price,
                nameStore: Store.nameStore,
                addressStore: Store.adress,
                quanlity: 2
            }
        }
        console.log(Cart);


        // const ms = await this.ProductService.find_by_producId(ts[0].id)
        // const gs = await this.StoresService.find_by_storeId(ms[0].id)
        // var mergedObj = { ...as[0], ...ds[0] };
        // console.log(Order[0].user)
        // console.log(OrderItem[1])

        // console.log(Product)
        // console.log(Store);
        // return as;
    }
}
