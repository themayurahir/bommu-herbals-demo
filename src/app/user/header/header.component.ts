import { Component, OnInit, AfterContentInit, AfterViewChecked  } from '@angular/core';
import {environment} from "../../../environments/environment";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentInit, AfterViewChecked {

  constructor(private userService:UserService) { }

  categories: any = [];
  id: number;
  firstName: string = '';
  lastName: string = '';
  isLoggedIn: boolean = false;
  productsInCart:number = 0;

  // categories = [
  //   {
  //     main: 'Beauty Care',
  //     subCategories: [
  //       {
  //         name:'Handmade Soaps',
  //         link: '/productCatelog',
  //       },
  //       {
  //         name:'Body Lotions',
  //         link: '#',
  //       },
  //       {
  //         name:'Face Glowing Oil',
  //         link: '#',
  //       },
  //       {
  //         name:'Face Cream',
  //         link: '#',
  //       },
  //       {
  //         name:'Hair Oils',
  //         link: '#',
  //       },
  //       {
  //         name:'Hair Shampoos',
  //         link: '#',
  //       },
  //     ],
  //   },
  //   {
  //     main: 'General Care',
  //     subCategories: [
  //       {
  //         name:'Hair Oils',
  //         link: '#',
  //       },
  //       {
  //         name:'Shampoos',
  //         link: '#',
  //       },
  //       {
  //         name:'Hair Care',
  //         link: '#',
  //       },
  //       {
  //         name:'Gels & Face Wash',
  //         link: '#',
  //       },
  //     ],
  //   },
  //   {
  //     main: 'Health Care',
  //     subCategories: [
  //       {
  //         name:'Syrups',
  //         link: '#',
  //       },
  //       {
  //         name:'Juices',
  //         link: '#',
  //       },
  //       {
  //         name:'Capsules',
  //         link: '#',
  //       },
  //       {
  //         name:'Tablets',
  //         link: '#',
  //       },
  //       {
  //         name:'Covid-19',
  //         link: '#',
  //       },
  //       {
  //         name:'Lehyams',
  //         link: '#',
  //       },
  //       {
  //         name:'Creams',
  //         link: '#',
  //       },
  //       {
  //         name:'Knee Pains',
  //         link: '#',
  //       },
  //       {
  //         name:'Sharbats',
  //         link: '#',
  //       },
  //       {
  //         name:'Oils',
  //         link: '#',
  //       },
  //       {
  //         name:'Churans',
  //         link: '#',
  //       },
  //     ],
  //   },
  //   {
  //     main: 'Powders',
  //     subCategories: [
  //       {
  //         name:'Powder',
  //         link: '#',
  //       },
  //     ],
  //   },
  //   {
  //     main: 'Hair Care',
  //     subCategories: [
  //       {
  //         name:'Hair Oil',
  //         link: '#',
  //       },
  //     ],
  //   },
  // ];

  ngOnInit(): void {
    this.productsInCart =  this.userService.getProductsInCart().length;
    this.getCategories();
    this.getSubCategories();
  }

  ngAfterViewChecked () {
    this.productsInCart =  this.userService.getProductsInCart().length;
  }

  ngAfterContentInit () {
    const user = JSON.parse(localStorage.getItem('user'))
    if(user) {
      this.id = user.id;
      this.firstName = user.firstName
      this.lastName = user.lastName
      this.isLoggedIn = true;
    }
    this.productsInCart =  this.userService.getProductsInCart().length;
    console.log('User::', this.firstName, this.lastName, user);
  }


  getCategories() {
    this.userService.getCategories().subscribe((response:any)=>{
      for (const element of response.Data) {
        this.categories.push({
          main: (element.categoryName).charAt(0).toUpperCase() + (element.categoryName).slice(1),
          subCategories: [],
        });
      }
    });
  }

  getSubCategories() {
    this.userService.getSubCategories().subscribe((response:any)=>{
      for (const category of this.categories) {
        console.log('Response data::', response.Data);
        let subCategoryFiltered = response.Data.filter((element)=>{

          return (element.categoryName).toLowerCase() === (category.main).toLocaleLowerCase();
        });

        for (const subCategoryFilteredElement of subCategoryFiltered) {
          category.subCategories.push({
            name: (subCategoryFilteredElement.subCategoryName).charAt(0).toUpperCase() + (subCategoryFilteredElement.subCategoryName).slice(1),
            link: `/products/${(category.main).toLowerCase()}/${subCategoryFilteredElement.subCategoryName}`,
          });
        }
      }
      console.log('Categories::', this.categories);
    });
  }

  logoutUser() {
    const body = {
      id: this.id,
    }
    this.userService.logoutUser(body).subscribe((response)=>{
      this.firstName = '';
      this.lastName = '';
      this.id = null;
      this.isLoggedIn = false;
      localStorage.removeItem('user');
    });
  }


}
