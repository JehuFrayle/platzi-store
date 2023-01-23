import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private productsService: ProductsService) { }
  products: Product[] =[];
  ngOnInit(): void {
    this.productsService.getAllProducts(10,0)
      .subscribe(data => {
        this.products = data;
      });
  }
  thatsAll = false;
  getMore(offset:number){
    this.productsService.getAllProducts(10, offset)
    .subscribe(chunk => {
      this.products = [...this.products, ...chunk];
      if(chunk.length === 0){
        this.thatsAll = true;
      }
    })
  }
}
