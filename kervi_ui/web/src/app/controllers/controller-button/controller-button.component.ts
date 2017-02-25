// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ControllerButtonModel } from '../models/controller.model'
import { KerviService } from '../../kervi.service'
import { DashboardSectionModel } from '../../dashboards/models/dashboard.model'
declare var jQuery: any;

@Component({
  selector: 'kervi-controller-button',
  templateUrl: './controller-button.component.html',
  styleUrls: ['./controller-button.component.css']
})
export class ControllerButtonComponent implements OnInit {
  @Input() button: ControllerButtonModel;
  @Input() dashboardSection: DashboardSectionModel;
  @Input() parameters:any;
  constructor(private kerviService: KerviService, private elementRef: ElementRef) { }

  public click() {
    this.kerviService.spine.sendCommand(this.button.pressCommand);
    this.kerviService.spine.sendCommand(this.button.releaseCommand);
  }

  public press() {
    this.kerviService.spine.sendCommand(this.button.pressCommand);
  }

  public release() {
    this.kerviService.spine.sendCommand(this.button.releaseCommand);
  }

  ngOnInit() {
    if (!this.parameters)
      this.parameters = this.button.ui;
  }

}
