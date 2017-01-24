// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { IComponent } from '../../models/IComponent.model'



export class DashboardMessageModel{
    public timestamp: Date;
    public topic:string;
    public body:string;
    public type:string;

    constructor(message){
        this.timestamp = new Date(message.timestamp*1000);
        this.topic = message.topic;
        this.body = message.body;
        this.type = message.type;
    }
}

export class DashboardSectionComponentModel{
    public component:IComponent;
    public componentId:string;
    public linkId:any;
    public parameters:any;

    constructor(private message: any){
        this.linkId = message.linkId;
        this.componentId = message.componentId;
        this.parameters = message.parameters;
    }
}

export class DashboardSectionParametersModel{
    public title:string = null;
    public columns:number = null;
    public rows:number = null;
    public type:string = null;
    public userLog: boolean = null;
    
    constructor(messageParameters){
        this.title=messageParameters.title;
        this.columns=messageParameters.columns;
        this.rows=messageParameters.rows;
        this.userLog=messageParameters.userLog;
        
        
        if (messageParameters.type)
            this.type=messageParameters.type;
    }
}

export class DashboardSectionModel{
    public id:string;
    public name:string;
    public parameters: DashboardSectionParametersModel;
    public components: DashboardSectionComponentModel[]=[];
    public dashboard: DashboardModel;

    constructor (dashboard,messageSection){
        this.dashboard=dashboard;
        this.id=messageSection.id;
        this.name=messageSection.name;
        this.parameters=new DashboardSectionParametersModel(messageSection.uiParameters);
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
    public controllerSection: DashboardSectionModel=null;
    public background: DashboardBackgroundModel=null;
    public unitSize: number;
    

    constructor(message){
        this.id=message.id;
        this.name=message.name;
        this.componentType="dashboard";
        this.type=message.type;
        this.isDefault=message.isDefault;
        this.template=message.template;
        this.unitSize=message.unitSize;
        this.background=new DashboardBackgroundModel(message.background);
        this.sections=[];
        if (!this.template){
            for (let messageSection of message.sections){
                var section=new DashboardSectionModel(this, messageSection);
                if (section.id=="header")
                    this.headerSection=section;
                else if (section.id=="footer")
                    this.footerSection=section;
                else if (section.id=="sys-header")
                    this.sysSection=section;
                else if (section.id=="controllers")
                    this.controllerSection=section;    
                else this.sections.push(section);        
            }
        }
    }
}