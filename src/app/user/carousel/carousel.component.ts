import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  slides:any = [];

  // slides = [
  //   {
  //     image: '../../assets/slider1.png',
  //     heading: 'Hair Oils / Shampoo',
  //     subHeadingOne: 'flat 10% off all products',
  //     subHeadingTwo: 'Nulla vitae elit libero',
  //   },
  //   {
  //     image: '../../assets/slider2.png',
  //     heading: 'Health Care',
  //     subHeadingOne: 'flat 10% off all products',
  //     subHeadingTwo: 'Nulla vitae elit libero',
  //   },
  //   {
  //     image: '../../assets/slider3.png',
  //     heading: 'Body Care',
  //     subHeadingOne: 'flat 10% off all products',
  //     subHeadingTwo: 'Nulla vitae elit libero',
  //   }
  // ]
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getSlides();
  }

  getSlides() {
    this.userService.getSliders().subscribe((response:any)=>{
      for (const slide of response.Data) {
        const obj:any = {};
        obj.heading = slide.captionLine1;
        obj.subHeadingOne = slide.captionLine2;
        obj.subHeadingTwo = slide.captionLine3;
        obj.image = environment.api + slide.image[0];
        this.slides.push(obj);
      }
    });
  }

}
