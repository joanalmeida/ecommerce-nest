import { IsString, IsInt } from 'class-validator';
import { CreateProduct } from '../interfaces/createProduct.interface';

export class CreateProductDTO {
  // Incredible, but not needed for Nest to create an instance of this
  constructor(name: string, category: string, price: number) {
    this.name = name;
    this.category = category;
    this.price = price;
  }

  @IsString()
  name: string;
  
  @IsString()
  category: string;

  @IsInt()
  price: number;

  toDomain(): CreateProduct {
    return {
      name: this.name,
      category: this.category,
      price: this.price
    }
  }
}
