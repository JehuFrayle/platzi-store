import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';
import { Product} from '../../../models/product.model';

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
  this.storeService.myCart$
  .subscribe( prods => {
    this.total = prods.reduce((acc, prod) => acc + prod.price, 0);
  })
}
@Input() products:Product[] = []
@Input() thatsIt = false;

offset = 0;
@Output() more = new EventEmitter<number>();
myShoppingCart:Product[] = [];
total = 0;
cartHandler(product: Product){
  this.storeService.addToCart(product);
}

showProductDetail = false;
productOnDetail:Product = {
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
toggleProductDetail() {
  this.showProductDetail = !this.showProductDetail;
}
onShowDetail(id:number){
  if(this.showProductDetail){
    this.toggleProductDetail();
  }
  this.productsService.getOneProduct(id)
  .subscribe(data => {
    this.toggleProductDetail();
    this.productOnDetail = data;
  });
}
loadMore(){
  this.offset += 10;
  this.more.emit(this.offset);
}
}
