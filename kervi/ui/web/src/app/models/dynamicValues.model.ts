// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
import { IComponent, DashboardLink } from "./IComponent.model"
import { ComponentRef } from "./ComponentRef"
import { BehaviorSubject } from 'rxjs/Rx';
import { KerviService } from '../kervi.service'
//import { ControllersFactory } from './factory' 
declare var Qty:any;

export class DynamicValue implements IComponent{
    public name: string;
    public componentType = "DynamicValue"
    public visible: boolean;
    public ui:any = {}
    public id: string;
    public dashboards: DashboardLink[] = [];
    public isInput:boolean;
    public command: string;
    public valueTS:Date;

    constructor(message:any){
        this.name = message.name;
        this.isInput = message.isInput;
        this.ui = message.ui;
        this.visible = message.visible;
        this.command = message.command;
        this.id = message.id;
    }
    setValue(v){
        //this.value$.next(newValue)
    
    }
    updateReferences(){};
    reload(component:IComponent){};
    removeReferences(components:IComponent[]){};
}



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
    removeReferences(components:IComponent[]){};
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
    removeReferences(components:IComponent[]){};

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

    setValue(v){
        this.value$.next(v)
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
    public qtyUnitFrom:string;
    public qtyUnitTo:string = null;
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


    constructor(message: any, kerviService:KerviService) {
        this.command = message.command;
        this.id = message.id;
        this.name = message.name;
        this.type = message.componentType;
        this.isInput = message.isInput;
        this.ui = message.ui;
        this.orientation = message.orientation;
        this.visible = message.visible;
        this.unit = message.unit;
        	
        this.qtyUnitFrom = message.unit;
        if (this.unit == "c" && kerviService.application$.value["display"]["unit_system"]["temperature"]=="F"){
            this.qtyUnitFrom = "tempC";
            this.qtyUnitTo = "tempF";
            this.unit = "F"
        }

        
        for (var prop in message.ui) {
            if (this.ui[prop] != undefined)
                this.ui[prop] = message.ui[prop];
        }
        for (var range of message.ranges){
            if (this.qtyUnitTo){
                var q = new Qty(range["start"], this.qtyUnitFrom);
                range["start"] = q.to(this.qtyUnitTo).scalar
                var q = new Qty(range["end"], this.qtyUnitFrom);
                range["end"] = q.to(this.qtyUnitTo).scalar
                this.ranges.push(new DynamicRange(range));
            } else
                this.ranges.push(new DynamicRange(range));
        }

        for (let dashboardLink of message.dashboardLinks){
            this.dashboards.push( new DashboardLink(this, dashboardLink)); 
        }
        
        if (this.qtyUnitTo && message.maxValue){
            var q = new Qty(message.maxValue, this.qtyUnitFrom);
            this.maxValue = q.to(this.qtyUnitTo).scalar;
        } else
            this.maxValue = message.maxValue; 

        if (this.qtyUnitTo && message.minValue){
            var q = new Qty(message.minValue, this.qtyUnitFrom);
            this.minValue = q.to(this.qtyUnitTo).scalar;
        } else
            this.minValue = message.minValue; 
        
        
        var spl = []
        for(var spv of message.sparkline){
            if (this.qtyUnitTo){
                console.log("spv", spv);
                var q = new Qty(spv.value, this.qtyUnitFrom);
                //spv.value = q.to(this.qtyUnitTo).scalar;
            }
            spl.push(spv)
        }
        this.sparkline$.next(spl);
        this.setValue(message.value);
    }

    setValue(v){
        var newValue = v;
        if (this.qtyUnitTo){
            var q = new Qty(v, this.qtyUnitFrom);
            newValue = q.to(this.qtyUnitTo).scalar;
        } 
        
        this.value$.next(newValue)

        var spl=this.sparkline$.value;
        spl.push(newValue);
        if (spl.length>10)
             spl.shift();
        this.sparkline$.next(spl);  
        
    }

    updateReferences(){};
    reload(component:IComponent){};
    removeReferences(components:IComponent[]){};
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

    setValue(v){
        this.value$.next(v)
    }

    updateReferences(){};
    reload(component:IComponent){};
    removeReferences(components:IComponent[]){};
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
    setValue(v){
        this.value$.next(v)
    }
    updateReferences(){};
    reload(component:IComponent){};
    removeReferences(components:IComponent[]){};
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
    setValue(v){
        this.value$.next(v)
    }
    updateReferences(){};
    reload(component:IComponent){};
    removeReferences(components:IComponent[]){};
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
    setValue(v){
        this.value$.next(v)
    }
    updateReferences(){};
    reload(component:IComponent){};
    removeReferences(components:IComponent[]){};
}