import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { companyRoutingModule } from './company-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    companyRoutingModule
  ]
})
export class companyModule { }
