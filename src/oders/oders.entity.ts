import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  CreateDateColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { OderItems } from "../oder-items/oder-items.entity";
import { User } from '../users/users.entity';
import {
  IsLatLong,
  IsLatitude,
  IsNumber,
  IsNotEmpty,
  IsUrl,
  ValidateIf,
  IsEmail,
  IsMobilePhone,
  IsString,
  validate,
} from 'class-validator';

@Entity()
export class Oders {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @Column()
  phone: string;

  @ManyToOne(() => User, (user) => user.id, {
    eager: true,
  })
  // @JoinColumn({
  //   name: 'userId',
  //   referencedColumnName: 'id',
  // })
  user: User;
  userId: number
  
  @OneToMany(() => OderItems, (orderItem) => orderItem.order,{
      eager: true
  })
  orderItems: OderItems[];


  @CreateDateColumn()
  createAt: Date;
}
