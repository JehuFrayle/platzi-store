import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http:HttpClient
  ) { }
  private BASE_API = 'https://young-sands-07814.herokuapp.com/api';
  getAllProducts(){
    return this.http.get<Product[]>(`${this.BASE_API}/products`);
  }
  getOneProduct(id:number){
    return this.http.get<Product>(`${this.BASE_API}/products/${id}`);
  }
}
