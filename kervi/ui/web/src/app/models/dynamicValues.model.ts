// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
import { IComponent, DashboardLink } from "./IComponent.model"
import { ComponentRef } from "./ComponentRef"
import { BehaviorSubject } from 'rxjs/Rx';
//import { ControllersFactory } from './factory' 

export enum DynamicRangeType {normal, warning, error};

export class DynamicRange{
    
    public start:number = null;
    public end:number = null;
    public type:DynamicRangeType = null;

    constructor(range:any){
        this.start = range["start"];
        this.end = range["end"]
        if (range["type"] == "warning")
            this.type = DynamicRangeType.warning;
        else if (range["type"] == "error")
            this.type = DynamicRangeType.error;
        else
            this.type = DynamicRangeType.normal;
    }
}



export class DynamicEnumOptionModel{
    public value:string;
    public text:string;
    public selected$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(messageOption:any){
        this.value = messageOption.value;
        this.text = messageOption.text;
        this.selected$.next(messageOption.selected);
    }
    updateReferences(){};
    reload(component:IComponent){};
}

export class DynamicEnumModel implements IComponent{
    public name: string;
    public componentType = "DynamicValue"
    public visible: boolean;
    public ui:any = {}
    public id: string;
    public dashboards: DashboardLink[] = [];
    public type:string;
    public command:string;
    public options:DynamicEnumOptionModel[] = [];
    public lastSelected$:BehaviorSubject<DynamicEnumOptionModel> = new BehaviorSubject<DynamicEnumOptionModel>(null); 
    public value$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
    
    constructor (message:any){
        var self = this;
        this.name =message.name;
        this.id = message.id;
        this.visible = message.visible;
        this.ui = message.ui;
        this.type = message.componentType;
        this.command = message.command;
        this.options = []
        this.value$.next(message.value);
       
        for (let option of message.options){
            this.options.push( new DynamicEnumOptionModel(option) );
        }

        for (let dashboardLink of message.dashboardLinks){
            this.dashboards.push( new DashboardLink(this, dashboardLink)); 
        }
        this.selectOptions(this.value$.value);
        this.value$.subscribe(function(v){
            self.selectOptions(v);
        });
    }

    updateReferences(){};
    reload(component:IComponent){};

    public selectOptions(selectedOptions:any){
        console.log("soc");
        if (!selectedOptions)
            return;
        for (let option of this.options){
            option.selected$.next(false);
        }
        for (let selectedOption of selectedOptions){
            console.log("so", selectedOption)
            for(let option of this.options){
                console.log("sox", option )
                if (option.value == selectedOption){
                    option.selected$.next(true);
                    this.lastSelected$.next(option);
                    console.log("os", option.text, option.selected$.value);
                    break;
                }
            }
        }
    }
}

export class DynamicNumberModel implements IComponent {
    public name: string;
    public componentType = "DynamicValue";
    public isInput:boolean;
    public type: string;
    public visible: boolean;
    public dashboards: DashboardLink[] = [];
    public orientation: string;
    public unit: string;
    public valueTS:Date;
    public value$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    public maxValue: number;
    public minValue: number;
    public command: string;
    public sparkline$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
    public ranges: DynamicRange[] = [];

    public id: string;
    public ui = {
        type: "",
        orientation: ""
    }

    constructor(message: any) {
        this.name = message.name;
        this.type = message.componentType;
        this.isInput = message.isInput;
        this.ui = message.ui;
        this.orientation = message.orientation;
        this.visible = message.visible;
        this.unit = message.unit;
        this.value$.next(message.value);
        this.maxValue = message.maxValue;
        this.minValue = message.minValue;
        this.command = message.command;
        this.id = message.id;
        this.sparkline$.next(message.sparkline);
        
        for (var prop in message.ui) {
            if (this.ui[prop] != undefined)
                this.ui[prop] = message.ui[prop];
        }
        for (var range of message.ranges){
            this.ranges.push(new DynamicRange(range));
        }

        for (let dashboardLink of message.dashboardLinks){
            this.dashboards.push( new DashboardLink(this, dashboardLink)); 
        }
    }

    updateReferences(){};
    reload(component:IComponent){};
}

