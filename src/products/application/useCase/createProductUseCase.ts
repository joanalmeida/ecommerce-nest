import { Injectable } from '@nestjs/common';
import { Product } from 'src/products/domain/product';
import { CreateProduct } from 'src/products/interfaces/createProduct.interface';
import ProductRepository from "../repository/ProductRepository";

@Injectable()
export class CreateProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  execute(createProductData: CreateProduct): Product {
    const productToSave: Product = CreateProduct.toDomain(createProductData);
    const product: Product = this.productRepository.save(productToSave);
    return product;
  }
}