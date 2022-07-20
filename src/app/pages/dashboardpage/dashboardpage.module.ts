import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'src/app/component/card/card.module';
import { DashboardpageRoutingModule } from './dashboardpage-routing.module';
import { DashboardpageComponent } from './dashboardpage.component'

@NgModule({
  declarations: [
    DashboardpageComponent
  ],
  imports: [
    CommonModule,
    DashboardpageRoutingModule,
    CardModule
  ],
  exports:[
    DashboardpageComponent
  ]
})
export class DashboardpageModule { }
