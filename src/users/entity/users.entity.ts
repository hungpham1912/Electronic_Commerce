

import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export  class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    full_name: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    adress: string;

    @Column()
    password: string;

    @Column()
    level: number;

   


}
