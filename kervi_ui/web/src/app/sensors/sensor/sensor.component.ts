// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { SensorModel } from '../models/sensor.model';
import { DashboardSectionModel } from '../../dashboards/models/dashboard.model';
import { KerviService } from '../../kervi.service';
declare var LinearGauge:any;
declare var RadialGauge:any;
declare var jQuery:any;
declare var Chart:any;
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
  canvasId:string="";
  displayType:string="value";
  private gauge:any=null;
  private gaugeTypes:string[]=['radial_gauge','vertical_linear_gauge', 'horizontal_linear_gauge', 'compass']
  private unitSize:number=100;

  constructor(private kerviService:KerviService ) { 
    
  }

  makeId()
  {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for( var i=0; i < 5; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
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
    self.canvasId=this.makeId();
    console.log("sgi",this.gaugeTypes,this.type);
    if (this.gaugeTypes.indexOf(this.type)>-1){
      
      self.displayType="gauge";
      this.sensor.value$.subscribe(function(v){
        if (self.gauge)
          self.gauge.update({value:v});  
      });
    

      var settings={
          renderTo: self.canvasId,
          value:self.sensor.value$.value,
          units: self.sensor.unit,
          title: self.sensor.name,
          minValue: self.sensor.min,
          maxValue: self.sensor.max,
          /*colorPlate:"#222",
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
          animatedValue:"true"*/
      }
      
      
      setTimeout(function() {
        console.log("ga",self, settings);
        
        if (self.type=="radial_gauge"){
          settings["width"]= self.unitSize*self.size;
          settings["height"]= self.unitSize*self.size;
          self.gauge = new RadialGauge(settings).draw();
        }

        if (self.type=="vertical_linear_gauge"){
          settings["width"]= self.unitSize;
          settings["height"]= self.unitSize*self.size;
          self.gauge = new LinearGauge(settings).draw();
        }

        if (self.type=="horizontal_linear_gauge"){
          settings["width"]= self.unitSize*self.size;
          settings["height"]= self.unitSize;
          
          self.gauge = new LinearGauge(settings).draw();
        }

        console.log("g",self.gauge);
      }, 0);
    }

    if (self.type=="chart"){
      self.displayType="chart";
      console.log("st");
      setTimeout(function() {
        console.log("st",self);
      
      
      jQuery("#"+self.canvasId).width(self.unitSize*self.size);
      jQuery("#"+self.canvasId).height(self.unitSize);
      console.log("sta");
      self.kerviService.spine.sendQuery("getSensorData", self.sensor.id, function (results) {
        console.log("gsd", this, results);
        var sensorData = results;
        var chartData = [];
        for (var i = 0; (i < sensorData.length); i++) {
          var dataItem = sensorData[i]
          chartData.push({ x: new Date(dataItem.ts), y: dataItem.value });
        }
        console.log("cd", chartData);
        var ctx = jQuery("#"+self.canvasId);
        var chart = new Chart(ctx, {
          type: 'line',
          responsive: false,
          data: {
            datasets: [
              {
                data: chartData,
                fill: false
              },
            ]
          },
          options: {
            responsive: true,
            title: {
              display: true,
              text: self.sensor.name
            },
            legend: {
              display: false,
            },
            scales: {
              xAxes: [{
                type: "time",
                ticks:{
                  display:false
                },
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Date'
                }
              }],
              yAxes: [{
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'value'
                }
              }]
            }
          }
        });
        
      });
      }, 200);
    }
    
  }
  
}