import { IsPhoneNumber, isPhoneNumber, IsString } from "class-validator"

export class CreateItcotpDto {


    @IsPhoneNumber('VN')
    reciever_phone: string

    @IsString()
    content: string
}
