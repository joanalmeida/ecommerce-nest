import { Product } from 'src/products/application/domain/product';

export class InMemoryProductRepository {
  products: Map<string, Product>;
  lastCreatedId: number;

  constructor() {
    this.products = new Map();
    this.lastCreatedId = 0;
  }

  getAll() {
    return Array.from(this.products.values());
  }

  save(product: Product) {
    const newId = ++this.lastCreatedId;
    this.lastCreatedId = newId;

    product.id = newId.toString();
    this.products.set(product.id, product);
    return product;
  }
}
