// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { IComponent } from '../../models/IComponent.model'

export class DashboardSectionComponentModel{
    public component:IComponent;
    public componentId:string;
    public parameters:any;

    constructor(private message: any){
        this.componentId = message.componentId;
        this.parameters = message.parameters;
    }
}

export class DashboardSectionModel{
    public id:string;
    public name:string;
    public parameters: any;
    public components: DashboardSectionComponentModel[]=[];

    constructor (messageSection){
        this.id=messageSection.id;
        this.name=messageSection.name;
        this.parameters=messageSection.parameters;
        for(var componentRef of messageSection.components){
            this.components.push(new DashboardSectionComponentModel(componentRef))
        }
    }

}

export class DashboardBackgroundModel{
    public type:string;
    public cameraId:string;
    public image:string;

    constructor(message){
        this.type=message.type;
        this.cameraId=message.cameraId
    }
}

export class DashboardModel{
    public id:string;
    public name:string;
    public componentType:string;
    public type:string;
    public isDefault:Boolean;
    public template:string;
    public sections:DashboardSectionModel[];
    public headerSection: DashboardSectionModel=null;
    public footerSection: DashboardSectionModel=null;
    public sysSection: DashboardSectionModel=null;
    public background: DashboardBackgroundModel=null;

    constructor(message){
        this.id=message.id;
        this.name=message.name;
        this.componentType="dashboard";
        this.type=message.type;
        this.isDefault=message.isDefault;
        this.template=message.template;
        this.background=new DashboardBackgroundModel(message.background);
        this.sections=[];
        if (!this.template){
            for (let messageSection of message.sections){
                var section=new DashboardSectionModel(messageSection);
                if (section.id=="header")
                    this.headerSection=section;
                else if (section.id=="footer")
                    this.footerSection=section;
                else if (section.id=="sys-header")
                    this.sysSection=section;
                else this.sections.push(section);        
            }
        }
    }
}