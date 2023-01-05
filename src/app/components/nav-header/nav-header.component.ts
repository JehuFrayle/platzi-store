import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {
  constructor(
    private storeService: StoreService,
    private authService: AuthService
  ) { }

  activeMenu = false;
  counter = 0;
  user: User | null = null;
  ngOnInit() {
    this.storeService.myCart$.subscribe((products) => {
      this.counter = products.length;
    })
    this.authService.profile()
      .subscribe((user) => {
        this.user = user;
      })
  }
  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }
}
