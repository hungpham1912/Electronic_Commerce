import { Entity } from "typeorm";

@Entity()
export class CartItemsDto {
  id: number

  nameProduct: string;

  price: string;
 
  nameStore: string;
  
  addressStore: string;

  quanlity: number;

}
