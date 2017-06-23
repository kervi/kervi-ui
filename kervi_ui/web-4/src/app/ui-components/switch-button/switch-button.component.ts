// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import { DynamicBooleanModel } from '../../models/dynamicValues.model'
import { KerviService } from '../../kervi.service'
import { DashboardSectionModel } from '../../models/dashboard.model'
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
  state:boolean = false
  private valueSubscription: any;
  constructor(private kerviService: KerviService, private elementRef: ElementRef) { }

  public press() {
     this.kerviService.spine.sendCommand(this.value.command, true);
  }

  public release() {
     this.kerviService.spine.sendCommand(this.value.command, false);
  }

  ngOnInit() {
    var self = this;

    if (!this.parameters)
      this.parameters = this.value.ui;

    var onText= this.parameters && this.parameters.onIcon ? "<i class='fa fa-" + this.parameters.onIcon + "'></i> " : ""; 
    var offText= this.parameters && this.parameters.offIcon ? "<i class='fa fa-" + this.parameters.offIcon + "'></i> " : ""; 
    
    onText+= this.parameters && this.parameters.onText ? this.parameters.onText : ""; 
    offText+= this.parameters && this.parameters.offText ? this.parameters.offText : ""; 

    self.valueSubscription = self.value.value$.subscribe(function (v) {
      self.state = v;
      if (self.parameters.type=="switch")
        jQuery('input', self.elementRef.nativeElement).prop('checked',v);
    });

    setTimeout(function () {
      
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
