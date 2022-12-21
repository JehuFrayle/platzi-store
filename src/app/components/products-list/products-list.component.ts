import { Component } from '@angular/core';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  products:Product[] = [{
    name: 'Album Collection',
    alt: 'Some albums',
    price: 100,
    img: '/assets/images/album.jpg'
  },
  {
    name: 'Bike',
    alt: 'A cup of coffee',
    price: 50,
    img: '/assets/images/bike.jpg'
  },
  {
    name: 'Books',
    alt: 'A cup of coffee',
    price: 75,
    img: '/assets/images/books.jpg'
  },
  {
    name: 'Non available',
    alt: 'A cup of coffee',
    price: 0,
    img: '/assets/images/default.png'
  },
  {
    name: 'Backyard House',
    alt: 'A cup of coffee',
    price: 200,
    img: '/assets/images/house.jpg'
  }
]
myShoppingCart: Product[] = [];
total = 0;
cartHandler(product: Product){
  this.myShoppingCart.push(product);
  this.total = this.myShoppingCart.reduce((acc, item) => {return acc += item.price}, 0)
}

}
