import { Entity } from "typeorm";


export class LoginByAppleDto { 
  adress: string;

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
