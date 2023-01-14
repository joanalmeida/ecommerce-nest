import { Product } from "src/products/domain/product";
import { Injectable } from '@nestjs/common';
import ProductRepository from "../repository/ProductRepository";

@Injectable()
export class GetProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  execute(): Product[] {
    const products = this.productRepository.getAll();
    return products;
  }
}