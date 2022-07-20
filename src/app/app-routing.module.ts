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
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
