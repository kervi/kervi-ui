// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
import { IComponent } from "../../models/IComponent.model"
import { BehaviorSubject } from 'rxjs/Rx';
import { ControllersFactory } from './factory' 



export class ControllerSelectOptionModel{
    public value:string;
    public text:string;
    public selected$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(messageOption:any){
        this.value = messageOption.value;
        this.text = messageOption.text;
        this.selected$.next(messageOption.selected);
    }
}

export class ControllerSelectModel implements IComponent{
    public name: string;
    public componentType = "controllerComponent"
    public id: string;
    public dashboards: string[] = [];
    public type:string;
    public command:string;
    public options:ControllerSelectOptionModel[] = [];
    
    constructor (message:any){
        this.name =message.name;
        this.id = message.id;
        this.type = message.componentType;
        this.command = message.onSelect;
        this.options = []
        for (let option of message.options){
            this.options.push( new ControllerSelectOptionModel(option)); 
        }
    }

    public selectOptions(selectedOptions:any){
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

export class ControllerInputModel implements IComponent {
    public name: string;
    public componentType = "controllerComponent"
    public type: string;
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
        this.orientation = message.orientation;
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
}

export class ControllerSwitchButtonModel implements IComponent {
    public id: string;
    public name: string;
    public componentType = "controllerComponent"
    public type: string;
    public dashboards: string[] = [];
    public onCommand: string;
    public offCommand: string;
    public clickCommand: string;
    public state$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(message) {
        this.id = message.id;
        this.name = message.name;
        this.type = message.componentType;
        this.onCommand = message.onCommand;
        this.offCommand = message.offCommand;
        this.state$.next(message.state);

    }
}

export class ControllerButtonModel implements IComponent {
    public id: string;
    public name: string;
    public componentType = "controllerComponent"
    public dashboards: string[] = [];
    public type: string;
    public onCommand: string;
    public offCommand: string;
    public clickCommand: string;
    public state$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(message) {
        this.id = message.id;
        this.name = message.name;
        this.type = message.componentType;
        this.clickCommand = message.onClick;

    }
}

export class ControllerDateTimeModel implements IComponent {
    public id: string;
    public name: string;
    public componentType = "controllerComponent"
    public dashboards: string[] = [];
    public type: string;
    public subType: string;
    public changeCommand: string;
    public value$: BehaviorSubject<Date> = new BehaviorSubject<Date>(null);

    constructor(message) {
        this.id = message.id;
        this.name = message.name;
        this.type = message.componentType;
        this.subType = message.inputType;
        this.value$.next(message.value);
        this.changeCommand = message.command;
    }
}

export class ControllerModel implements IComponent {
    public type: string;
    public componentType="Controller"
    public name: string;
    public id: string;
    public parameters: any;
    public components: IComponent[] = [];
    public dashboards: string[];
    public template:string;
    constructor(message: any) {
        this.id = message.id;
        this.name = message.name;
        this.type = message.type;
        this.dashboards = message.dashboards;
        this.parameters = message.parameters;
        this.template=message.template;
        this.components = message.components
    }
}