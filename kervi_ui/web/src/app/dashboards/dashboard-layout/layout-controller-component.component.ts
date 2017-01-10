// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ControllerModel } from '../../controllers/models/controller.model'
import { IComponent } from '../../models/IComponent.model'
import { ControllersService } from '../../controllers/controllers.service'
declare var jQuery: any;

@Component({
  selector: 'controller-component',
  templateUrl: './layout-controller-component.component.html',
  styleUrls: []
})
export class LayoutControllerComponent implements OnInit {
  @Input() id:string;
  @Input() dashboardType: string;
  @Input() parameters:any = null;
  component:IComponent;
  constructor(private controllersService:ControllersService) {
      //console.log("db lcc constructor",this.id);

   }

  ngOnInit() {
    if (this.id){
      this.component=this.controllersService.getControllerComponent(this.id);
    }
  }


}
