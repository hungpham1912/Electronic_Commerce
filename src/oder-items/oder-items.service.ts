import { Injectable, Inject } from '@nestjs/common';
import { OderItems } from './oder-items.entity';
import { Repository } from 'typeorm';
@Injectable()
export class OderItemsService {
    constructor(
        @Inject('ODERSITEMS_REPOSITORY')
        private oderItemsRepository: Repository<OderItems>,
    ) { }

    async addPoductForCart(item: OderItems) {
        const checkOderItem = await this.checkOrderItemExist(item.oderId, item.productPricesId);
        if (checkOderItem == 0) return await this.addOrderItem(item);
        else return await this.updateQuantityOrderItems(item.quantity + checkOderItem.quantity, checkOderItem.id);
    }

    async addOrderItem(item: OderItems) {
        const result = await this.oderItemsRepository
            .createQueryBuilder()
            .insert()
            .values({ ...item })
            .execute()
        return { statusCode: 200, message: "OK" }
    }

    async updateQuantityOrderItems(quantitty: number, id: number) {
        const updateOrderItem = await this.oderItemsRepository
            .createQueryBuilder()
            .update(OderItems)
            .set({ quantity: quantitty })
            .where("id = :id", { id: id })
            .execute();
        return { statusCode: 200, message: "OK" }
    }

    async deleteItemInCart(ids: []) {
        for (let i = 0; i < ids.length; i++) {
            await this.oderItemsRepository.delete(ids[i])
        }
        return { statusCode: 200, message: "OK" };
    }


    async checkOrderItemExist(orderId: number, productPrId: number) {
        const result = await this.oderItemsRepository.find({ where: { oderId: orderId, productPricesId: productPrId } })
        if (result.length == 0) return 0;
        else return { quantity: result[0].quantity, id: result[0].id };
    }


    async findOderItemsByOrderId(id: number) {
        const as = await this.oderItemsRepository.createQueryBuilder()
            .select('orderitems')
            .from(OderItems, 'orderitems')
            .where("orderitems.oderId = :id", { id: id })
            .getMany();
        return as;
    }











}
