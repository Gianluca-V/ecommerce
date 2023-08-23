import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { AppModule } from 'src/app/app.module';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
      this.productService.getProducts().subscribe(data => {this.products = data})
      
  }

}
