import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";
import {UserService} from "../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  id:any;
  url:any;
  category: any;
  subCategory: any;
  routeCategory: any;
  routeSubCategory: any;
  relatedProducts = 'Related Products';
  relatedProductsUrl: any;

  // images = [
  //   {
  //     image: '../../assets/slider1.png',
  //     // heading: 'Hair Oils / Shampoo',
  //     // subHeadingOne: 'flat 10% off all products',
  //     // subHeadingTwo: 'Nulla vitae elit libero',
  //   },
  //   {
  //     image: '../../assets/slider2.png',
  //     // heading: 'Health Care',
  //     // subHeadingOne: 'flat 10% off all products',
  //     // subHeadingTwo: 'Nulla vitae elit libero',
  //   },
  //   {
  //     image: '../../assets/slider3.png',
  //     // heading: 'Body Care',
  //     // subHeadingOne: 'flat 10% off all products',
  //     // subHeadingTwo: 'Nulla vitae elit libero',
  //   }
  // ]


  title:any;
  description: any;
  effectivePrice: any;
  originalPrice: any;
  quantity = 1;
  subtotal: any;
  customerReviews: any;
  delivery: any;
  images = [];

  constructor(
    private changeRef: ChangeDetectorRef,
    private userService:UserService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.routeCategory = params.get('category');
      this.routeSubCategory = params.get('subCategory');
      this.id = params.get('id');
      this.category = (params.get('category')).replace('-', ' ');
      this.category = this.category.charAt(0).toUpperCase() + (this.category).slice(1);
      this.subCategory = this.routeSubCategory ? (params.get('subCategory')).replace(/\-/gi, ' ') : null;
      this.subCategory = this.subCategory ? this.subCategory.charAt(0).toUpperCase() + (this.subCategory).slice(1) : null;

      this.url = `product/${this.id}`;
      this.relatedProductsUrl = `products?category=${this.category}`;
      console.log("Related url", this.relatedProductsUrl);

    });
    console.log('URL:::', this.url);
    this.getProductDetails();
  }


  minusBtn(){
    if(this.quantity > 1){
      this.quantity --;
      this.subtotal = this.subtotal - this.effectivePrice? this.effectivePrice * this.quantity : this.originalPrice * this.quantity;
      this.changeRef.detectChanges();
      console.log(this.quantity)
    }
  }

    getProductDetails() {
      this.userService.getProductDetails(this.url).subscribe((response:any)=>{
        this.title = response.Data.title;
        this.description = response.Data.description;
        this.effectivePrice = response.Data.effectivePrice ? response.Data.effectivePrice : null;
        this.originalPrice = response.Data.originalPrice;
        this.subtotal = response.Data.effectivePrice ? response.Data.effectivePrice : response.Data.originalPrice;
        this.delivery = response.Data.delivery ? response.Data.delivery : null;
        this.customerReviews = response.Data.reviews ? response.Data.reviews : null;

        for (const image of response.Data.images) {
          this.images.push(environment.api + image);
        }
      });
    }


  plusBtn(){
    this.quantity ++;
    this.subtotal = this.effectivePrice? this.effectivePrice * this.quantity : this.originalPrice * this.quantity;
    this.changeRef.detectChanges();
    console.log(this.quantity)
  }

  onChangeQuantity(){
    this.subtotal = this.effectivePrice? this.effectivePrice * this.quantity : this.originalPrice * this.quantity;
    this.changeRef.detectChanges();
  }

  addToCart() {
    const productObj ={
      id: this.id,
      quantity: 1,
      title: this.title,
      image: this.images[0],
      price: this.effectivePrice ? this.effectivePrice : this.originalPrice,
      total: this.effectivePrice ? this.effectivePrice : this.originalPrice,
    };
    this.userService.setProductsInCart(productObj);
  }

}
