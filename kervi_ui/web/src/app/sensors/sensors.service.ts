// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Injectable , EventEmitter} from '@angular/core';
import {KerviService} from "../kervi.service";
import {BehaviorSubject, Subject} from 'rxjs/Rx';
import { SensorModel } from './models/sensor.model'
import { SensorFactory } from './models/factory'

@Injectable()
export class SensorsService {
    private sensors: SensorModel[] = [];
    private sensorTypes: string[]=[];
    private _sensors$: BehaviorSubject<SensorModel[]> = new BehaviorSubject<SensorModel[]>([]);
    private _sensorTypes$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
    constructor (private kerviService:KerviService){
        var self=this;
        
        var s=this.kerviService.getComponents$().subscribe(function(){
            self.refreshSensors()
        });

        var s1=this.kerviService.connected$.subscribe(function(connected){

            if (connected){
                self.kerviService.spine.addEventHandler("NewSensorReading","",function(){
                    for (let sensor of self.sensors){
                        if (sensor.id==this.sensor){
                            sensor.value$.next(this.value);
                            var spl=sensor.sparkline$.value;
                            spl.push(this.value);
                            if (spl.length>10)
                                spl.shift();
                            sensor.sparkline$.next(spl);
                        }
                    }
                });
            }
        });
    }

    private refreshSensors(){
        var self=this;
        this.sensors=[];
        this.sensorTypes=[];
        

        this.sensors=self.kerviService.getComponentsByType("sensor");
        self._sensors$.next(self.sensors);
        this.sensorTypes = [];
        for (let sensor of this.sensors){
            if (this.sensorTypes.indexOf(sensor.type)==-1)
                this.sensorTypes.push(sensor.type);
        }
        self._sensorTypes$.next(self.sensorTypes);
    }

    public getSensors$(){
        return this._sensors$.asObservable()
    }

    /*
    public getDashboardSensors(dashboard:string){
        var result=[];
        for (let sensor of this.sensors){
            if (sensor.dashboards && sensor.dashboards.indexOf(dashboard)>=0)
                result.push(sensor);
        }
        return result;
    }*/

    public getSensorTypes$(){
        return this._sensorTypes$.asObservable();
    }

    public getSensorsOfType(type:string){
        var result=[];
        for (let sensor of this.sensors){
            if (sensor.type==type)
                result.push(sensor);
        }
        return result;
    }

    public getSensorById(id:string){
        for (let sensor of this.sensors){
            if (sensor.id==id)
                return sensor;
        }
        return null;
    }
}