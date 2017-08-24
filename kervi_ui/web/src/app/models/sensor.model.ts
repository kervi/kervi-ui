// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { BehaviorSubject } from 'rxjs/Rx';
import { IComponent } from './IComponent.model'
import { DynamicNumberModel } from './dynamicValues.model'

export class SensorModel implements IComponent {
    public subSensors:SensorModel[] = [];
    public id: string = null;
    public name: string = null;
    public componentType = "sensor";
    public ui:any = {}
    public type: string = null;
    public visible: boolean = true;
    public value:DynamicNumberModel = null;
    public dashboards: string[] = [];
    
    updateReferences(){};
    reload(component:IComponent){};
    
    constructor(message: any){
        this.id=message.id;
        this.name=message.name;
        this.ui=message.ui;
        this.visible=message.visible;
        this.dashboards=message.dashboards;
        this.value = new DynamicNumberModel(message);
        this.type=message.type;
        for(var subSensor of message.subSensors){
            this.subSensors.push(new SensorModel(subSensor));
        }
    }
}