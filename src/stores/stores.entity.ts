

import { isEmpty } from "rxjs";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany } from "typeorm";
import {IsLatLong, IsLatitude,IsNumber ,IsNotEmpty,IsUrl,ValidateIf,IsEmail,IsMobilePhone,IsString,validate} from "class-validator";

import { isString } from "util";


@Entity()
export class Stores {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: true
    })
    @IsNotEmpty()
    @IsString()
    nameStore: string;

    @Column({
        nullable: true
    })
    @IsNotEmpty()
    @IsString()
    adress: string;

}
