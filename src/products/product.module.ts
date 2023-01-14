import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { GetProductUseCase } from './application/useCase/getProductUseCase';
import ProductRepository from './application/repository/ProductRepository';
import { CreateProductUseCase } from './application/useCase/createProductUseCase';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [GetProductUseCase, CreateProductUseCase, ProductRepository],
})
export class ProductModule {}
