// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ControllerSelectModel } from '../models/controller.model'
import { KerviService } from '../../kervi.service'
import { DashboardSectionModel } from '../../dashboards/models/dashboard.model'
declare var jQuery: any;

@Component({
  selector: 'kervi-controller-select',
  templateUrl: './controller-select.component.html',
  styleUrls: ['./controller-select.component.css']
})
export class ControllerSelectComponent implements OnInit {
  @Input() select: ControllerSelectModel;
  @Input() dashboardSection: DashboardSectionModel;
  @Input() parameters:any;
  constructor(private kerviService: KerviService, private elementRef: ElementRef) { }

  ngOnInit() {
    var self = this;
    if (!this.parameters)
      this.parameters = this.select.ui;
  }

  onChange(value){
    this.kerviService.spine.sendCommand(this.select.command,[value]);
  }

}
