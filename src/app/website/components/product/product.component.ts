import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product = {
    id: 0,
    title: 'Coffee',
    description: 'A cup of coffee',
    price: 356,
    images: ["../../../assets/images/default.png"],
    category: {
      id: 0,
      name: "",
      typeImg: ""
    }
  }
  @Output() addedProduct = new EventEmitter<Product>();
  addToCart() {
    this.addedProduct.emit(this.product);
  }

  @Output() ShowProduct = new EventEmitter<number>();
  showDetails() {
    this.ShowProduct.emit(this.product.id);
  }
}
