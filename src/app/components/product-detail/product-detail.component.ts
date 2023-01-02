import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product, UpdateProductDTO } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  constructor(
    private storeService: StoreService,
    private productsService: ProductsService) { }

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
  addToCart() {
    this.storeService.addToCart(this.product);
  }

  @Output() changingProduct = new EventEmitter<Product>();
  @Output() deletingProduct = new EventEmitter<Product>();

  changes:UpdateProductDTO = {
    title: 'Tasty Wooden Mouse',
  }
  updateProduct(dto: UpdateProductDTO) {
    const id = this.product.id;
    this.productsService.updateProduct(id, dto)
      .subscribe(data => {
        this.product = data;
        this.changingProduct.emit(data);
        console.log('Actualizado', data);
      })
  }
  deleteProduct(id:number){
    this.productsService.deleteProduct(id)
    .subscribe((wasDeleted:boolean) => {
      if(wasDeleted){
        this.deletingProduct.emit(this.product);
      }
    })
  }
}
