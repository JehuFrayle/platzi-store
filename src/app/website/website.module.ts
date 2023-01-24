import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { WebsiteRoutingModule } from './website-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { MycartComponent } from './pages/mycart/mycart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { LayoutComponent } from './components/layout/layout.component';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    HomeComponent,
    CategoryComponent, 
    MycartComponent, 
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    LayoutComponent,
    NavHeaderComponent,
    ProductsListComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    ReactiveFormsModule,
    SwiperModule,
  ]
})
export class WebsiteModule { }
