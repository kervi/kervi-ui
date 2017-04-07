// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import { DynamicBooleanModel } from '../models/controller.model'
import { KerviService } from '../../kervi.service'
import { DashboardSectionModel } from '../../dashboards/models/dashboard.model'
declare var jQuery: any;

@Component({
  selector: 'kervi-controller-switchbutton',
  templateUrl: './controller-switchbutton.component.html',
  styleUrls: ['./controller-switchbutton.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ControllerSwitchButtonComponent implements OnInit {
  @Input() button: DynamicBooleanModel;
  @Input() dashboardSection: DashboardSectionModel;
  @Input() parameters:any;
  private valueSubscription: any;
  constructor(private kerviService: KerviService, private elementRef: ElementRef) { }

  ngOnInit() {
    var self = this;

    if (!this.parameters)
      this.parameters = this.button.ui;

    console.log("ui",this.parameters);

    var onText= this.parameters && this.parameters.onIcon ? "<i class='fa fa-" + this.parameters.onIcon + "'></i> " : ""; 
    var offText= this.parameters && this.parameters.offIcon ? "<i class='fa fa-" + this.parameters.offIcon + "'></i> " : ""; 
    
    onText+= this.parameters && this.parameters.onText ? this.parameters.onText : ""; 
    offText+= this.parameters && this.parameters.offText ? this.parameters.offText : ""; 
    

    self.valueSubscription = self.button.state$.subscribe(function (v) {
      console.log("swbc",v);
      jQuery('input', self.elementRef.nativeElement).bootstrapToggle(v ? "on" :"off");
    });

    setTimeout(function () {
      jQuery('input', self.elementRef.nativeElement).bootstrapToggle({
          on: onText,
          off: offText,
          style:self.parameters.size == 0 && !self.parameters.inline ? "pull-right" : "" 
      });
      jQuery('input', self.elementRef.nativeElement).change(function () {
        var state = jQuery('input', self.elementRef.nativeElement).prop('checked');
        if (state && !self.button.state$.value)
          self.kerviService.spine.sendCommand(self.button.command, true);
        else if (!state && self.button.state$.value)
          self.kerviService.spine.sendCommand(self.button.command, false);
      });
    }, 0);
  }


}
