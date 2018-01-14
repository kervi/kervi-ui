// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardsService } from './dashboards.service'
import { SensorsModule } from '../sensors/sensors.module';
import { ActionsModule } from '../actions/actions.module';
import { ControllersModule } from '../controllers/controllers.module';
import { ValuesModule} from '../values/values.module';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { PageHeaderComponent} from './page-header/page-header.component'
import { DashboardSectionComponent } from './dashboard-section/dashboard-section.component';
import { RouterModule } from '@angular/router';
import { UIComponentsModule} from '../ui-components/ui-components.module'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SensorsModule,
    ControllersModule,
    ValuesModule,
    UIComponentsModule,
    ActionsModule
  ],
  exports:[
    DashboardComponent,
    PageHeaderComponent,
    DashboardSectionComponent,
    ValuesModule
  ],
  providers: [ DashboardsService, /*DashboardDynamicTypeBuilder,COMPILER_PROVIDERS*/ ],
  declarations: [
    DashboardComponent,
    PageHeaderComponent,
    DashboardSectionComponent,
    ]
})
export class DashboardsModule { }
