import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {
  constructor(
    private storeService: StoreService
  ){}

  activeMenu = false;
  counter = 0;
  ngOnInit(){
    this.storeService.myCart$.subscribe((products) => {
      this.counter = products.length;
    })
  }
  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }
}
