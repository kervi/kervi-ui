// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { SensorModel } from '../models/sensor.model';
import { DashboardSectionModel } from '../../dashboards/models/dashboard.model'
declare var LinearGauge:any;
declare var RadialGauge:any;

@Component({
  selector: 'kervi-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SensorComponent implements OnInit {
  @Input() sensor: SensorModel = null;
  @Input() parameters: any = null;
  @Input() type: string = "value";
  @Input() showSparkline: boolean = true;
  @Input() size:number = 1;
  @Input() dashboardSection: DashboardSectionModel = null;

  private gauge:any=null;
  private unitSize:number=100;

  constructor() { 
    
  }

  ngOnInit() {
    var self=this;
    if (this.parameters){
      if (this.parameters.type)
        this.type=this.parameters.type;
      if (this.parameters.showSparkline)
        this.showSparkline=this.parameters.showSparkline;
      if (this.parameters.size)
        this.size=this.parameters.size;
    }

    if (this.dashboardSection){
      this.unitSize=this.dashboardSection.dashboard.unitSize;
    }

    if (this.type=="gauge"){
      this.sensor.value$.subscribe(function(v){
        if (self.gauge)
          self.gauge.update({value:v});  
      });
    }

    if (this.type=="gauge"){
      setTimeout(function() {
        console.log("ga");
        self.gauge = new RadialGauge({
          renderTo: self.sensor.id,
          value:self.sensor.value$.value,
          width: self.unitSize*self.size,
          height: self.unitSize*self.size,
          units: self.sensor.unit,
          title: self.sensor.name,
          minValue: self.sensor.min,
          maxValue: self.sensor.max,
          colorPlate:"#222",
          colorMajorTicks:"#f5f5f5",
          colorMinorTicks:"#ddd",
          colorTitle:"#fff",
          colorUnits:"#ccc",
          colorNumbers:"#eee",
          colorNeedleStart:"rgba(240, 128, 128, 1)",
          colorNeedleEnd:"rgba(255, 160, 122, .9)",
          valueBox:"true",
          animationRule:"bounce",
          animationDuration:"500",
          fontValue:"Led",
          animatedValue:"true"
        }).draw();
        console.log("g",self.gauge);
      }, 0);
    }
  }
}
