import { Product } from "src/products/domain/product";

export class ProductRepository {
  getAll() {
    const products: Product[] = [{
      id: '1',
      name: 'From Repository',
      category: 'test',
      price: 15
    }];
    return products;
  }
}
