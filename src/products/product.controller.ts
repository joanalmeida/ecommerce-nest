import { Controller, Get } from '@nestjs/common';
import { GetProductUseCase } from './application/useCase/getProductUseCase';
import { Product } from './domain/product';
import { ProductResponse } from './domain/productResponse';

@Controller('products')
export class ProductController {
  constructor(
    private readonly getProduct: GetProductUseCase
  ) {}

  @Get()
  getAll(): ProductResponse[] {
    const products: Product[] = this.getProduct.execute();
    const productResponses: ProductResponse[] = products.map(product => ProductResponse.fromDomain(product));

    return productResponses;
  }

  @Get(':id')
  getHello(): string {
    return `Single product`;
  }
}
