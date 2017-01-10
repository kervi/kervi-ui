// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { SensorModel } from '../../sensors/models/sensor.model'
import { SensorsService } from '../../sensors/sensors.service';
import { DashboardSectionModel } from '../../dashboards/models/dashboard.model'
declare var jQuery: any;

@Component({
  selector: 'sensor',
  templateUrl: './layout-sensor.component.html',
  styleUrls: []
})
export class LayoutSensorComponent implements OnInit {
  @Input() id:string;
  @Input() dashboardType: string;
  @Input() parameters:any = null;
  @Input() dashboardSection: DashboardSectionModel;
  sensor:SensorModel;
  constructor(private sensorsService:SensorsService) {
      //console.log("ls constructor",this.id);
      
   }

  ngOnInit() {
    if (this.id){
      this.sensor=this.sensorsService.getSensorById(this.id);
    }
  }


}
