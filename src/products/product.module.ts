import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { GetProductUseCase } from './application/useCase/getProductUseCase';
import { ProductRepository } from './application/repository/productRepository';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [GetProductUseCase, ProductRepository],
})
export class ProductModule {}
