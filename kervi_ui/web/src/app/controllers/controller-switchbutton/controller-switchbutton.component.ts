// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import { ControllerSwitchButtonModel } from '../models/controller.model'
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
  @Input() button: ControllerSwitchButtonModel;
  @Input() dashboardSection: DashboardSectionModel;
  private valueSubscription: any;
  constructor(private kerviService: KerviService, private elementRef: ElementRef) { }

  ngOnInit() {
    var self = this;
    self.valueSubscription = self.button.state$.subscribe(function (v) {
      jQuery('input', self.elementRef.nativeElement).bootstrapToggle(v ? 'on' : 'off', true);
    });

    setTimeout(function () {
      jQuery('input', self.elementRef.nativeElement).bootstrapToggle();
      jQuery('input', self.elementRef.nativeElement).change(function () {
        var state = jQuery('input', self.elementRef.nativeElement).prop('checked');
        if (state && !self.button.state$.value)
          self.kerviService.spine.sendCommand(self.button.onCommand);
        else if (!state && self.button.state$.value)
          self.kerviService.spine.sendCommand(self.button.offCommand);
      });
    }, 0);
  }


}
