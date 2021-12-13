

import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import {IsLatLong, IsLatitude, IsEmpty,IsNumber ,IsNotEmpty,IsUrl,ValidateIf,IsEmail,IsMobilePhone,IsString,validate} from "class-validator";
import { isString } from "util";


@Entity()
export  class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    full_name: string;

    @Column()
    @IsNotEmpty()
    @IsMobilePhone('vi-VN')
    @IsString()
    phone: string;

    @Column()
    @IsNotEmpty()
    @IsEmail()
    @ValidateIf(o => o.email == '' )
    email: string;

    @Column()
    @IsNotEmpty()
    adress: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    password: string;

    @Column()
    @IsNumber()
    level: number;
}
