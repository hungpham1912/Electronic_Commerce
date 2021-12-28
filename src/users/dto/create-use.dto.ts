import { IsEmail, IsNotEmpty, IsPhoneNumber, isPhoneNumber } from "class-validator";


export class CreateUserDto{
    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    full_name: string

    @IsNotEmpty()
    adress: string

    @IsNotEmpty()
    password: string

    @IsPhoneNumber()
    phone: string

    @IsNotEmpty()
    level: number

}