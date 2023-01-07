import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductService {
  getAll(): Product[] {
    return [new Product("1", "Monster Energy", "Beberage", 300)];
  }
}
