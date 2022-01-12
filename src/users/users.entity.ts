import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  AfterLoad,
  AfterInsert,
  OneToMany,
} from 'typeorm';
import {
  IsLatLong,
  IsLatitude,
  IsEmpty,
  IsNumber,
  IsNotEmpty,
  IsUrl,
  ValidateIf,
  IsEmail,
  IsMobilePhone,
  IsString,
  validate,
} from 'class-validator';
import { isString } from 'util';
import { Oders } from "../oders/oders.entity";


export enum Role {
  ADMIN = 'admin',
  USER = 'user',
}

@Entity()
export class User {
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
  @ValidateIf((o) => o.email == '')
  email: string;

  @Column()
  @IsNotEmpty()
  adress: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  password: string;

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  @IsNotEmpty()
  role: Role;

  @OneToMany(() => Oders, (order) => order.user,)
  orders: Oders[];

  @AfterInsert()
  test() {
    console.log('after insert');
  }
}
