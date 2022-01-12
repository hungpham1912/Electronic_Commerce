import { IsDefined, IsEmail, IsNotEmpty, IsPhoneNumber, isPhoneNumber, IsString } from "class-validator";
import { clearScreenDown } from "readline";


export class Test{
    // @IsString()
    // @IsDefined()
    // @IsNotEmpty()
    test: string
}
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

    @IsPhoneNumber('VN')
    phone: string

}