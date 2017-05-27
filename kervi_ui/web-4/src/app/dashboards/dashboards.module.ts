// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardsService } from './dashboards.service'
import { COMPILER_PROVIDERS } from '@angular/compiler';
//import { ValueModule } from '..//sensors.module';
//import { ControllersModule } from '../controllers/controllers.module';
import { SensorsModule } from '../sensors/sensors.module';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { PageHeaderComponent} from './page-header/page-header.component'
import { DashboardSectionComponent } from './dashboard-section/dashboard-section.component';
//import { DashboardLayout } from './dashboard-layout/dashboard-layout.component'; 
//import { PageHeaderModule } from '../page-header/page-header.module';
import { RouterModule } from '@angular/router';
//import { DashboardDynamicTypeBuilder } from './dashboard-layout/dashboard-type.builder';
//import { LayoutControllerComponent } from './dashboard-layout/layout-controller.component'
//import { LayoutSensorComponent } from './dashboard-layout/layout-sensor.component'
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SensorsModule
    
  ],
  exports:[
    DashboardComponent,
    PageHeaderComponent,
    DashboardSectionComponent,
    //LayoutControllerComponent,
    //LayoutSensorComponent
  ],
  providers: [ DashboardsService, /*DashboardDynamicTypeBuilder,*/ COMPILER_PROVIDERS],
  declarations: [
    DashboardComponent,
    PageHeaderComponent,
    DashboardSectionComponent,
    //SensorComponent
    /*DashboardLayout,
    LayoutControllerComponent,
    LayoutSensorComponent,*/
    ]
})
export class DashboardsModule { }
