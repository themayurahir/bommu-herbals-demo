import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  generalCareNav = '/products/general-care'
  beautyCareNav = '/products/beauty-care'
  hairCareNav = '/products/hair-care'
  healthCareNav = '/products/health-care'
  powdersNav = '/products/powders'
  constructor() { }

  ngOnInit(): void {
  }

}
