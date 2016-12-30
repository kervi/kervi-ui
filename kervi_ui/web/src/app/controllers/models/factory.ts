import * as models from "./controller.model"
export class ControllersFactory{
    public static createComponents = function (message: any) {
        var component = null;
        //console.log("cf",message.componentType,message);
        if (message.componentType=="controller")
            component = new models.ControllerModel(message);
        else if (message.componentType == "button")
            component = new models.ControllerButtonModel(message);
        else if (message.componentType == "switchButton")
            component = new models.ControllerSwitchButtonModel(message);
        else if (message.componentType == "number-input")
            component = new models.ControllerInputModel(message);
        else if (message.componentType == "text-input")
            component = new models.ControllerInputModel(message);
        else if (message.componentType == "select")
            component = new models.ControllerSelectModel(message);
        else if (message.componentType == "datetime-input")
            component = new models.ControllerDateTimeModel(message);
            
        return component;
    }
}