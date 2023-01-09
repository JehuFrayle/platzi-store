import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';
import { CreateProductDTO, Product} from '../../models/product.model';

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


createProduct(){
  const product:CreateProductDTO = {
    title: 'Viejo producto',
    description: 'This is not a description',
    images: [],
    price: 79,
    categoryId: 2
  }

  this.productsService.createProduct(product)
  .subscribe((data) => {
    console.log('Creado el producto: ', data);
    this.products.push(data);
  })
}
productChanged(prod: Product){
  const index = this.products.findIndex((item) => item.id === prod.id);
  this.products[index] = prod;
}
productDeleted(prod: Product){
  const index = this.products.findIndex((item) => item.id === prod.id);
  this.products.splice(index, 1);
  this.showProductDetail = false;

  this.storeService.removeFromCart(prod.id);
  this.myShoppingCart = this.storeService.getMyShoppingCart();
}
}
