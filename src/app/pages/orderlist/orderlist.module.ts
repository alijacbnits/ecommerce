import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderlistRoutingModule } from './orderlist-routing.module';
import { OrderlistComponent } from './orderlist.component';


@NgModule({
  declarations: [
    OrderlistComponent
  ],
  imports: [
    CommonModule,
    OrderlistRoutingModule
  ]
})
export class OrderlistModule { }
