// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
import { IComponent } from "./IComponent.model"
import { ComponentRef } from "./ComponentRef"
import { BehaviorSubject } from 'rxjs/Rx';
//import { ControllersFactory } from './factory' 


export class DynamicEnumOptionModel{
    public value:string;
    public text:string;
    public selected:boolean;
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
    public componentType = "dynamicValue"
    public visible: boolean;
    public ui:any = {}
    public id: string;
    public dashboards: string[] = [];
    public type:string;
    public command:string;
    public options:DynamicEnumOptionModel[] = [];
    
    constructor (message:any){
        this.name =message.name;
        this.id = message.id;
        this.visible = message.visible;
        this.ui = message.ui;
        this.type = message.componentType;
        this.command = message.command;
        this.options = [] 
       
        for (let option of message.options){
            this.options.push( new DynamicEnumOptionModel(option)); 
        }
    }

    updateReferences(){};
    reload(component:IComponent){};

    public selectOptions(selectedOptions:any){
        console.log("soc");
        for (let option of this.options){
            option.selected$.next(false);
        }
        for (let selectedOption of selectedOptions){
            if (selectedOption.selected){
                for(let option of this.options){
                    if (option.value == selectedOption.value){
                        option.selected$.next(true);
                        console.log("os",option.selected$.value);
                    }

                }
            }
        }
    }
}

export class DynamicNumberModel implements IComponent {
    public name: string;
    public componentType = "controllerComponent"
    public type: string;
    public visible: boolean;
    public dashboards: string[] = [];
    public orientation: string;
    public unit: string;
    public value$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    public maxValue: number;
    public minValue: number;
    public command: string;
    public sparkline$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);

    public id: string;
    public ui = {
        type: "",
        orientation: ""
    }

    constructor(message: any) {
        this.name = message.name;
        this.type = message.componentType;
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
    }

    updateReferences(){};
    reload(component:IComponent){};
}

export class DynamicStringModel implements IComponent {
    public name: string;
    public componentType = "controllerComponent"
    public type: string;
    public visible: boolean;
    public dashboards: string[] = [];
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
    }

    updateReferences(){};
    reload(component:IComponent){};
}

export class DynamicBooleanModel implements IComponent {
    public id: string;
    public name: string;
    public componentType = "controllerComponent"
    public ui:any = {}
    public type: string;
    public visible: boolean;
    public dashboards: string[] = [];
    public command: string;
    public state$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(message) {
        this.id = message.id;
        this.name = message.name;
        this.type = message.componentType;
        this.ui = message.ui;
        this.visible = message.visible;
        this.command = message.command;
        this.state$.next(message.value);

    }

    updateReferences(){};
    reload(component:IComponent){};
}

/*export class ControllerButtonModel implements IComponent {
    public id: string;
    public name: string;
    public componentType = "controllerComponent"
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
    public componentType = "controllerComponent"
    public ui:any = {}
    public dashboards: string[] = [];
    public type: string;
    public visible: boolean;
    public subType: string;
    public changeCommand: string;
    public value$: BehaviorSubject<Date> = new BehaviorSubject<Date>(null);

    constructor(message) {
        this.id = message.id;
        this.name = message.name;
        this.type = message.componentType;
        this.ui = message.ui;
        this.visible = message.visible;
        this.subType = message.inputType;
        this.value$.next(message.value);
        this.changeCommand = message.command;
    }

    updateReferences(){};
    reload(component:IComponent){};
}