

import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany} from "typeorm";
import {IsLatLong, IsLatitude,IsNumber ,IsNotEmpty,IsUrl,ValidateIf,IsEmail,IsMobilePhone,IsString,validate} from "class-validator";
import { ProductPrices } from "../product-prices/product-prices.entity";

@Entity()
export   class Product{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsString()
    @IsNotEmpty()
    nameProduct: string; 
    
    @OneToMany(type =>ProductPrices, ProductPrices => ProductPrices.product,)
    productPrices: ProductPrices[]
}
