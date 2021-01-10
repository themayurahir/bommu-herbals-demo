import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  topProducts = 'Top Sale Products';
  generalProducts = 'General Care';
  beautyProducts = ' Beauty Care';
  healthProducts = 'Health Care';
  powderProducts = 'Powders';

  topProductsUrl = 'products/top-products';
  generalProductsUrl = 'products?category=general care';
  beautyProductsUrl = 'products?category=beauty care';
  healthProductsUrl = 'products?category=health care';
  powderProductsUrl = 'products?category=powders';

  constructor() { }

  ngOnInit(): void {
  }

}
