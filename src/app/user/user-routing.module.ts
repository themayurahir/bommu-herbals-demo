import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductCatelogComponent } from './product-catelog/product-catelog.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { TrackOrderComponent } from './track-order/track-order.component';

const routes: Routes = [
  {path:'', component: LayoutComponent,
    children:[
      {path: '',component:HomePageComponent},
      {path:'products', component:ProductCatelogComponent, pathMatch: 'full'},
      {path:'products/:category', component:ProductListComponent, pathMatch: 'full'},
      {path:'products/:category/:subCategory', component:ProductListComponent, pathMatch: 'full'},
      {path:'products/:category/:subCategory/:id', component:ProductDetailComponent, pathMatch: 'full'},
      // children: [
      //   {
      //     path: 'products/:category',
      //     component: ProductListComponent,
      //   },
      //   {
      //     path: 'products/:category/:subCategory',
      //     component: ProductListComponent,
      //   },
      //   {
      //     path: 'products/:category/:subCategory/:id',
      //     component: ProductDetailComponent,
      //   },
      // ],},
      {path: 'cart', component: CartComponent},
      {path: 'checkout', component:CheckoutComponent},
      {path: 'contact', component:ContactUsComponent},
      {path: 'track', component:TrackOrderComponent},
      {path: 'login', component:LoginPageComponent},
      {path: 'register', component:SignupPageComponent},
      {path: 'about', component:AboutUsComponent},
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
