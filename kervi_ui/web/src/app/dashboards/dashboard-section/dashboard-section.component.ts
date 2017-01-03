import { Component, Input, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { KerviService } from "../../kervi.service";
import { DashboardsService } from "../dashboards.service";
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardModel, DashboardSectionModel } from '../models/dashboard.model'
import { IComponent } from '../../models/IComponent.model'

@Component({
  selector: 'kervi-dashboard-section',
  //providers: [ KerviService ],
  templateUrl: './dashboard-section.component.html',
  styleUrls: ['./dashboard-section.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardSectionComponent implements OnInit, OnDestroy {
    @Input() section:DashboardSectionModel;
    @Input() inline:boolean = false; 
    //sectionComponents:IComponent[] = []

    constructor (private kerviService:KerviService){
    }

    ngOnInit() {
        /*console.log("sci",this.section);
        for (var sectionComponent of this.section.components ){
            if (!sectionComponent.component)
                sectionComponent.component=this.kerviService.getComponent(sectionComponent.componentId)
        }*/
  }

  ngOnDestroy(){
    
  }

}