import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Products } from './products.entity';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  constructor( @InjectRepository(Products) private readonly ProductRepository: Repository<Products>) {}

  async findAll(): Promise<Products[]> {
    return this.ProductRepository.find();
  }

  async findOne(id: number): Promise<any> {
    return this.ProductRepository.findOneBy({id:id});
  }
}