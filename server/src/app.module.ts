import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products/products.controller';
import { ProductService } from './products/products.service';
import { Products } from './products/products.entity';
import {ProductsModule} from './products/products.module'
import { Repository, UpdateResult } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'ecommerce',
      entities: [Products],
      synchronize: true,
    }),
    ProductsModule, Repository
  ],
  controllers: [AppController,],
  providers: [AppService, ProductsModule],
})
export class AppModule {}
