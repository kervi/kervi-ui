// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { DynamicBooleanModel } from '../models/controller.model'
import { KerviService } from '../../kervi.service'
import { DashboardSectionModel } from '../../dashboards/models/dashboard.model'
declare var jQuery: any;

@Component({
  selector: 'kervi-controller-button',
  templateUrl: './controller-button.component.html',
  styleUrls: ['./controller-button.component.css']
})
export class ControllerButtonComponent implements OnInit {
  @Input() button: DynamicBooleanModel;
  @Input() dashboardSection: DashboardSectionModel;
  @Input() parameters:any;
  state:boolean = false
  private valueSubscription: any;
  constructor(private kerviService: KerviService, private elementRef: ElementRef) { }

  public click() {
    //this.kerviService.spine.sendCommand(this.button.pressCommand);
    //this.kerviService.spine.sendCommand(this.button.releaseCommand);
  }

  public press() {
    //this.kerviService.spine.sendCommand(this.button.pressCommand);
  }

  public release() {
    //this.kerviService.spine.sendCommand(this.button.releaseCommand);
  }

  ngOnInit() {
    var self = this;
    if (!this.parameters)
      this.parameters = this.button.ui;

    self.valueSubscription = self.button.state$.subscribe(function (v) {
      console.log("swbc",v);
      self.state = v;
    });
  }

}
