import { Product } from '../../domain/product';

export class CreateProduct {
  name: string;
  category: string;
  price: number;

  static toDomain(createProduct: CreateProduct): Product {
    return {
      name: createProduct.name,
      category: createProduct.category,
      price: createProduct.price,
    };
  }
}
