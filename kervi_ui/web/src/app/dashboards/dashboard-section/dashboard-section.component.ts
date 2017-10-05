import { Component, Input, Output, OnInit, OnDestroy, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { KerviService } from "../../kervi.service";
import { DashboardsService } from "../dashboards.service";
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardModel, DashboardSectionModel, DashboardMessageModel } from '../../models/dashboard.model';
//import { DashboardFactory } from '../models/factory';
import { IComponent } from '../../models/IComponent.model';
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
    expanded:boolean = false;
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
        
        this.sectionClassWidth="w-"+ this.section.parameters.width;
        this.sectionClassHeight="h-"+ this.section.parameters.height;
        this.title = this.section.parameters.title;
        
        for( let component of this.section.components){
            if (component.parameters.linkToHeader)
                this.headerComponents.push(component)
            else
                this.components.push(component)
        }
        
        this.showHeader = (this.section.parameters.title != null && this.section.parameters.title.length>0) || (this.headerComponents.length > 0)
        if (this.section.parameters.userLog){
            this.kerviService.spine.sendQuery("getLogItems",0,20,function(v){
                console.log('lm', v);
                //var messages = DashboardFactory.createLogMessages(v)
                //self.messages$.next(messages);
                
            });
            this.kerviService.spine.addEventHandler("userLogMessage", null, function(v){
                console.log("um",this);
                var messages = self.messages$.value
                messages.unshift(new DashboardMessageModel(this));
                if (messages.length>20)
                    messages.pop();

                 self.messages$.next(messages);   
            });
        }
    }

    ngOnDestroy(){ 
    }
}