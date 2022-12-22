import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
@Input() product: Product = {
  title: 'Coffee',
  description: 'A cup of coffee',
  price: 356,
  image: "../../../assets/images/default.png",
  category: ''
}
@Output() addedProduct = new EventEmitter<Product>();
addToCart(){
  this.addedProduct.emit(this.product);
}
}
