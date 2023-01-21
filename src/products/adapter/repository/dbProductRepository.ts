import { Product } from "src/products/application/domain/product";
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();
console.log(`Generando cliente prisma`);

export class DbProductRepository {
  async getAll(): Promise<Product[]> {
    const prismaProducts = await prisma.product.findMany();
    const products = prismaProducts.map(this.toDomain);
    return products;
  }

  save(product: Product) {
  }

  toDomain(prismaProduct: any): Product {
    return {
      id: prismaProduct.id,
      name: prismaProduct.name,
      price: prismaProduct.price
    };
  }
}
