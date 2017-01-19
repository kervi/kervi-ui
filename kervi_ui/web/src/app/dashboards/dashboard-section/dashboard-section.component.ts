import { Component, Input, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { KerviService } from "../../kervi.service";
import { DashboardsService } from "../dashboards.service";
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardModel, DashboardSectionModel, DashboardMessageModel } from '../models/dashboard.model'
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
    sectionClassWidth:string = "dashboard-section-width-1"
    sectionClassHeight:string = "dashboard-section-height-1"
    
    //sectionWidth:string;
    //sectionHeight:string;
    showHeader:boolean = false;
    title:string;
    components:Component[]=[];
    headerComponents: Component[] = [];
    messages: DashboardMessageModel[] = [];
    //sectionComponents:IComponent[] = []

    constructor (private kerviService:KerviService){
    }

    ngOnInit() {
        var self=this;
        //this.sectionWidth=this.section.parameters.columns*this.section.dashboard.unitSize + this.section.parameters.columns * 40 + "px";
        //this.sectionHeight=this.section.parameters.rows*this.section.dashboard.unitSize + this.section.parameters.rows * 40 + "px";
        this.sectionClassWidth="dashboard-section-width-"+ this.section.parameters.columns;
        this.sectionClassHeight="dashboard-section-height-"+ this.section.parameters.rows;
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

        if (this.section.parameters.userLog){
            this.kerviService.spine.addEventHandler("userLogMessage", null, function(v){
                self.messages.push(new DashboardMessageModel(this));
                if (self.messages.length>20)
                    self.messages.shift();
                 console.log("lm",self.messages);   
            });
        }
        
  }

  ngOnDestroy(){
    
  }

}