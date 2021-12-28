import { Body, Controller,Delete,Get,Param, Post, Put } from '@nestjs/common';
import { OderItemsService } from './oder-items.service';
import { ProductPrices } from "../product-prices/product-prices.entity";
import { OderItems } from "./oder-items.entity";
import { User } from "../users/users.entity";
@Controller('order-items')
export class OderItemsController {
    constructor(private readonly OderItemMethod: OderItemsService) { }
    

    @Post()
    addPoductPriceForCart(@Body() item :OderItems ){
        return this.OderItemMethod.addPoductForCart(item);
    }



    @Delete()
    deleteProductPriceForCart(@Body() ids: any){
        return this.OderItemMethod.deleteItemInCart(ids);
    }

    @Get('/order/:orderId')
    getAll(@Param() param: any, ){
       
    }

}
