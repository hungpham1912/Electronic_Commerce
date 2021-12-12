import { Body, Controller, Post } from '@nestjs/common';
import { ProductsService } from "./products.service";
@Controller('product')
export class ProductsController {
    constructor(private readonly productService: ProductsService){}

    @Post()
    createNewProduct(@Body() product: any){
        return this.productService.createNewProduct(product);
    }

}
