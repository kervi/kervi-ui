// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DynamicNumberModel, DynamicRange, DynamicRangeType  } from '../../models/dynamicValues.model';
import { DashboardSectionModel } from '../../models/dashboard.model';
import { KerviService } from '../../kervi.service';
import { TemplateService } from '../../template.service';
declare var jQuery:any;
declare var Chart:any;
@Component({
  selector: 'kervi-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChartComponent implements OnInit {
  @Input() value: DynamicNumberModel = null;
  @Input() parameters: any = null;
  @Input() type: string;
  @Input() size:number;
  private  unitSize:number = 150;
  canvasId:string="";
  private chart:any=null;
  private chartData = [];

  constructor(private kerviService:KerviService, private templateService:TemplateService ) {  
  }

  private color(style,selector){
    return this.templateService.getColor(style,selector);
  }

  ngOnInit() {
    var self = this;  
    this.canvasId=this.templateService.makeId();
      
      this.value.value$.subscribe(function(v){
        if (self.chart){
          try{
            var ds=self.chart.data.datasets[0].data;
            ds.push({ x: self.value.valueTS, y: v })
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
      self.kerviService.spine.sendQuery("getSensorData", self.value.id, function (results) {
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
          responsive: true,
          data: {
            datasets: [
              {
                data: self.chartData,
                fill: true,
                lineTension: 0.1,
            //backgroundColor: "rgba(75,192,192,0.4)",
            /*borderColor: self.color("border-color",".sensor-chart"),
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: self.color("color",".sensor-chart"),
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: self.color("color",".sensor-chart .spot"),
            pointHoverBorderColor: self.color("border-color",".sensor-chart .spot"),
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,*/
              },
            ]
          },
          options: {
            responsive: true,
            title: {
              display: true,
              text: self.parameters.label
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
                gridLines:{
                  color:"rgba(255,255,255,0.5)",
                  zeroLineColor:"rgba(255,255,255,0.5)"
                },
                type: "time",
                unit:'second',
                unitStepSize:120,
                time:{
                  displayFormats: {
                    'millisecond': 'MMM DD',
                    'second': 'HH:mm:ss',
                    'minute': 'HH:mm:ss',
                    'hour': 'HH:mm:ss',
                    'day': 'MMM DD',
                    'week': 'MMM DD',
                    'month': 'MMM DD',
                    'quarter': 'MMM DD',
                    'year': 'MMM DD',
                  }
                },
                ticks:{
                  display:true,
                  stepSize: 120,
                },
                display: true,
                scaleLabel: {
                  display: true,
                  //labelString: 'Date'
                }
              }],
              yAxes: [{
                ticks: {
                    fontColor: "white",
                    //fontSize: 18,
                    //stepSize: 1,
                    //beginAtZero:true
                },
                gridLines:{
                  color:"rgba(255,255,255,0.5)",
                  zeroLineColor:"rgba(255,255,255,0.5)"
                },
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