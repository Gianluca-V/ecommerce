import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products: Product[] = [];
  categories: String[] = [];
  filters: FormGroup = this.formBuilder.group({});
  minPrice? = 0;
  maxPrice? = Infinity;
  selectedMaxPrice = this.maxPrice;

  constructor(private productService: ProductService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.products.forEach(p => {
        if (!this.categories.includes(p.category)) this.categories.push(p.category);
      });

      this.minPrice = this.products.map(p => p.price).sort((a,b)=>a-b).at(0);
      this.maxPrice = this.products.map(p => p.price).sort((a,b)=>a-b).at(-1);

      this.filters = this.formBuilder.group({
        category: "",
        maxPrice: this.maxPrice,
        //order A-Z or Z-A
        //search engine?
      });

      this.filters.valueChanges.subscribe(console.log);

    });
  }

}