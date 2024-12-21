import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerStartComponent } from './components/banner-start/banner-start.component';
import { ItemsComponent } from './components/items/items.component';
import { AboutComponent } from './components/about/about.component';
import { VideoComponent } from './components/video/video.component';
import { MenuComponent } from './components/menu/menu.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { NewsComponent } from './components/news/news.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { DishesTableComponent } from './components/dishes-table/dishes-table.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterceptorService } from './services/interceptor.service';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { DashboardChefComponent } from './components/dashboard-chef/dashboard-chef.component';
import { DishesChefComponent } from './components/dishes-chef/dishes-chef.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { AddCartComponent } from './components/add-cart/add-cart.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { ReservationsChefTableComponent } from './components/reservations-chef-table/reservations-chef-table.component';
import { ReservationsTableComponent } from './components/reservations-table/reservations-table.component';
import { ExperienceYearPipe } from './pipes/experience-year.pipe';
import { DishInfoComponent } from './components/dish-info/dish-info.component';
import { DishEditComponent } from './components/dish-edit/dish-edit.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BannerStartComponent,
    ItemsComponent,
    AboutComponent,
    VideoComponent,
    MenuComponent,
    ChefsComponent,
    ReservationComponent,
    NewsComponent,
    SignupComponent,
    LoginComponent,
    AddPlatComponent,
    DishesTableComponent,
    UsersTableComponent,
    AdminComponent,
    UserInfoComponent,
    UserEditComponent,
    DashboardChefComponent,
    DishesChefComponent,
    MenuItemComponent,
    AddCartComponent,
    CartListComponent,
    ReservationsChefTableComponent,
    ReservationsTableComponent,
    ExperienceYearPipe,
    DishInfoComponent,
    DishEditComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
