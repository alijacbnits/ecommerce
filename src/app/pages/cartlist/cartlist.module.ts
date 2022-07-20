import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartlistRoutingModule } from './cartlist-routing.module';
import { CartlistComponent } from './cartlist.component';


@NgModule({
  declarations: [
    CartlistComponent
  ],
  imports: [
    CommonModule,
    CartlistRoutingModule
  ]
})
export class CartlistModule { }
