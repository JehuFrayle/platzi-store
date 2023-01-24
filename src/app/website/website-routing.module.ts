import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { MycartComponent } from './pages/mycart/mycart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'category/:id',
        component: CategoryComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
        title: "Platzi Store | Home",
      },
      {
        path: 'my-cart',
        component: MycartComponent
      },
      {
        path: 'login',
        component: LoginComponent,
        title: "Platzi Store | Login"
      },
      {
        path: 'sign-up',
        component: RegisterComponent,
        title: "Platzi Store | Signup"
      },
      {
        path: 'recovery',
        component: RecoveryComponent
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
