import { Controller, Get } from '@nestjs/common';
import { StoresService } from "./stores.service";

@Controller('stores')
export class StoresController {

    constructor(private readonly storesService: StoresService ){}

    @Get()
    get(){
        return this.storesService.findAll();
    }
}
