

import { OderItems } from "src/oder-items/oder-items.entity";
import { Stores } from "src/stores/stores.entity";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany} from "typeorm";


@Entity()
export   class Product{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;   

}
