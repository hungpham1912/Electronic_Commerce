import { IsDefined, IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Entity } from "typeorm";


export class LoginByAppleDto { 
  adress: string;

  password: string;
}

export class SigninDto{
  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsDefined()
  @IsString()
  password: string;

}

export class LoginDto {
 
  id: number;

  full_name: string;
 
  phone: string;
  
  email: string;

  adress: string;

  password: string;

  level: number;

  accessToken: string;


}
