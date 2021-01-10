import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductsComponent } from './products/products.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductCatelogComponent } from './product-catelog/product-catelog.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { QuickViewComponent } from './quick-view/quick-view.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GridComponent } from './grid/grid.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgxPopperModule } from 'ngx-popper';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { UserRoutingModule } from './user-routing.module';
import { LayoutComponent } from './layout/layout.component';
import {UserService} from "./services/user.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    HeaderComponent,
    CarouselComponent,
    ProductsComponent,
    ParallaxComponent,
    LoginPageComponent,
    SignupPageComponent,
    FooterComponent,
    HomePageComponent,
    ProductCatelogComponent,
    ProductListComponent,
    ProductDetailComponent,
    QuickViewComponent,
    CartComponent,
    CheckoutComponent,
    ContactUsComponent,
    GridComponent,
    TrackOrderComponent,
    AboutUsComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    UserRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxPopperModule.forRoot({placement: 'bottom'}),
    FontAwesomeModule,
    MatTabsModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
  ],
  exports:[LayoutComponent],
  providers:[UserService],
})
export class UserModule { }
