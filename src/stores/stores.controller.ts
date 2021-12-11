import { Body, Controller, Get,Post } from '@nestjs/common';
import { Stores } from './stores.entity';
import { StoresService } from "./stores.service";

@Controller('stores')
export class StoresController {

    constructor(private readonly storesService: StoresService ){}

    @Get('')
    get(){
        return this.storesService.findAll();
    }



    @Post('')
    createStore(@Body() store: any){
        return this.storesService.saveStore(store);
    }

}
