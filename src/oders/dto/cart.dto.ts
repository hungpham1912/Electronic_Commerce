import { Entity } from "typeorm";

@Entity()
export class CartItemsDto {
 
  nameProduct: string;

  price: string;
 
  nameStore: string;
  
  addressStore: string;

  quanlity: number;

}
