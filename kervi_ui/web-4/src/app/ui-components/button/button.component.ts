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
  selector: 'kervi-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ButtonComponent implements OnInit {
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
    
      
      this.value.value$.subscribe(function(v){
      });
  }
}