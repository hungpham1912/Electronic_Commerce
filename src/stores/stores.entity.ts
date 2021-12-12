

import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany } from "typeorm";


@Entity()
export class Stores {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nameStore: string;

    @Column()
    adress: string;

}
