import { Injectable, HttpException, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Oders } from './oders.entity';

import 'reflect-metadata';
import { CreateOrderDto } from './dto/create-order.dto';
// import { User } from "../users/users.entity";
// import { OderItems } from '../oder-items/oder-items.entity';
// import { ProductPrices } from "../product-prices/product-prices.entity";
// import { Stores } from 'src/stores/stores.entity';
@Injectable()
export class OdersService {
  constructor(
    @Inject('ODERS_REPOSITORY')
    private oderRepository: Repository<Oders>,
  ) {}

  async create(order: CreateOrderDto) {
    return await this.oderRepository.save(order);
  }

  findAll() {
    return this.oderRepository.find()
  }

  async getOrderByUserId(userId: number) {
    const order = await this.oderRepository.findOne({
      where: { user: userId, status: 'ordered' },
    });
    return order;
  }
}
