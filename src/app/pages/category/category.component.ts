import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  constructor(private route: ActivatedRoute, private category:CategoriesService, private productsService:ProductsService) { }

  categoryID: string | null = null;
  categoryProducts: Product[] = [];
  categoryName = '';
  ngOnInit(): void {
  this.route.paramMap.pipe(
    switchMap(params => {
      this.categoryID = params.get('id');
      if(this.categoryID){
        return this.category.getAll();
      }
      return []
    }),
    switchMap(params => {
      const ind = params.findIndex((cat) => cat.id === Number(this.categoryID))
      this.categoryName = params[ind].name;

      if(this.categoryID) {
        return this.productsService.getByCategory(this.categoryID)
      }
      return [];
    })
  )
  .subscribe((data) => {
      this.categoryProducts = data;
    });

  }
}
