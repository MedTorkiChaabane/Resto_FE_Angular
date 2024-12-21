import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { DishesTableComponent } from './components/dishes-table/dishes-table.component';
import { MenuComponent } from './components/menu/menu.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { AdminComponent } from './components/admin/admin.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { DashboardChefComponent } from './components/dashboard-chef/dashboard-chef.component';
import { AddCartComponent } from './components/add-cart/add-cart.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { DishInfoComponent } from './components/dish-info/dish-info.component';
import { DishEditComponent } from './components/dish-edit/dish-edit.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-plat', component: AddPlatComponent },
  { path: 'dishes-table', component: DishesTableComponent },
  { path: 'users-table', component: UsersTableComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'chefs', component: ChefsComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'user-info/:id', component: UserInfoComponent },
  { path: 'dashboard-chef', component: DashboardChefComponent },
  { path: 'add-cart/:id', component: AddCartComponent },
  { path: 'cart-list', component: CartListComponent },
  { path: 'dish-info/:id', component: DishInfoComponent },
  { path: 'dish-edit/:id', component: DishEditComponent },
  { path: 'user-edit', component: UserEditComponent},
  { path: 'user-details', component: UserDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
