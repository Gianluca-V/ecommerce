import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get('http://localhost:3000/products');
  }

  postProduct(product: Product){

  }

  deleteProduct(id:number){

  }
}
