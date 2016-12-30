import * as models from "./sensor.model"
export class SensorFactory{
    public static createComponents = function (message: any) {
        var component = null;
        //console.log("sf", message.componentType, message);
        if (message.componentType=="sensor")
            component = new models.SensorModel(message);
        
        return component;
    }
}