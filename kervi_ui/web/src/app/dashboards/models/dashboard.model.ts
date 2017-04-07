// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { IComponent } from '../../models/IComponent.model'



export class DashboardMessageModel{
    public sourceId:string;
    public sourceName:string;
    public area: string;
    public level: number;
    public timestamp: Date;
    public topic:string;
    public body:string;
    public type:string;

    constructor(message){
        this.timestamp = new Date(message.timestamp*1000);
        this.topic = message.topic;
        this.body = message.body;
        this.type = message.type;
        this.sourceId = message.source_id;
        this.sourceName = message.source_name;
        this.area = message.area;
        this.level = message.level;
        
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

    public reload(source:DashboardSectionModel){
        console.log("rl", this);
        for(var sourceComponent of source.components){
            var found=false;
            for(var component of this.components){
                if (component.componentId == sourceComponent.componentId){
                    found=true;
                }
            }
            if (!found){
                //component.component=self.getComponent(sectionComponent.componentId)
                this.components.push(sourceComponent);
            }
        }
        var deleteComponents:DashboardSectionComponentModel[] = [];
        for (var component of this.components){
            var found=false;
            for(var sourceComponent of source.components){
                if (sourceComponent.componentId == component.componentId){
                    found=true;
                    break;
                }
            }
            if (!found)
                deleteComponents.push(component);
        }
        console.log("dsc",deleteComponents);
        for(var component of deleteComponents){
            this.components.splice( this.components.indexOf(component), 1 );
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

export class DashboardModel implements IComponent{
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
    public backgroundSection: DashboardSectionModel=null;
    public controllerSection: DashboardSectionModel=null;
    //public background: DashboardBackgroundModel=null;
    public unitSize: number;
    
    //not used in dashboards
    public visible:boolean;
    public ui:any;
    public dashboards:any;



    constructor(message){
        this.id=message.id;
        this.name=message.name;
        this.componentType="dashboard";
        this.type=message.type;
        this.isDefault=message.isDefault;
        this.template=message.template;
        this.unitSize=message.unitSize;
        //this.background=new DashboardBackgroundModel(message.background);
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
                else if (section.id=="background")
                    this.backgroundSection=section;
                else this.sections.push(section);        
            }

        }
    }

    updateReferences(){};
    reload(component:IComponent){
        var source = component as DashboardModel;
        if (!this.backgroundSection && source.backgroundSection)
            this.backgroundSection=source.backgroundSection;
        else if (this.backgroundSection && !source.backgroundSection)
            this.backgroundSection = null
        else if (this.backgroundSection)
            this.backgroundSection.reload(source.backgroundSection)

        if (!this.footerSection && source.footerSection)
            this.footerSection=source.footerSection;
        else if (this.footerSection && !source.footerSection)
            this.footerSection = null
        else if (this.footerSection)
            this.footerSection.reload(source.footerSection)

        if (!this.headerSection && source.headerSection)
            this.headerSection=source.headerSection;
        else if (this.headerSection && !source.headerSection)
            this.headerSection = null
        else if (this.headerSection)
            this.headerSection.reload(source.headerSection)

        if (!this.sysSection && source.sysSection)
            this.sysSection=source.sysSection;
        else if (this.sysSection && !source.sysSection)
            this.sysSection = null
        else if (this.sysSection)
            this.sysSection.reload(source.sysSection)

         if (!this.controllerSection && source.controllerSection)
            this.controllerSection=source.controllerSection;
        else if (this.controllerSection && !source.controllerSection)
            this.controllerSection = null
        else if (this.controllerSection)
            this.controllerSection.reload(source.controllerSection)
    };
}