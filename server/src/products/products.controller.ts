import { Controller, Get, Req, Request, Param } from '@nestjs/common';
import { ProductService } from './products.service';
import { Products } from './products.entity';

@Controller('products')
export class ProductsController {

    constructor(private readonly productService:ProductService){}

    @Get()
    findAll(): Promise<Products[]>{
        return this.productService.findAll();
    }

    @Get("/:id")
    findOne(@Param() param): Promise<Products[]> {
        return this.productService.findOne(param.id);
    }
}
