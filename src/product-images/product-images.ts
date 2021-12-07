

import { OderItems } from "src/oder-items/oder-items.entity";
import { ProductPrices } from "src/product-prices/product-prices.entity";
import { Product } from "src/products/product.entity";
import { Stores } from "src/stores/stores.entity";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany } from "typeorm";
import { Oders } from "../oders/oders.entity"


@Entity()
export class ProductImages {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;


    @ManyToOne(type => ProductPrices, product_prices => product_prices.id)
    Product_prices: ProductPrices



}
