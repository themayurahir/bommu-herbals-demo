import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {environment} from "../../../environments/environment";


@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.scss']
})
export class TrackOrderComponent implements OnInit {

  orderNumber:number;
  orderStatus: any = null;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  getOrderStatus() {
    this.userService.getOrderStatus(this.orderNumber).subscribe((response:any)=>{
        this.orderStatus = response.Data.orderStatus;
      }
    );
  }
}
