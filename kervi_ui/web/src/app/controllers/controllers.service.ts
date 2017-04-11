// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Injectable } from '@angular/core';
import  { ControllerModel, DynamicBooleanModel, DynamicDateTimeModel, DynamicEnumModel, DynamicNumberModel, DynamicStringModel}  from './models/controller.model'
import { KerviService } from "../kervi.service";
import { IComponent } from "../models/IComponent.model";
import { BehaviorSubject, Subject } from 'rxjs/Rx';
import { ControllersFactory } from "./models/factory"
@Injectable()
export class ControllersService {
    private controllers: ControllerModel[] = [];
    private controllerTypes: string[] = [];
    private currentCameraController: ControllerModel = null;
    private cameraControllers: ControllerModel[] = [];
    private _controllers$: BehaviorSubject<ControllerModel[]> = new BehaviorSubject<ControllerModel[]>([]);
    private _controllerTypes$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
    private _cameraControllers$: BehaviorSubject<ControllerModel[]> = new BehaviorSubject<ControllerModel[]>([]);
    private _currentCameraController$: BehaviorSubject<ControllerModel> = new BehaviorSubject<ControllerModel>(null);
    private components:IComponent[];

    constructor(private kerviService: KerviService) {
        var self = this;

        var s=this.kerviService.getComponents$().subscribe(function(v){
            self.components = v;
            self.refreshControllers()
        }); 

        this.kerviService.connected$.subscribe(function(connected){
            if (connected)
                self.setEventHandlers();
        });
            
    }

    private refreshControllers() {
        var self = this;
        self.controllers = [];
        self.controllerTypes = [];
        self.currentCameraController = null;
        self.cameraControllers = [];

        this.controllers= this.kerviService.getComponentsByType("controller");
        self._controllers$.next(self.controllers);
        for (let controller of this.controllers){
            if (controller.inputs.length==0){
                for(var ref of controller.inputReferences){
                    controller.inputs.push(this.kerviService.getComponent(ref.id))
                }
            }
            if (controller.outputs.length==0){
                for(var ref of controller.outputReferences){
                    controller.outputs.push(this.kerviService.getComponent(ref.id))
                }
            }

            if (this.controllerTypes.indexOf(controller.type) == -1) {
                this.controllerTypes.push(controller.type);
            }
        }    
        this._controllerTypes$.next(self.controllerTypes);
            
        /*self.kerviService.spine.sendQuery("getControllerInfo", null, function (message) {
            console.log("controller info", message);
            self.updateControllers.call(self, message);
            self._controllers$.next(self.controllers);
            self._controllerTypes$.next(self.controllerTypes);
            self.updateCameraControllers();
            //console.log("ciu",self.controllers);
        });*/
    }

    public getControllers$() {
        return this._controllers$.asObservable();
    }

    public getControllerTypes$() {
        return this._controllerTypes$.asObservable();
    }

    public getCurrentCameraController$() {
        return this._currentCameraController$.asObservable();
    }

    public getCameraControllers$() {
        return this._cameraControllers$.asObservable();
    }

    public getDashboardControllers(dashboard: string, type: string = "") {
        //console.log("gdc",dashboard,type,this.controllers.length);

        var result = [];
        for (let controller of this.controllers) {
            if (controller.dashboards && controller.dashboards.indexOf(dashboard) >= 0)
                if (type == "" || controller.type == type)
                    result.push(controller);
        }
        //console.log("gdce",result);
        return result;

    }

    public getControllerById(id: string) {
        for (let controller of this.controllers) {
            if (controller.id==id)
                return controller;
        }
        return null;

    }

    public getControllerComponent(id) {
        //console.log("gdc",dashboard,type,this.controllers.length);

        for (let controller of this.controllers) {
            for (let component of controller.inputs){
                if (component.id==id)
                    return component
            }
        }

        for (let controller of this.controllers) {
            for (let component of controller.outputs){
                if (component.id==id)
                    return component
            }
        }
        return this.kerviService.getComponent(id);
    }

    public getDashboardCameras(dashboard: string) {
        //console.log("gdc",dashboard,type);

        var result = [];
        for (let controller of this.cameraControllers) {
            if (controller.dashboards && controller.dashboards.indexOf(dashboard) >= 0)
                result.push(controller);
        }
        return result;
    }

    public setCurrentCamera(cameraId: string) {
        for (let controller of this.cameraControllers) {
            if (controller.id == cameraId) {
                this.currentCameraController = controller;
                this._currentCameraController$.next(this.currentCameraController);
            }
        }
    }

    private setEventHandlers() {
        var self = this;
        this.kerviService.spine.addEventHandler("dynamicValueChanged", "", function (id, value) {
            var component = self.kerviService.getComponent(value.id)
            if (component.id == value.id) {
                if (component instanceof DynamicNumberModel){
                    component.value$.next(value.value)
                }
                else if (component instanceof DynamicStringModel){
                    component.value$.next(value.value)
                }
                else if (component instanceof DynamicEnumModel){
                    component.selectOptions(value.value)
                }
                else if (component instanceof DynamicBooleanModel){
                    component.state$.next(value.value)
                }
                else if (component instanceof DynamicDateTimeModel){
                    component.value$.next(value.value)
                }
                    
            }
        });
    }

    private updateCameraControllers() {
        var result = [];
        for (let controller of this.controllers) {
            if (controller.type == "camera")
                result.push(controller);
        }
        this.cameraControllers = result;
        this._cameraControllers$.next(this.cameraControllers);
        if (this.cameraControllers.length > 0)
            this.setCurrentCamera(this.cameraControllers[0].id);
    }

    private updateControllers = function (message) {
        this.controllers=ControllersFactory.createComponents(message);
        for (let controller of this.controllers){
            if (this.controllerTypes.indexOf(controller.type) == -1) {
                this.controllerTypes.push(controller.type);
            }
        }
    }
}
