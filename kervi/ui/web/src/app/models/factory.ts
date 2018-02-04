
import  * as DynamicValues from './dynamicValues.model'
import { ControllerModel } from './controller.model'
import { SensorModel } from './sensor.model'
import { DashboardModel } from './dashboard.model'
import { ActionModel } from './action.model'
export class ComponentFactory{

    public static createComponents(message: any){
        var result=[]
        if (Array.isArray(message)) {
            for (var i = 0; (i < message.length); i++) {
                result=result.concat(this.createComponents(message[i]));
            }
        } else {
            var component:any=null;
            if (message.componentType=="KerviAction")
                component = new ActionModel(message);
            else if (message.componentType=="dashboard")
                component = new DashboardModel(message);
            else if (message.componentType=="sensor")
                component = new SensorModel(message);
            else if (message.componentType=="controller")
                component = new ControllerModel(message);
            else if (message.componentType == "boolean-value")
                component = new DynamicValues.DynamicBooleanModel(message);
            else if (message.componentType == "number-value")
                component = new DynamicValues.DynamicNumberModel(message);
            else if (message.componentType == "string-value")
                component = new DynamicValues.DynamicStringModel(message);
            else if (message.componentType == "enum-value")
                component = new DynamicValues.DynamicEnumModel(message);
            else if (message.componentType == "datetime-value")
                component = new DynamicValues.DynamicDateTimeModel(message);
            
            if (component)
                result.push(component);
        }
        return result;    
    }
}