import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  TotalMoney:number = 0;
  products: any;

  // products = [
  //   {
  //     image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
  //     title: 'tree',
  //     price: 10,
  //     quantity: 4,
  //     total: 40,
  //   },
  //   {
  //     image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
  //     title: 'tree',
  //     price: 10,
  //     quantity: 4,
  //     total: 40,
  //   }
  // ]
  constructor(
    private changeRef: ChangeDetectorRef,
    private userService:UserService,
  ) { }

  ngOnInit(): void {
    this.getProductsArray();
    this.totalMoney();
  }

  minusBtn(product) {
      if (product.quantity > 1) {
        product.quantity--;
        product.total = product.total - product.price
        this.totalMoney()
        this.setFromCart()
        this.changeRef.detectChanges();
      }
  }

  plusBtn(product) {
      product.quantity++;
      product.total = product.price * product.quantity;
      this.totalMoney()
      this.setFromCart()
      this.changeRef.detectChanges();
  }

  onChangeQuantity() {
    for (let product of this.products) {
      product.total = product.price * product.quantity;
      this.changeRef.detectChanges();
    }
  }

  totalMoney(){
    this.TotalMoney = 0;
    for(let product of this.products){
      this.TotalMoney += product.total;
      this.changeRef.detectChanges();
    }
  }

  getProductsArray() {
    this.products = this.userService.getProductsInCart();
  }

  setFromCart() {
    this.userService.setFromCart(this.products);
  }

  removeProduct(index) {
    if (index > -1) {
      this.products.splice(index, 1);
    }
    this.totalMoney();
    this.setFromCart();
  }
}
