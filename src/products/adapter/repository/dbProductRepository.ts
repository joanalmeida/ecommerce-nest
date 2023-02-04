import { Product } from 'src/products/application/domain/product';
import { PrismaClient, Product as PrismaProduct } from '@prisma/client';

export class DbProductRepository {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAll(): Promise<Product[]> {
    const prismaProducts: PrismaProduct[] = await this.prisma.product.findMany();
    const products: Product[] = prismaProducts.map(this.toDomain);
    return products;
  }

  save(product: Product) {}

  toDomain(prismaProduct: PrismaProduct): Product {
    return {
      id: prismaProduct.id,
      name: prismaProduct.name,
      price: prismaProduct.price,
    };
  }
}
