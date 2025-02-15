import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'my-shared-orm';
import { Category } from 'my-shared-orm';
import { typeOrmConfig } from './typeorm.config';
import { ProductServiceService } from './services/product-service/product-service.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([Product, Category])
  ],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductServiceService],
})
export class AppModule {}
