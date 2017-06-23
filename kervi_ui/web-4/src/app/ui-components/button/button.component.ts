// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DynamicBooleanModel, DynamicRange, DynamicRangeType  } from '../../models/dynamicValues.model';
import { DashboardSectionModel } from '../../models/dashboard.model';
import { KerviService } from '../../kervi.service';
import { TemplateService } from '../../template.service';
declare var jQuery:any;
//declare var Chart:any;
@Component({
  selector: 'kervi-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ButtonComponent implements OnInit {
  @Input() value: DynamicBooleanModel = null;
  @Input() parameters: any = null;
  @Input() type: string;
  @Input() size:number;
  @Input() inline:boolean = false;
  //private  unitSize:number = 150;
  //state:boolean = false;
  //canvasId:string="";
  //private chart:any=null;
  //private chartData = [];

  constructor(private kerviService:KerviService, private templateService:TemplateService ) {  
  }

  private color(style,selector){
    return this.templateService.getColor(style,selector);
  }

  ngOnInit() {
    var self = this; 
    if (self.parameters){
      if (!self.inline && self.parameters.inline)
        self.inline=true;
    } 
  }

  public press() {
    this.kerviService.spine.sendCommand(this.value.command, true);
  }

  public release() {
    this.kerviService.spine.sendCommand(this.value.command, false);
  }
}