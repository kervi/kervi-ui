// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { BehaviorSubject } from 'rxjs/Rx';
import { IComponent } from '../../models/IComponent.model'

export enum RangeType {normal, warning, error};

export class SensorRange{
    
    public start:number = null;
    public end:number = null;
    public type:RangeType = null;

    constructor(range:any){
        this.start = range["start"];
        this.end = range["end"]
        if (range["type"] == "warning")
            this.type = RangeType.warning;
        else if (range["type"] == "error")
            this.type = RangeType.error;
        else
            this.type = RangeType.normal;
    }
}

export class SensorModel implements IComponent {
    public subSensors:SensorModel[] = [];
    public id: string = null;
    public name: string = null;
    public componentType = "sensor";
    public ui:any = {}
    public type: string = null;
    public visible: boolean = true;
    public max: number = null;
    public min: number = null;
    public unit: string = null;
    public ranges:SensorRange[] = []
    public valueTS:Date = null;
    public value$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    public dashboards: string[] = [];
    public sparkline$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);

    updateReferences(){};
    reload(component:IComponent){};
    
    constructor(message: any){
        this.id=message.id;
        this.name=message.name;
        this.ui=message.ui;
        this.visible=message.visible;
        this.dashboards=message.dashboards;
        this.max=message.max;
        this.min=message.min;
        
        for(var range of message.ranges){
            this.ranges.push(new SensorRange(range));
        }
        this.type=message.type;
        this.unit=message.unit;
        this.value$.next(message.value);
        this.sparkline$.next(message.sparkline);
        for(var subSensor of message.subSensors){
            this.subSensors.push(new SensorModel(subSensor));
        }
    }
}