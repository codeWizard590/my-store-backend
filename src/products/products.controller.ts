import { Controller, Get } from '@nestjs/common';
import { Product } from 'my-shared-orm';
import { ProductServiceService } from 'src/products/product-service.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductServiceService) {}
    @Get()
    getAllProducts(): Promise<Product[]> {
        return this.productService.findAll();
      }
}
