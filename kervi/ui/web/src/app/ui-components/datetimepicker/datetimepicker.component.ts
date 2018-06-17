// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { DynamicDateTimeModel, DynamicRange, DynamicRangeType  } from '../../models/dynamicValues.model';
import { DashboardSectionModel, DashboardSizes } from '../../models/dashboard.model';
import { KerviService } from '../../kervi.service';
import { TemplateService } from '../../template.service';
import { BehaviorSubject } from 'rxjs/Rx';

declare var jQuery:any;
//declare var Chart:any;
@Component({
  selector: 'kervi-datetime',
  templateUrl: './datetimepicker.component.html',
  styleUrls: ['./datetimepicker.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})

export class DateTimeComponent implements OnInit {
  @Input() value: BehaviorSubject<Date> = new BehaviorSubject<Date>(null);
  @Input() parameters: any = null;
  @Input() type: string;
  @Input() size:number;
  @Input() inline:boolean = false;
  @Input() defaultSizes:DashboardSizes = new DashboardSizes();
  @Input() parent:any;
  id:string = null;
  datetimevalue:string = null;
  constructor(private kerviService:KerviService, private elementRef:ElementRef, private templateService:TemplateService ) {  
  }

  private color(style,selector){
    return this.templateService.getColor(style,selector);
  }
  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
  
  ngOnInit() {


    this.id = this.guid();
    var self = this; 
    if (self.parameters){
      if (!self.inline && self.parameters.inline)
        self.inline=true;
      
    } else {
      
    }
    if (self.value.value)
      self.datetimevalue = self.value.value.toLocaleString();
    this.value.subscribe(function(v){
      console.log("dvl", v);
      if (v){
        self.datetimevalue = v.toLocaleString();
      }
    })
    setTimeout(function(){
      console.log("dp", self.parent.value.id);
      var options = {};
      if (self.parameters.type=="time")
        options["format"] = self.kerviService.application$.value.display.datetime.time;
      else if (self.parameters.type=="date")
        options["format"] = self.kerviService.application$.value.display.datetime.date;
      else
      options["format"] = self.kerviService.application$.value.display.datetime.datetime;
      jQuery('.date', self.elementRef.nativeElement).datetimepicker(options);
      jQuery('.date', self.elementRef.nativeElement).on("change.datetimepicker", function(e){
        self.parent.change(e);
      })
    },0);
  }

  public press() {
    console.log("x")
    //this.parent.press();
    //this.kerviService.spine.sendCommand(this.value.command, true);
  }

  public release() {
    //this.parent.release();
    //this.kerviService.spine.sendCommand(this.value.command, false);
  }
}