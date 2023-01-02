import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CategoryComponent } from './pages/category/category.component';
import { MycartComponent } from './pages/mycart/mycart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'category',
    component: CategoryComponent,
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'my-cart',
    component: MycartComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'sign-up',
    component: RegisterComponent
  }, {
    path: 'recovery',
    component: RecoveryComponent
  }, {
    path: 'profile',
    component: ProfileComponent
  }, {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
