import { Injectable } from '@nestjs/common';
import { Product } from 'src/products/application/domain/product';
import { CreateProduct } from 'src/products/application/port/in/createProduct';
import ProductRepository from '../port/out/ProductRepository';

@Injectable()
export class CreateProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  execute(createProductData: CreateProduct): Promise<Product> {
    const productToSave: Product = CreateProduct.toDomain(createProductData);
    // const product: Product = await this.productRepository.save(productToSave);
    // return product;
    return null;
  }
}
