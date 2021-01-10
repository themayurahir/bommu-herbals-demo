import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";

declare var Razorpay: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  firstName;
  lastName;
  email;
  phone;
  city;
  state;
  country;
  zipcode;
  address;
  items = 0;
  subtotal = 0;
  total = 0;


  id: any;
  razorPayOrderId: any;
  razorPayPaymentId: any;
  razorPayResponseOrderId: any;
  razorPaySignature: any;
  razorPayPaymentFailedDescription: any;

  products = []

  // products = [
  //   {
  //     item: 'Soap',
  //     quantity: 3,
  //     price: 1000,
  //     total: 3000
  //   },
  //   {
  //     item: 'Soap',
  //     quantity: 3,
  //     price: 1000,
  //     total: 3000
  //   },
  //   {
  //     item: 'Soap',
  //     quantity: 3,
  //     price: 1000,
  //     total: 3000
  //   }
  // ]
  constructor(private userService:UserService,) { }

  ngOnInit(): void {
    this.getProductsArray();
    this.subTotalMoney();
    this.totalMoney();
    this.items = this.products.length;
    for (const product of this.products) {
      product.id = JSON.parse(product.id);
    }
  }

  getProductsArray() {
    this.products = this.userService.getProductsInCart();
  }

  subTotalMoney(){
    for(let product of this.products){
      this.subtotal += product.total;
    }
  }

  totalMoney(){
    for(let product of this.products){
      this.total += product.total;
    }
  }

  proceedToPayment() {
    const body ={
      customer: {
        name: `${this.firstName} ${this.lastName}`,
        email: this.email,
        mobile: this.phone,
      },
      details: {
        city: `${this.city}, ${this.state}`,
        address: this.address,
        zipcode: this.zipcode,
      },
      products: this.products,
      paymentStatus: 'fail',
      orderDate: new Date().toJSON().slice(0,10),
      orderStatus: 'waiting',
    };

    this.userService.addOrderApi(body).subscribe(async (response:any)=>{
      console.log('AddOrder:::', response.Data);
      this.razorPayOrderId = response.Data.orderId;
      this.id = response.Data.id;
      const options = {
        key: 'rzp_test_iSQwdxTqcFP48O',
        currency: 'INR',
        name: 'Bommu Herbals',
        amount: this.total * 100,
        description: 'Transaction test',
        image: '',
        order_id: response.Data.orderId,
        prefill: {
          name: `${this.firstName} ${this.lastName}`,
          email: this.email,
          contact: this.phone,
        },
        handler: (response)=>{
          console.log('Razor pay response:::', response.razorpay_signature);
          this.razorPayPaymentId =  response.razorpay_payment_id;
          this.razorPayResponseOrderId = response.razorpay_order_id;
          this.razorPaySignature = response.razorpay_signature;
          this.verifyPayment()
        },
        theme: {
          color: '#227254'
        },
      };

      const rzp1 = new Razorpay(options);
      await rzp1.open();
      rzp1.on('payment.failed', (response) => {
        console.log('Payment Failed::', response);
        this.razorPayPaymentFailedDescription = response.error.description;
      });

      console.log('opened');
      console.log('Razor Pay::::', this.razorPayPaymentId, this.razorPayOrderId, this.razorPaySignature);
    });

  }

  verifyPayment() {
    console.log('Razor pay signature:', this.razorPaySignature);
    const body = {
      id: this.id,
      orderId: this.razorPayOrderId,
      paymentId: this.razorPayPaymentId,
      signature: this.razorPaySignature,
    }
    console.log('Verify payment body', body);
    this.userService.paymentVerification(body).subscribe((response:any)=>{
      if(response.Data) {
        console.log("Payment Successful!");
      } else {
        console.log("Something went wrong!");
      }
    })
  }

}
