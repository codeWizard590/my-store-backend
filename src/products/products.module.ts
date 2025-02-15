import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../typeorm.config';
import { Product, Category } from 'my-shared-orm';
import { ProductServiceService } from './product-service.service';
import { ProductsController } from './products.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Product, Category])
    ],
    controllers: [ProductsController],
    providers: [ProductServiceService],
})
export class ProductsModule {}
