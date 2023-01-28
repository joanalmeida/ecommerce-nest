import { Product } from 'src/products/application/domain/product';
import { Injectable } from '@nestjs/common';
import ProductRepository from '../port/out/ProductRepository';

@Injectable()
export class GetProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(): Promise<Product[]> {
    const products = await this.productRepository.getAll();
    return products;
  }
}
