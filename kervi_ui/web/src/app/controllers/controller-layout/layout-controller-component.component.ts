// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ControllerModel  } from '../models/controller.model';
import { IComponent } from '../../models/IComponent.model';
import { ControllersService } from '../controllers.service';
import { DashboardSectionModel } from '../../dashboards/models/dashboard.model';
declare var jQuery: any;

@Component({
  selector: 'controller-component',
  templateUrl: './controller-component.component.html',
  styleUrls: []
})
export class LayoutControllerComponent implements OnInit {
  @Input() id:string;
  @Input() dashboardType: string;
  @Input() parameters: any;
  @Input() dashboardSection: DashboardSectionModel = null;
  component:IComponent;
  constructor(private controllersService:ControllersService) {
       
   }

  ngOnInit() {
    if (this.id){
      console.log("ccx",this.id, this.parameters);
      this.component=this.controllersService.getControllerComponent(this.id);
      console.log("ccx1",this.id, this.parameters, this.component);
    }
  }
}
