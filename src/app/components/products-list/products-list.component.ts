import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ){
    this.myShoppingCart = this.storeService.getMyShoppingCart();
  }
ngOnInit(): void {
  this.productsService.getAllProducts()
  .subscribe(data => {
    this.products = data;
  });
}
products:Product[] = []
myShoppingCart:Product[] = [];
total = 0;
cartHandler(product: Product){
  this.storeService.addToCart(product);
  this.total = this.storeService.getTotal()
}
}
