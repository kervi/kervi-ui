import * as models from "./controller.model"
export class ControllersFactory{
    public static createComponents = function (message: any) {
        var component = null;
        //console.log("cf",message.componentType,message);
        if (message.componentType=="controller")
            component = new models.ControllerModel(message);
        //else if (message.componentType == "button")
        //    component = new models.ControllerButtonModel(message);
        else if (message.componentType == "dynamic-boolean")
            component = new models.DynamicBooleanModel(message);
        else if (message.componentType == "dynamic-number")
            component = new models.DynamicNumberModel(message);
        else if (message.componentType == "dynamic-string")
            component = new models.DynamicStringModel(message);
        else if (message.componentType == "dynamic-enum")
            component = new models.DynamicEnumModel(message);
        else if (message.componentType == "dynamic-datetime")
            component = new models.DynamicDateTimeModel(message);
            
        return component;
    }
}