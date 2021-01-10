import { Injectable } from '@angular/core';
import  {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  productsInCart = [];
  subscription: Subscription;
  browserRefresh = false;
  encryptSecretKey = 'bommuHerbalsSecretKeyForProductsInCart';


  sliders: any = `${environment.api}all-sliders`;
  topProducts: any = `${environment.api}products/top-products`;
  categories: any = `${environment.api}categories`;
  subCategories: any = `${environment.api}sub-categories`;
  addOrder: any = `${environment.api}order`;
  verify: any = `${environment.api}verify`;
  login: any = `${environment.api}login`;
  logout: any = `${environment.api}logout`;
  register: any = `${environment.api}register`;
  trackOrder: any = `${environment.api}track-order/`;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {  }

  getSliders() {
    return this.http.get(this.sliders);
  }

  getCategories() {
    return this.http.get(this.categories);
  }

  getSubCategories() {
    return this.http.get(this.subCategories);
  }

  getProducts(url) {
    return this.http.get(`${environment.api + url}`);
  }

  getOrderStatus(orderId) {
    return this.http.get(`${this.trackOrder+orderId}`);
  }

  getProductDetails(url) {
    return this.http.get(`${environment.api + url}`);
  }

  loginUser(body) {
    return this.http.post(this.login, body);
  }

  logoutUser(body) {
    return this.http.post(this.logout, body);
  }

  registerUser(body) {
    return this.http.post(this.register, body);
  }

  addOrderApi(body) {
    return this.http.post(this.addOrder, body);
  }

  paymentVerification(body) {
    return this.http.post(this.verify, body);
  }

  setFromCart(products) {
    localStorage.setItem('products', CryptoJS.AES.encrypt(JSON.stringify(products), this.encryptSecretKey).toString())
  }

  setProductsInCart(product) {
    const itemFromStorage = localStorage.getItem('products');
    if (itemFromStorage) {
      this.productsInCart = JSON.parse(CryptoJS.AES.decrypt(itemFromStorage, this.encryptSecretKey).toString(CryptoJS.enc.Utf8));
    }

    const isProductPresent = this.productsInCart.find((element)=>{
      if(element.title === product.title) {
        element.quantity = element.quantity + 1;
        element.total = element.total + product.price;
      }
      return element.title === product.title;
    });

    if(!isProductPresent) {
      this.productsInCart.push(product);
    }

    localStorage.setItem('products', CryptoJS.AES.encrypt(JSON.stringify(this.productsInCart), this.encryptSecretKey).toString())
    console.log('Setter::', this.productsInCart);
  }

  getProductsInCart() {
    const itemFromStorage = localStorage.getItem('products');
    if (itemFromStorage) {
      this.productsInCart = JSON.parse(CryptoJS.AES.decrypt(itemFromStorage, this.encryptSecretKey).toString(CryptoJS.enc.Utf8));
    }
    console.log('Getter::', this.productsInCart);
    return this.productsInCart;
  }
}