export class DynamicStringModel implements IComponent {
    public name: string;
    public componentType = "DynamicValue"
    public type: string;
    public isInput:boolean;
    public visible: boolean;
    public dashboards: DashboardLink[] = [];
    public orientation: string;
    public unit: string;
    public value$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    public maxValue: number;
    public minValue: number;
    public command: string;
    public id: string;
    public ui = {
        type: "",
        orientation: ""
    }

    constructor(message: any) {
        this.name = message.name;
        this.type = message.componentType;
        this.isInput = message.isInput;
        this.ui = message.ui;
        this.orientation = message.orientation;
        this.visible = message.visible;
        this.unit = message.unit;
        this.value$.next(message.value);
        this.maxValue = message.maxValue;
        this.minValue = message.minValue;
        this.command = message.command;
        this.id = message.id;

        for (var prop in message.ui) {
            if (this.ui[prop] != undefined)
                this.ui[prop] = message.ui[prop];
        }

        for (let dashboardLink of message.dashboardLinks){
            this.dashboards.push( new DashboardLink(this, dashboardLink)); 
        }
    }

    updateReferences(){};
    reload(component:IComponent){};
}

export class DynamicBooleanModel implements IComponent {
    public id: string;
    public name: string;
    public isInput:boolean;
    public componentType = "DynamicValue"
    public ui:any = {}
    public type: string;
    public visible: boolean;
    public dashboards: DashboardLink[] = [];
    public command: string;
    public valueTS:Date;
    public value$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(message) {
        this.id = message.id;
        this.name = message.name;
        this.type = message.componentType;
        this.ui = message.ui;
        this.isInput = message.isInput;
        this.visible = message.visible;
        this.command = message.command;
        this.value$.next(message.value);

        for (let dashboardLink of message.dashboardLinks){
            this.dashboards.push( new DashboardLink(this, dashboardLink)); 
        }

    }

    updateReferences(){};
    reload(component:IComponent){};
}

/*export class ControllerButtonModel implements IComponent {
    public id: string;
    public name: string;
    public componentType = "DynamicValue"
    public ui:any = {}
    public dashboards: string[] = [];
    public type: string;
    public visible: boolean;
    public pressCommand: string;
    public releaseCommand: string;
    public clickCommand: string;
    public state$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(message) {
        this.id = message.id;
        this.name = message.name;
        this.visible = message.visible;
        this.type = message.componentType;
        this.ui = message.ui;
        this.clickCommand = message.onClick;
        this.pressCommand = message.onPress;
        this.releaseCommand = message.onRelease;
        this.state$.next(message.state);

    }

    updateReferences(){};
    reload(component:IComponent){};
}*/

export class DynamicDateTimeModel implements IComponent {
    public id: string;
    public name: string;
    public componentType = "DynamicValue";
    public isInput:boolean;
    public ui:any = {}
    public dashboards: DashboardLink[] = [];
    public type: string;
    public visible: boolean;
    public subType: string;
    public command: string;
    public value$: BehaviorSubject<Date> = new BehaviorSubject<Date>(null);

    constructor(message) {
        this.id = message.id;
        this.name = message.name;
        this.type = message.componentType;
        this.ui = message.ui;
        this.isInput = message.isInput;
        this.visible = message.visible;
        this.subType = message.inputType;
        this.value$.next(message.value);
        this.command = message.command;

        for (let dashboardLink of message.dashboardLinks){
            this.dashboards.push( new DashboardLink(this, dashboardLink)); 
        }
    }

    updateReferences(){};
    reload(component:IComponent){};
}

export class DynamicColorModel implements IComponent {
    public id: string;
    public name: string;
    public componentType = "DynamicValue";
    public isInput:boolean;
    public ui:any = {}
    public dashboards: DashboardLink[] = [];
    public type: string;
    public visible: boolean;
    public subType: string;
    public command: string;
    public value$: BehaviorSubject<Date> = new BehaviorSubject<Date>(null);

    constructor(message) {
        this.id = message.id;
        this.name = message.name;
        this.type = message.componentType;
        this.ui = message.ui;
        this.isInput = message.isInput;
        this.visible = message.visible;
        this.subType = message.inputType;
        this.value$.next(message.value);
        this.command = message.command;

        for (let dashboardLink of message.dashboardLinks){
            this.dashboards.push( new DashboardLink(this, dashboardLink)); 
        }
    }

    updateReferences(){};
    reload(component:IComponent){};
}