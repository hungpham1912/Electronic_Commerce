

import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm";
import {User} from "../../users/entity/users.entity";


@Entity()
export   class Oders{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    status: string;

    @Column()
    phone: string;

    @ManyToOne(type => User, user => user.id)
    user: User

}
