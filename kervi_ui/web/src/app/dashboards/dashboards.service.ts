// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Injectable , EventEmitter} from '@angular/core';
import {KerviService} from "../kervi.service";
import { ControllersService } from "../controllers/controllers.service";
import { SensorsService } from "../sensors/sensors.service";
import {BehaviorSubject, Subject} from 'rxjs/Rx';
import { DashboardModel, DashboardSectionModel } from './models/dashboard.model'
@Injectable()
export class DashboardsService {
    dashboards:DashboardModel[] = [];
    private _dashboards$: BehaviorSubject<DashboardModel[]> = new BehaviorSubject<DashboardModel[]>([]);

    constructor(private kerviService:KerviService, private controllersService:ControllersService, private sensorsService:SensorsService){
        var self=this;
        
        var s=this.kerviService.getComponents$().subscribe(function(v){
            self.dashboards=self.kerviService.getComponentsByType("dashboard") ;
            for(var dashboard of self.dashboards){
                //var dashboard = dashboardComponent as DashboardModel;
                for(var section of dashboard.sections){
                    for (var sectionComponent of section.components ){
                        if (!sectionComponent.component)
                            sectionComponent.component=self.kerviService.getComponent(sectionComponent.componentId)
                    }
                }

                for (var sectionComponent of dashboard.sysSection.components){
                   if (!sectionComponent.component)
                    sectionComponent.component=self.kerviService.getComponent(sectionComponent.componentId)
                }

                for (var sectionComponent of dashboard.headerSection.components){
                   if (!sectionComponent.component)
                    sectionComponent.component=self.kerviService.getComponent(sectionComponent.componentId)
                }

                for (var sectionComponent of dashboard.footerSection.components){
                   if (!sectionComponent.component)
                    sectionComponent.component=self.kerviService.getComponent(sectionComponent.componentId)
                }


            }
            
            

            self._dashboards$.next(self.dashboards);
            console.log("db",self.dashboards);
        });
    }


    private refreshDashboards(){
        var self=this;
        
        self._dashboards$.next(this.dashboards);
    }

/*
    private updateDashboards=function(message){
        if (Array.isArray(message)){
            for (var i=0;(i<message.length);i++){
                this.updateDashboards(message[i]);
            }	
        } else {
            var dashboard=new DashboardModel();
            dashboard.id=message.id;
            dashboard.name=message.name;
            dashboard.type=message.type;
            dashboard.isDefault=message.isDefault;
            dashboard.template=message.template;
            dashboard.sections=[];
            if (!dashboard.template){
                var template=""
                for (let messageSection of message.sections){
                    var section=new DashboardSectionModel();
                    section.id=messageSection.id;
                    section.name=messageSection.name;

                }
            }
            this.dashboards.push(dashboard);
        }
    }*/

    public getDashboards$(){
        return this._dashboards$.asObservable()
    }

    public getDashboardById(id:string){
        for (let dashboard of this.dashboards) {
            if (dashboard.id==id)
                return dashboard
        }
        return null;
    }

    

    public getDashboardComponents(dashboardId){
        var result=[]

    }
}