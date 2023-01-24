import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {
  constructor(
    private storeService: StoreService,
    private authService: AuthService,
    private categoriesService: CategoriesService
  ) { }

  activeMenu = false;
  counter = 0;
  user: User | null = null;
  categories: Category[] = [];

  ngOnInit() {
    this.storeService.myCart$.subscribe((products) => {
      this.counter = products.length;
    });
    this.authService.myProfile$.subscribe((user) => {
        this.user = user;
    });
    this.getCategories();
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  getCategories() {
    this.categoriesService.getAll(0, 4)
      .subscribe(cats => {
        this.categories = cats;
      })
  }
}
