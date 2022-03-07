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
import { Oders } from '../oders/oders.entity';
import { Exclude } from 'class-transformer';

export enum Role {
  ADMIN = 'admin',
  USER = 'user',
}

@Entity()
export class User {
  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }

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

  @Column({ unique: true })
  @IsNotEmpty()
  @IsEmail()
  @ValidateIf((o) => o.email == '')
  email: string;

  @Column()
  @IsNotEmpty()
  adress: string;

  // @Exclude()
  @Column()
  @IsNotEmpty()
  @IsString()
  password: string;

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  @IsNotEmpty()
  role: Role;

  @OneToMany(() => Oders, (order) => order.user)
  orders: Oders[];
}

export class Humman {
  constructor(name, type, sex) {
    this.name = name;
    this.sex = sex;
    this.type = type;
  }

  name: string;

  type: string;

  sex: string;
}

export class Teacher extends Humman {
  job: string;
}
