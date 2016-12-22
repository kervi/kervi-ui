// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Injectable } from '@angular/core';
import { ControllersFactory } from './controllers/models/factory'
import { SensorFactory } from './sensors/models/factory'

@Injectable()
export class ComponentsService {
    public createComponents(message: any){
        var result=[]
        if (Array.isArray(message)) {
            for (var i = 0; (i < message.length); i++) {
                result=result.concat(this.createComponents(message[i]));
            }
        } else {
            var components=ControllersFactory.createComponents(message);
            if (components.length==0)
                components=SensorFactory.createComponents(message) 
            
            if (components.length==1)
                result.push(components[1]);
        }
        return result;    
    }
}