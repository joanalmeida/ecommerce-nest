import { Controller, Get } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { ProductResponse } from './interfaces/productResponse.interface';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAll(): ProductResponse[] {
    const products: Product[] = this.productService.getAll();
    // const productResponse: ProductResponse = ProductResponse.fromDomain(products[0]);
    const productResponses: ProductResponse[] = products.map(product => ProductResponse.fromDomain(product));

    return productResponses;
  }

  @Get(':id')
  getHello(): string {
    // return this.appService.getHello();
    return `Single product`;
  }
}
