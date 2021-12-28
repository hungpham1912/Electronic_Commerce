import { IsEmail, IsNotEmpty, IsPhoneNumber, isPhoneNumber } from "class-validator";


export class CreateOrderDto{

    @IsNotEmpty()
    status: string

    @IsPhoneNumber('VN')
    phone: string

  

}