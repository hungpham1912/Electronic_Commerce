

import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm";
import {User} from "../users/users.entity";
import {IsLatLong, IsLatitude,IsNumber ,IsNotEmpty,IsUrl,ValidateIf,IsEmail,IsMobilePhone,IsString,validate} from "class-validator";


@Entity()
export   class Oders{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    @IsString()
    status: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    phone: string;

    @ManyToOne(type => User, user => user.id)
    user: User
    userId: string

}
