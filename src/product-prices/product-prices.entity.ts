

import { OderItems } from "../oder-items/oder-items.entity";
import { Product } from "../products/product.entity";
import { Stores } from "../stores/stores.entity";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany} from "typeorm";
import {Oders} from "../oders/oders.entity"


@Entity()
export   class ProductPrices{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nameProductPrice: string;

    @Column()
    price: number;

    @ManyToOne(type => Stores, stores => stores.id)
    Stores: Stores

    @OneToMany(type =>OderItems, oder_items => oder_items.id)
    oder_Items: OderItems

    @ManyToOne(type => Product, product => product.id)
    product: Product

}
