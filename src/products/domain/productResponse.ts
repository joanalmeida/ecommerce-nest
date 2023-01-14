import { Product } from "./product";

export class ProductResponse {
  constructor(id: string, name: string, category: string, price: number) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
  }

  id: string;
  name: string;
  category: string;
  price: number;

  static fromDomain: (product: Product) => ProductResponse = (product: Product) => {
    return new ProductResponse(
      product.id,
      product.name,
      product.category,
      product.price
    );
  };
}

// export interface ProductResponse {
//   name: string;
//   category: string;
//   price: number;
// }

// export function fromDomain(product: Product): ProductResponse {
//   return {
//     name: product.name,
//     category: product.category,
//     price: product.price
//   }
// }
