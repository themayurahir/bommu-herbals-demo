import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import { QuickViewComponent } from '../quick-view/quick-view.component';
import {environment} from "../../../environments/environment";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  routeCategory: any;
  routeSubCategory: any;
  category: any;
  subCategory: any;
  url: any;

  images = [];

  // images = [
  //   {
  //     title: 'Product 1',
  //     src: 'assets/product1.png',
  //     price: 750,
  //     save_percent: 10,
  //     lastprice: 1000
  //   },
  //   {
  //     title: 'Product 2',
  //     src: 'assets/product2.jpg',
  //     price: 850,
  //     save_percent:10,
  //     lastprice: 1000
  //   },
  //   {
  //     title: 'Product 3',
  //     src: 'assets/product3.jpg',
  //     price: 950,
  //     save_percent:10,
  //     lastprice: 1000
  //   },
  //   {
  //     title: 'Product 4',
  //     src: 'assets/product4.jpg',
  //     price: 650,
  //     save_percent:10,
  //     lastprice: 1000
  //   },
  //   {
  //     title: 'Product 5',
  //     src: 'assets/product5.jpg',
  //     price: 550,
  //     save_percent:10,
  //     lastprice: 1000
  //   },
  // ];

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private userService:UserService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.routeCategory = params.get('category');
      this.routeSubCategory = params.get('subCategory');
      this.category = (params.get('category')).replace('-', ' ');
      this.category = this.category.charAt(0).toUpperCase() + (this.category).slice(1);
      this.subCategory = this.routeSubCategory? (params.get('subCategory')).replace(/\-/gi, ' ') : null;
      this.subCategory = this.subCategory? this.subCategory.charAt(0).toUpperCase() + (this.subCategory).slice(1) : null;

      if(this.subCategory) {
        this.url = `products?category=${this.category}&subCategory=${this.subCategory}`;
      } else {
        this.url = `products?category=${this.category}`;
      }

      this.getProducts();
      console.log('Category:::', this.category, this.subCategory,this.url);
    });
  }

  quickView(product){
    this.dialog.open(QuickViewComponent, {
      height:'60%',
      width:'100%',
      data: product,
    })
  }

  getProducts() {
    this.userService.getProducts(this.url).subscribe((response:any)=>{
      console.log('PRODUCTS:::', response.Data);
      for (const element of response.Data) {
        const obj:any = {};
        obj.id = element.id;
        obj.title = element.title;
        obj.description = element.description;
        obj.src = environment.api + element.images[0];
        obj.effectivePrice = element.effectivePrice ? element.effectivePrice : element.originalPrice;
        obj.originalPrice =  element.effectivePrice ? element.originalPrice : null;
        obj.category = element.category;
        obj.subCategory = element.subCategory;
        obj.link = `/products/${element.category}/${element.subCategory}/${element.id}`
        if(element.effectivePrice) {
          obj.savePercent = 100 - Math.round((element.effectivePrice * 100)/element.originalPrice)
        } else {
          obj.savePercent = null;
        }
        this.images.push(obj);
      }
      console.log('IMAGES::::', this.images);
    });
  }

  addToCart(product) {
    const productObj ={
      id: product.id,
      quantity: 1,
      title: product.title,
      image: product.src,
      price: product.effectivePrice ? product.effectivePrice : product.originalPrice,
      total: product.effectivePrice ? product.effectivePrice : product.originalPrice,
    };
    this.userService.setProductsInCart(productObj);
  }

}
