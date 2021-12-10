import { Controller,Get,Param } from '@nestjs/common';
import { OderItemsService } from './oder-items.service';

@Controller('oder-items')
export class OderItemsController {
    constructor(private readonly OderMethod: OderItemsService) { }
    
}
