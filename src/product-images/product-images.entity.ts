

import { ProductPrices } from "../product-prices/product-prices.entity";

import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany } from "typeorm";


@Entity()
export class ProductImages {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;


    @ManyToOne(type => ProductPrices, product_prices => product_prices.id)
    Product_prices: ProductPrices

}
