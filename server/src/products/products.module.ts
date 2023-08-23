import { Module } from '@nestjs/common';
import { ProductService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Products])],
  providers: [ProductService],
  controllers: [ProductsController],
})
export class ProductsModule {}