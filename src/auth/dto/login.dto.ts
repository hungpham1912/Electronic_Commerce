import { Entity } from "typeorm";

@Entity()
export class LoginDto {
 
  userId: number;

  full_name: string;
 
  phone: string;
  
  email: string;

  adress: string;

  password: string;

  level: number;

  accessToken: string;


}
