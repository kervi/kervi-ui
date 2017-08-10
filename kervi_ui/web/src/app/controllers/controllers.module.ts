// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPILER_PROVIDERS } from '@angular/compiler';
import { ControllerComponent } from './controller/controller.component';
import { ControllersService } from './controller.service'
import { RouterModule } from '@angular/router';
import { ValuesModule } from '../values/values.module'
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ValuesModule
  ],
  exports:[
    ControllerComponent,
    
  ],
  providers: [ ControllersService],
  declarations: [
    ControllerComponent,
    
    
    ]
})
export class ControllersModule {
    constructor(private controllerService: ControllersService){}
 }
