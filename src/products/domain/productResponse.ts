import { Product } from "./product";

export class ProductResponse {
  constructor(name: string, category: string, price: number) {
    this.name = name;
    this.category = category;
    this.price = price;
  }

  name: string;
  category: string;
  price: number;

  static fromDomain: (product: Product) => ProductResponse = (product: Product) => {
    return new ProductResponse(
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
