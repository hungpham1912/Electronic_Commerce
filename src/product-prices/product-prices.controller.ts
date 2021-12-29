import { Controller, Get } from '@nestjs/common';
import { ProductPricesService } from "../product-prices/product-prices.service";
@Controller('product-prices')
export class ProductPricesController {
    constructor(private readonly ProductPricesService: ProductPricesService) { }

    @Get()
    getAll(){
        return this.ProductPricesService.findAll()
    }

    

}
