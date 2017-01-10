// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ControllerModel } from '../../controllers/models/controller.model'
import { IComponent } from '../../models/IComponent.model'
import { ControllersService } from '../../controllers/controllers.service'
import { DashboardSectionModel } from '../models/dashboard.model'
declare var jQuery: any;

@Component({
  selector: 'controller',
  templateUrl: './layout-controller.component.html',
  styleUrls: []
})
export class LayoutControllerComponent implements OnInit {
  @Input() id:string;
  @Input() dashboardSection: DashboardSectionModel;
  @Input() parameters:any = null;
  controller:ControllerModel;
  constructor(private controllersService:ControllersService) {
      console.log("lcc constructor",this.id);
   }

  ngOnInit() {
    if (this.id){
      this.controller=this.controllersService.getControllerById(this.id);
    }
  }
}
