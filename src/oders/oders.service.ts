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
import { OderItems } from 'src/oder-items/oder-items.entity';
@Injectable()
export class OdersService {
    constructor(
        @Inject('ODERS_REPOSITORY',)
        private oderRepository: Repository<Oders>,
        @Inject('ODERSITEMS_REPOSITORY')
        private OderItemsRepository: Repository<OderItems>,
        private readonly OdersItemsService: OderItemsService,
        private readonly ProductPricesService: ProductPricesService,
        private readonly ProductService: ProductsService,
        private readonly StoresService: StoresService

    ) { }


    async postCart(){
        
    }

    async getCart(userId: string){

        // console.log(UserDs)
        const Order = await this.oderRepository.find({where:{user:userId, status:'ordered'}});
        const OrderItem = await this.OdersItemsService.findByProductPriceId(2);
        const Product_Prices = await this.ProductPricesService.find_by_producPriceId(OrderItem[0]);
        // const Product = await this.ProductService.find_by_producId(Product_Prices.product);
        // const Store = await this.StoresService.findByStoreId(Product_Prices.Stores);
        // console.log(OrderItem);

        // const Cart: CartItemsDto[] = [];
        // for(let i = 0;i<OrderItem.length;i++){
        //     const Product_Prices = await this.ProductPricesService.find_by_producPriceId(OrderItem[i])
        //     const Product = await this.ProductService.find_by_producId(Product_Prices.product);
        //     const Store = await this.StoresService.findByStoreId(Product_Prices.Stores);
        //     // Cart[i].price = Product_Prices.price;
        //     // Cart[i].nameStore = Store.nameStore;
        //     // Cart[i].addressStore = Store.adress;
        //     // Cart[i].nameProduct = Product_Prices.nameProductPrice;
        //     // Cart[i].quanlity = OrderItem[i].quantity;
        //     console.log(Product_Prices);

        // }


        // const ms = await this.ProductService.find_by_producId(ts[0].id)
        // const gs = await this.StoresService.find_by_storeId(ms[0].id)
        // var mergedObj = { ...as[0], ...ds[0] };
        // console.log(Order[0].user)
        console.log(OrderItem)

        // console.log(Product_Prices)
        // console.log(Product)
        // console.log(Store);
        // return as;
    }
}
