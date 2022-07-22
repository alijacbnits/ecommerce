import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'post/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'post/dashboard',
    loadChildren: () => import('./pages/dashboardpage/dashboardpage.module').then((m)=>m.DashboardpageModule)   
  },
  {
    path: 'post/cartlist',
    loadChildren: () => import('./pages/cartlist/cartlist.module').then((m)=>m.CartlistModule)   
  },
  {
    path: 'post/checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then((m)=>m.CheckoutModule)   
  },
  {
    path: 'post/orderlist',
    loadChildren: () => import('./pages/orderlist/orderlist.module').then((m)=>m.OrderlistModule)   
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
