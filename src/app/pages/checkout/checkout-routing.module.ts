import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartlistComponent } from '../cartlist/cartlist.component';
import { CheckoutComponent } from './checkout.component';

const routes: Routes = [
  {
    path:'',
    component: CheckoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
