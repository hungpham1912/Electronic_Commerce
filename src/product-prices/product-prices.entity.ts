

import { OderItems } from "../oder-items/oder-items.entity";
import { Product } from "../products/product.entity";
import { Stores } from "../stores/stores.entity";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany} from "typeorm";
import {IsLatLong, IsLatitude,IsNumber ,IsNotEmpty,IsUrl,ValidateIf,IsEmail,IsMobilePhone,IsString,validate} from "class-validator";

import {Oders} from "../oders/oders.entity"


@Entity()
export   class ProductPrices{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    @IsString()
    nameProductPrice: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    price: string;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    storesId: number;

    @Column()
    @IsNotEmpty()
    @IsString()
    productId: number;


    @ManyToOne(type => Stores, stores => stores.id)
    Stores: Stores

    @OneToMany(type =>OderItems, oder_items => oder_items.productPrices,{
        eager: true
    })
    oder_Items: OderItems[]

    @ManyToOne(type => Product, product => product.id)
    product: Product

}
