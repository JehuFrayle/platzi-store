import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  constructor(private storeService: StoreService) { }

  @Input() product: Product = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    images: ["../../../assets/images/default.png"],
    category: {
      id: 0,
      name: "",
      typeImg: ""
    }
  }
  addToCart(){
    this.storeService.addToCart(this.product);
  }
}
