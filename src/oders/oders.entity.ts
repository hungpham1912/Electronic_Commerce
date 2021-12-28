import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  CreateDateColumn,
  JoinColumn,
} from 'typeorm';
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
  @IsNotEmpty()
  @IsString()
  status: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ManyToOne(() => User, (user) => user.id, )
  @JoinColumn({
    name: 'userId',
    referencedColumnName: 'id',
  })
  user: User;
  userId: number

  @CreateDateColumn()
  createAt: Date;
}
