import { Body, Controller,Get,Param, Post } from '@nestjs/common';
import { OderItemsService } from './oder-items.service';
import { ProductPrices } from "../product-prices/product-prices.entity";
import { OderItems } from "./oder-items.entity";
@Controller('oder-items')
export class OderItemsController {
    constructor(private readonly OderMethod: OderItemsService) { }
    

    @Post()
    addPoductPriceForCart(@Body() item :OderItems ){
        return this.OderMethod.addPoductForCart(item);
    }
}
