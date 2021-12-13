

import { ProductPrices } from "../product-prices/product-prices.entity";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany } from "typeorm";
import {IsLatLong, IsLatitude,IsNumber ,IsNotEmpty,IsUrl,ValidateIf,IsEmail,IsMobilePhone,IsString,validate} from "class-validator";


@Entity()
export class ProductImages {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    @IsNumber()
    url: string;


    

    @ManyToOne(type => ProductPrices, product_prices => product_prices.id)
    Product_prices: ProductPrices

}
