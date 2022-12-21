import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface Product {
  name: string,
  alt: string,
  price: number,
  img: string,
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
@Input() product: Product = {
  name: 'Coffee',
  alt: 'A cup of coffee',
  price: 356,
  img: "../../../assets/images/default.png"
}
@Output() addedProduct = new EventEmitter<Product>();
addToCart(){
  this.addedProduct.emit(this.product);
}
}
