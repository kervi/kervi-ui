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
    sectionWidth:string;
    showHeader:boolean = false;
    title:string;
    components:Component[]=[];
    headerComponents: Component[] = [];
    //sectionComponents:IComponent[] = []

    constructor (private kerviService:KerviService){
    }

    ngOnInit() {
        this.sectionWidth=this.section.parameters.columns*this.section.dashboard.unitSize + this.section.parameters.columns * 40 + "px";
        this.title = this.section.parameters.title;
        for( let component of this.section.components){
            console.log("pm",component);
        
            if (component.parameters.addToHeader)
                this.headerComponents.push(component)
            else
                this.components.push(component)
        }
        console.log("cccc",this.components,this.headerComponents);

        this.showHeader = (this.section.parameters.title != null && this.section.parameters.title.length>0) || (this.headerComponents.length > 0)
        
  }

  ngOnDestroy(){
    
  }

}