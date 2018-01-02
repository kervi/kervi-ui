// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import { DynamicBooleanModel } from '../../models/dynamicValues.model'
import { KerviService } from '../../kervi.service'
import { DashboardSectionModel, DashboardSizes } from '../../models/dashboard.model'
declare var jQuery: any;

@Component({
  selector: 'kervi-switchbutton',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SwitchButtonComponent implements OnInit {
  @Input() value: DynamicBooleanModel;
  @Input() dashboardSection: DashboardSectionModel;
  @Input() parameters:any;
  @Input() inline:boolean = false;
  @Input() defaultSizes:DashboardSizes = new DashboardSizes();
  state:boolean = false
  private valueSubscription: any;
  private width:string;
  private height:string;
  constructor(private kerviService: KerviService, private elementRef: ElementRef) { }

  public press() {
     this.kerviService.spine.sendCommand(this.value.command, true);
  }

  public release() {
     this.kerviService.spine.sendCommand(this.value.command, false);
  }

  ngOnInit() {
    var self = this;

    if (!this.parameters){
      this.parameters = this.value.ui;

    if (!self.parameters.buttonWidth)
      this.width = this.defaultSizes.switchWidth;
    else
      this.width = self.parameters.buttonWidth;

    if (!self.parameters.buttonHeight)
      this.height = this.defaultSizes.switchHeight;
    else
      this.height = self.parameters.buttonHeight;

  } else{
    this.width = this.defaultSizes.switchWidth;
    this.height = this.defaultSizes.switchHeight;
  }

    var onText= this.parameters && this.parameters.onIcon ? "<i class='fa fa-" + this.parameters.onIcon + "'></i> " : ""; 
    var offText= this.parameters && this.parameters.offIcon ? "<i class='fa fa-" + this.parameters.offIcon + "'></i> " : ""; 
    
    onText+= this.parameters && this.parameters.onText ? this.parameters.onText : ""; 
    offText+= this.parameters && this.parameters.offText ? this.parameters.offText : ""; 

    self.valueSubscription = self.value.value$.subscribe(function (v) {
      self.state = v;
      if (v)
        jQuery('input', self.elementRef.nativeElement).bootstrapToggle('on')
      else
        jQuery('input', self.elementRef.nativeElement).bootstrapToggle('off')
    });

    

    setTimeout(function () {
        jQuery('input', self.elementRef.nativeElement).bootstrapToggle({
          'on': onText,
          'off': offText,
          'onstyle': "on",
          'offstyle': "off",
          "width":self.width,
          "height":self.height
        })

        if (self.value.value$.value)
          jQuery('input', self.elementRef.nativeElement).bootstrapToggle('on')
        else
          jQuery('input', self.elementRef.nativeElement).bootstrapToggle('off')

        jQuery('input', self.elementRef.nativeElement).change(function () {
          var state = jQuery('input', self.elementRef.nativeElement).prop('checked');
          if (state && !self.value.value$.value)
            self.kerviService.spine.sendCommand(self.value.command, true);
          else if (!state && self.value.value$.value)
            self.kerviService.spine.sendCommand(self.value.command, false);
        });
      
    }, 0);
  }
}
