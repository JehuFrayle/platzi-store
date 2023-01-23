import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product.model';
import { switchMap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  constructor(private route: ActivatedRoute, private category: CategoriesService, private productsService: ProductsService,
    private titleService:Title) { }

  categoryID: string | null = null;
  categoryProducts: Product[] = [];
  categoryName = '';
  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.categoryID = params.get('id');
        if (this.categoryID) {
          return this.category.getAll();
        }
        return []
      }),
      switchMap(params => {
        const ind = params.findIndex((cat) => cat.id === Number(this.categoryID))
        this.categoryName = params[ind].name;
        this.titleService.setTitle(`Platzi Store | ${this.categoryName}`);
        
        if (this.categoryID) {
          return this.productsService.getByCategory(this.categoryID, 10, 0)
        }
        return [];
      })
    )
      .subscribe((data) => {
        this.categoryProducts = data;
      });
  }
  thatsAll = false;
  getMore(offset: number) {
    if (this.categoryID) {
      this.productsService.getByCategory(this.categoryID, 10, offset)
        .subscribe(chunk => {
          this.categoryProducts = [...this.categoryProducts, ...chunk];
          if(chunk.length === 0){
            this.thatsAll = true;
          }
        })
    }
  }
}
