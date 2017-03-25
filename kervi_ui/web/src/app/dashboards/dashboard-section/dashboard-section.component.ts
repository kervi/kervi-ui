import { Component, Input, OnInit, OnDestroy, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { KerviService } from "../../kervi.service";
import { DashboardsService } from "../dashboards.service";
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardModel, DashboardSectionModel, DashboardMessageModel } from '../models/dashboard.model'
import { IComponent } from '../../models/IComponent.model'
import {BehaviorSubject} from 'rxjs/Rx';

@Component({
  selector: 'kervi-dashboard-section',
  //providers: [ KerviService ],
  templateUrl: './dashboard-section.component.html',
  styleUrls: ['./dashboard-section.component.css'],
  //encapsulation: ViewEncapsulation.None
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardSectionComponent implements OnInit, OnDestroy {
    @Input() section:DashboardSectionModel;
    @Input() inline:boolean = false;
    sectionClassWidth:string = "dashboard-section-width-1"
    sectionClassHeight:string = "dashboard-section-height-1"
    
    //sectionWidth:string;
    //sectionHeight:string;
    showHeader:boolean = false;
    expanded:boolean = true;
    title:string;
    components:Component[]=[];
    headerComponents: Component[] = [];
    //messages: DashboardMessageModel[] = [];
    messages$: BehaviorSubject<DashboardMessageModel[]> = new BehaviorSubject<DashboardMessageModel[]>([]);
    //sectionComponents:IComponent[] = []

    constructor (private kerviService:KerviService){
    }

    ngOnInit() {
        var self=this;
        
        this.sectionClassWidth="dashboard-section-width-"+ this.section.parameters.columns;
        this.sectionClassHeight="dashboard-section-height-"+ this.section.parameters.rows;
        this.title = this.section.parameters.title;
        
        for( let component of this.section.components){
            console.log("pm",component);
        
            if (component.parameters.linkToHeader)
                this.headerComponents.push(component)
            else
                this.components.push(component)
        }
        console.log("cccc",this.components,this.headerComponents);

        this.showHeader = (this.section.parameters.title != null && this.section.parameters.title.length>0) || (this.headerComponents.length > 0)
        this.expanded = (this.headerComponents.length==0);
        if (this.section.parameters.userLog){
            this.kerviService.spine.addEventHandler("userLogMessage", null, function(v){
                //console.log("um",this);
                var messages = self.messages$.value
                messages.push(new DashboardMessageModel(this));
                if (messages.length>20)
                    messages.shift();

                 self.messages$.next(messages);   
            });
        }
        
  }

  ngOnDestroy(){
    
  }

}