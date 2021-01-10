import {Component, Input, OnInit} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {environment} from "../../../environments/environment";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() pageTitle: string;
  @Input() url: string;

  // images = [
  //   {
  //     title: 'Product 1',
  //     src: 'assets/product1.png',
  //     effectivePrice: 750,
  //     originalPrice: 1000,
  //   },
  //   {
  //     title: 'Product 2',
  //     src: 'assets/product2.jpg',
  //     effectivePrice: 750,
  //     originalPrice: 1000,
  //   },
  //   {
  //     title: 'Product 3',
  //     src: 'assets/product3.jpg',
  //     effectivePrice: 750,
  //     originalPrice: 1000,
  //   },
  //   {
  //     title: 'Product 4',
  //     src: 'assets/product4.jpg',
  //     effectivePrice: 750,
  //     originalPrice: 1000,
  //   },
  //   {
  //     title: 'Product 5',
  //     src: 'assets/product5.jpg',
  //     effectivePrice: 750,
  //     originalPrice: 1000,
  //   },
  // ];

  images = [];
  constructor(private userService:UserService) { }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<div class="btn btn-primary rounded-pill"><i class="fas fa-arrow-left"></i> Prev</div>', '<div class="btn btn-primary rounded-pill">Next <i class="fas fa-arrow-right"></i></div>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.userService.getProducts(this.url).subscribe((response:any)=>{
      console.log('PRODUCTS:::', response.Data);
      for (const element of response.Data) {
        const obj:any = {};
        obj.title = element.title;
        obj.src = environment.api + element.images[0];
        obj.effectivePrice = element.effectivePrice ? element.effectivePrice : element.originalPrice;
        obj.originalPrice =  element.effectivePrice ? element.originalPrice : null;
        this.images.push(obj);
      }
      console.log('IMAGES::::', this.images);
    });
  }

}
