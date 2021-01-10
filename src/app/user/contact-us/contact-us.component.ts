import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  name;
  email;
  phone;
  message;
  subject;
  constructor() { }

  ngOnInit(): void {
  }

}
