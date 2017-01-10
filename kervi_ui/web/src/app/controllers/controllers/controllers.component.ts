// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ControllerModel } from '../models/controller.model'
import { ControllersService } from '../controllers.service'
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { DashboardSectionModel } from '../../dashboards/models/dashboard.model'
declare var jQuery: any;

@Component({
  selector: 'kervi-controllers',
  templateUrl: './controllers.component.html',
  styleUrls: ['./controllers.component.css']
})
export class ControllersComponent implements OnInit, OnDestroy {
  @Input() dashboardSection: DashboardSectionModel=null;
  
  controllerTypes$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  controllers$: BehaviorSubject<ControllerModel[]> =new BehaviorSubject<ControllerModel[]>([])
  private ctSubscription: any;
  constructor(private controllersService: ControllersService) {
  }

  public getControllers(type) {
    return this.controllersService.getDashboardControllers(this.dashboardSection.dashboard.id, type);
  }

  ngOnInit() {
    var self = this;
    var r = [];
    if (this.dashboardSection){
      for(var sectionComponent of this.dashboardSection.components){
        if (sectionComponent.component.componentType=="controller")
        {
          var controller = sectionComponent.component as ControllerModel;
          if (r.indexOf(controller.type)==-1)
            r.push(controller.type)
        }  
      }
    }
    

    setTimeout(function () {
      jQuery(".controllers-left-section").on('shown.bs.tab', function (event) {
        var rightId = event.target.dataset.idright;
        var panelRight = jQuery('.controllers-right-section');
        jQuery(".tab-pane", '.controllers-right-section').removeClass("active");
        jQuery(rightId).addClass("active");

        /*workaround for bug in BST 4 */
        if (event.relatedTarget) {
            jQuery(event.relatedTarget).removeClass('active');
        }

      });
    });
  }

  ngOnDestroy() {
    this.ctSubscription.unsubscribe();
  }
}
