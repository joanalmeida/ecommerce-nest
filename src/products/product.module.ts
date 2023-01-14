import { Module } from '@nestjs/common';
import { ProductController } from './adapter/controller/product.controller';
import { GetProductUseCase } from './application/useCase/getProductUseCase';
import ProductRepository from './application/port/out/ProductRepository';
import { CreateProductUseCase } from './application/useCase/createProductUseCase';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [GetProductUseCase, CreateProductUseCase, ProductRepository],
})
export class ProductModule {}
