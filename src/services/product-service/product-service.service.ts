import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'my-shared-orm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductServiceService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
      ) {}
    
      findAll(): Promise<Product[]> {
        return this.productRepository.find({ relations: ['category'] });
      }
}
