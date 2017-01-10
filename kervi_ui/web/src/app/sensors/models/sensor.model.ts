// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { BehaviorSubject } from 'rxjs/Rx';
import { IComponent } from '../../models/IComponent.model'
export class SensorModel implements IComponent {
    public id: string = null;
    public name: string = null;
    public componentType = "sensor";
    public type: string = null;
    public visible: boolean = true;
    public max: number = null;
    public min: number = null;
    public unit: string = null;
    public upperFatalLimit:number = null;
    public upperWarningLimit:number = null;
    public lowerFatalLimit:number = null;
    public lowerWarningLimit:number = null;
    public value$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    public dashboards: string[] = [];
    public sparkline$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);


    updateReferences(){};
    
    constructor(message: any){
        this.id=message.id;
        this.name=message.name;
        this.visible=message.visible;
        this.dashboards=message.dashboards;
        this.max=message.max;
        this.min=message.min;
        this.upperFatalLimit=message.upperFatalLimit;
        this.upperWarningLimit=message.upperWarningLimit;
        this.lowerFatalLimit=message.lowerFatalLimit;
        this.lowerWarningLimit=message.lowerWarningLimit;
        this.type=message.type;
        this.unit=message.unit;
        this.value$.next(message.value);
        this.sparkline$.next(message.sparkline);
    } 


}