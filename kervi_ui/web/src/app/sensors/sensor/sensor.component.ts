// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { SensorModel } from '../models/sensor.model';
import { DashboardSectionModel } from '../../dashboards/models/dashboard.model';
import { KerviService } from '../../kervi.service';
import { TemplateService } from '../../template.service';
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
  private chart:any = null;
  private chartData: any = null;
  constructor(private kerviService:KerviService, private templateService:TemplateService ) { 
    
  }

  

  private color(style,selector){
    return this.templateService.getColor(style,selector);
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
      this.unitSize *= this.dashboardSection.parameters.columns;
      this.unitSize -= 50;
      this.unitSize /= this.dashboardSection.parameters.columns;
    }
    self.canvasId=this.templateService.makeId();
    if (this.gaugeTypes.indexOf(this.type)>-1){
      
      self.displayType="gauge";
      this.sensor.value$.subscribe(function(v){
        if (self.gauge)
          self.gauge.update({value:v});  
      });

      
      var warningColor=this.color("color",".sensor-template .sensor-warning");
      var fatalColor=this.color("color",".sensor-template .sensor-fatal");

      var dataHighlights=[];
      var fromLimit=self.sensor.min;
      if (self.sensor.lowerFatalLimit!=null){
        dataHighlights.push({"from": fromLimit, "to": self.sensor.lowerFatalLimit, "color": fatalColor})
        fromLimit=self.sensor.lowerFatalLimit;
      }
      
      if (self.sensor.lowerWarningLimit!=null){
        dataHighlights.push({"from": fromLimit, "to": self.sensor.lowerWarningLimit, "color": warningColor})
        fromLimit=self.sensor.lowerWarningLimit;
      }

      var toLimit=self.sensor.max;
      if (self.sensor.upperFatalLimit){
        dataHighlights.push({"from": self.sensor.upperFatalLimit, "to": toLimit, "color": fatalColor})
        toLimit=self.sensor.upperFatalLimit;
      }
      
      if (self.sensor.upperWarningLimit)
        dataHighlights.push({"from": self.sensor.upperWarningLimit, "to": toLimit, "color": warningColor})

      
      var nspan=(self.sensor.max-self.sensor.min);
      var tickSpan=nspan/10;
      var ticks=[];
      for(var n=self.sensor.min;(n<=self.sensor.max);n+=tickSpan)
        ticks.push(n);

      var settings={
          renderTo: self.canvasId,
          value:self.sensor.value$.value,
          units: self.sensor.unit,
          title: self.sensor.name,
          minValue: self.sensor.min,
          maxValue: self.sensor.max,
          highlights: dataHighlights,
          majorTicks:ticks,
          colorPlate:this.color("background-color",".sensor-template"),
          borders:false,
          //colorBorderOuter:"",
          //colorBorderMiddle:"",
          //colorBorderInner:"",
          colorMajorTicks:this.color("color",".sensor-template .sensor-major-ticks"),
          colorMinorTicks:this.color("color",".sensor-template .sensor-minor-ticks"),
          colorTitle:this.color("color",".sensor-template .sensor-title"),
          colorUnits:this.color("color",".sensor-template .sensor-units"),
          colorNumbers:this.color("color",".sensor-template .sensor-numbers"),
          colorNeedleStart:this.color("color",".sensor-template .sensor-needle-start"),
          colorNeedleEnd:this.color("color",".sensor-template .sensor-needle-end"),
          valueBox:"true",
          animationRule:"bounce",
          animationDuration:"500",
          fontValue:"Led",
          animatedValue:"true"
      }
      
      
      setTimeout(function() {
        
        
        if (self.type=="radial_gauge"){
          settings["width"]= self.unitSize*self.size;
          settings["height"]= self.unitSize*self.size;
          self.gauge = new RadialGauge(settings).draw();
        }

        if (self.type=="vertical_linear_gauge"){
          settings["colorBarProgress"]= self.color("color",".sensor-template .sensor-bar-progress"),
          settings["colorBar"]= self.color("color",".sensor-template .sensor-bar"),
          settings["borders"]=false;
          settings["needleType"]="arrow";
          settings["needleWidth"]="2";
          settings["needleCircleSize"]="7";
          settings["needleCircleOuter"]="true";
          settings["needleCircleInner"]="false";
          settings["animationDuration"]="1500";
          settings["animationRule"]="linear";
          settings["barWidth"]="10";
          settings["barBeginCircle"]=false;
          //settings["numberSide"]="left";

          settings["width"]= self.unitSize;
          settings["height"]= self.unitSize*self.size;
          self.gauge = new LinearGauge(settings).draw();
        }

        if (self.type=="horizontal_linear_gauge"){
          settings["colorBarProgress"]= self.color("color",".sensor-template .sensor-bar-progress"),
          settings["colorBar"]= self.color("color",".sensor-template .sensor-bar"),
          settings["borders"]=false;
          settings["needleType"]="arrow";
          settings["needleWidth"]="2";
          settings["needleCircleSize"]="7";
          settings["needleCircleOuter"]="true";
          settings["needleCircleInner"]="false";
          settings["animationDuration"]="1500";
          settings["animationRule"]="linear";
          settings["barWidth"]="10";
          settings["barBeginCircle"]=false;


          settings["width"]= self.unitSize*self.size;
          settings["height"]= self.unitSize;
          
          self.gauge = new LinearGauge(settings).draw();
        }

        
      }, 0);
    }

    if (self.type=="chart"){
      self.displayType="chart";

      this.sensor.value$.subscribe(function(v){
        if (self.chart){
          try{
            var ds=self.chart.data.datasets[0].data;
            ds.push({ x: self.sensor.valueTS, y: v })
            if (ds.length>20)
              ds.shift();
            self.chart.render();  
            self.chart.update();
          }catch(ex){
            console.log("cdx",ex);  
          }
          
        }
      });

      setTimeout(function() {
        
      
      jQuery("#"+self.canvasId).width(self.unitSize*self.size);
      jQuery("#"+self.canvasId).height(self.unitSize);
      self.kerviService.spine.sendQuery("getSensorData", self.sensor.id, function (results) {
        //console.log("gsd", this, results);
        var sensorData = results;
        self.chartData = [];
        for (var i = 0; (i < sensorData.length); i++) {
          var dataItem = sensorData[i]
          self.chartData.push({ x: new Date(dataItem.ts), y: dataItem.value });
        }
        //console.log("cd", chartData);
        var ctx = jQuery("#"+self.canvasId);
        self.chart = new Chart(ctx, {
          type: 'line',
          responsive: false,
          data: {
            datasets: [
              {
                data: self.chartData,
                fill: false,
              },
            ]
          },
          options: {
            responsive: true,
            title: {
              display: true,
              text: self.sensor.name
            },
            elements:{
              point:{
                radius:0
              }
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
                  //labelString: 'Date'
                }
              }],
              yAxes: [{
                display: true,
                scaleLabel: {
                  display: true,
                  //labelString: 'value'
                }
              }]
            }
          }
        });
        console.log("sc",self.chart,self.chart.data.datasets[0].data);  
      });

      
      

      }, 200);
    }
    
  }
  
}