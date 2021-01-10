import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {

  id: number;
  title: string;
  description: string
  effectivePrice: number;
  originalPrice: number;
  quantity= 1;
  total: number;
  image:any;

  constructor(
    private changeRef: ChangeDetectorRef,
    public dialogRef: MatDialogRef<QuickViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    console.log('Quick view', this.data);
    this.id = this.data.id;
    this.title = this.data.title;
    this.description = this.data.description;
    this.effectivePrice = this.data.effectivePrice;
    this.originalPrice = this.data.originalPrice;
    this.total = this.effectivePrice ? this.effectivePrice : this.originalPrice;
    this.image = this.data.src;

    console.log('total::', this.total);
  }

  minusBtn(){
    if(this.quantity > 1){
      this.quantity --;
      this.total = this.total - this.effectivePrice
      this.changeRef.detectChanges();
      console.log(this.quantity)
    }
  }

  plusBtn(){
    this.quantity ++;
    this.total = this.effectivePrice * this.quantity;
    this.changeRef.detectChanges();
    console.log(this.quantity)
  }

  onChangeQuantity(){
    this.total = this.effectivePrice * this.quantity;
    this.changeRef.detectChanges();
  }

}
