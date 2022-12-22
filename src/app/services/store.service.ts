import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private myShoppingCart:Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);
  myCart$ = this.myCart.asObservable();

  total = 0;
  addToCart(product:Product){
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
  }
  getTotal() {
    return this.total = this.myShoppingCart.reduce((acc, item) => {return acc += item.price}, 0);
  }
  getMyShoppingCart(){
    return this.myShoppingCart;
  }
}
