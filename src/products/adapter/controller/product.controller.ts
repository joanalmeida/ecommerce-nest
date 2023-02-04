import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateProductUseCase } from '../../application/useCase/createProductUseCase';
import { GetProductUseCase } from '../../application/useCase/getProductUseCase';
import { Product } from '../../application/domain/product';
import { ProductResponse } from './dto/productResponse';
import { CreateProductDTO } from './dto/createProductDTO';

@Controller('products')
export class ProductController {
  constructor(
    private readonly getProduct: GetProductUseCase,
    private readonly createProduct: CreateProductUseCase,
  ) {}

  @Get()
  async getAll(): Promise<ProductResponse[]> {
    const products: Product[] = await this.getProduct.execute();
    const productResponses: ProductResponse[] = products.map((product) =>
      ProductResponse.fromDomain(product),
    );

    return productResponses;
  }

  @Get(':id')
  getHello(): string {
    return `Single product`;
  }

  @Post()
  create(@Body() createProductDTO: CreateProductDTO): ProductResponse {
    // const product: Product = this.createProduct.execute(createProductDTO.toDomain());
    // return ProductResponse.fromDomain(product);
    return null;
  }
}
