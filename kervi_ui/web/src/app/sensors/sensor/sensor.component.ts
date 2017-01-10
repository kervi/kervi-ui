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

  getStyleRuleValue(style, selector, sheet) {
    var sheets = typeof sheet !== 'undefined' ? [sheet] : document.styleSheets;
    for (var i = 0, l = sheets.length; i < l; i++) {
        var sheet = sheets[i];
        if( !sheet.cssRules ) { continue; }
        for (var j = 0, k = sheet.cssRules.length; j < k; j++) {
            var rule = sheet.cssRules[j];
            if (rule.selectorText && rule.selectorText.split(',').indexOf(selector) !== -1) {
                return rule.style[style];
            }
        }
    }
    return null;
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
    if (this.gaugeTypes.indexOf(this.type)>-1){
      
      self.displayType="gauge";
      this.sensor.value$.subscribe(function(v){
        if (self.gauge)
          self.gauge.update({value:v});  
      });
    
      var dataHighlights=[];
      var fromLimit=self.sensor.min;
      if (self.sensor.lowerFatalLimit!=null){
        dataHighlights.push({"from": fromLimit, "to": self.sensor.lowerFatalLimit, "color": "rgba(255, 0, 0, .75)"})
        fromLimit=self.sensor.lowerFatalLimit;
      }
      
      if (self.sensor.lowerWarningLimit!=null){
        dataHighlights.push({"from": fromLimit, "to": self.sensor.lowerWarningLimit, "color": "rgba(255, 255, 0, .75)"})
        fromLimit=self.sensor.lowerWarningLimit;
      }

      var toLimit=self.sensor.max;
      if (self.sensor.upperFatalLimit){
        dataHighlights.push({"from": self.sensor.upperFatalLimit, "to": toLimit, "color": "rgba(255, 0, 0, .75)"})
        toLimit=self.sensor.upperFatalLimit;
      }
      
      if (self.sensor.upperWarningLimit)
        dataHighlights.push({"from": self.sensor.upperWarningLimit, "to": toLimit, "color": "rgba(255, 255, 0, .75)"})

      


      


      


      var settings={
          renderTo: self.canvasId,
          value:self.sensor.value$.value,
          units: self.sensor.unit,
          title: self.sensor.name,
          minValue: self.sensor.min,
          maxValue: self.sensor.max,
          highlights: dataHighlights,
          colorPlate:"rgba(128,128,128,0)",
          borders:false,
          //colorBorderOuter:"",
          //colorBorderMiddle:"",
          //colorBorderInner:"",
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
      }
      
      
      setTimeout(function() {
        
        
        if (self.type=="radial_gauge"){
          settings["width"]= self.unitSize*self.size;
          settings["height"]= self.unitSize*self.size;
          self.gauge = new RadialGauge(settings).draw();
        }

        if (self.type=="vertical_linear_gauge"){

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
          settings["numberSide"]="left";

          settings["width"]= self.unitSize;
          settings["height"]= self.unitSize*self.size;
          self.gauge = new LinearGauge(settings).draw();
        }

        if (self.type=="horizontal_linear_gauge"){

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
      setTimeout(function() {
        
      
      jQuery("#"+self.canvasId).width(self.unitSize*self.size);
      jQuery("#"+self.canvasId).height(self.unitSize);
      self.kerviService.spine.sendQuery("getSensorData", self.sensor.id, function (results) {
        //console.log("gsd", this, results);
        var sensorData = results;
        var chartData = [];
        for (var i = 0; (i < sensorData.length); i++) {
          var dataItem = sensorData[i]
          chartData.push({ x: new Date(dataItem.ts), y: dataItem.value });
        }
        //console.log("cd", chartData);
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