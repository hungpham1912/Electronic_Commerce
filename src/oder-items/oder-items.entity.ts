

import { ProductPrices } from "../product-prices/product-prices.entity";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne,JoinColumn, OneToMany} from "typeorm";
import {Oders} from "../oders/oders.entity"


@Entity()
export   class OderItems{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: string;

    @Column()
    quantity: number;

    @Column({ nullable: true })
    productPricesId: number

    @Column({ nullable: true })
    oderId: number

    @ManyToOne(type => Oders, oder => oder.id)
    Oder: Oders

    @ManyToOne(type => ProductPrices, productPrices => productPrices.id)
    @JoinColumn()
    productPrices: ProductPrices

}
