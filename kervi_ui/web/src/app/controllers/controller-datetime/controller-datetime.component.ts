// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { DynamicDateTimeModel } from '../models/controller.model'
import { KerviService } from '../../kervi.service'
import { DashboardSectionModel } from '../../dashboards/models/dashboard.model'
declare var jQuery: any;

@Component({
  selector: 'kervi-controller-datetime',
  templateUrl: './controller-datetime.component.html',
  styleUrls: ['./controller-datetime.component.css']
})
export class ControllerDateTimeComponent implements OnInit {
  @Input() datetime: DynamicDateTimeModel;
  @Input() dashboardSection: DashboardSectionModel;
  @Input() parameters:any;
  private valueSubscription: any;
  constructor(private kerviService: KerviService, private elementRef: ElementRef) { }

  ngOnInit() {
    var self = this;
    if (!this.parameters)
      this.parameters = this.datetime.ui;

    setTimeout(function () {
      
      jQuery(function () {
            jQuery('.datetimepicker',self.elementRef.nativeElement).datetimepicker({
                //inline: true,
                //sideBySide: false,
                format: self.datetime.subType=="time" ? 'LT' : false,
                locale: 'da',
                icons: {
                    time: "fa fa-clock-o",
                    date: "fa fa-calendar",
                    up: "fa fa-arrow-up",
                    down: "fa fa-arrow-down"
                }
            });
        });
        
        jQuery(self.elementRef.nativeElement).on('dp.change',function (e,v) {
          console.log(e,v);
          self.kerviService.spine.sendCommand(self.datetime.changeCommand,e.timeStamp);
        });
      
    }, 0);
  }


}
