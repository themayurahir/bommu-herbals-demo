import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminModuleRouting } from './admin-routing.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AdminModuleRouting
  ]
})
export class AdminModule { }
