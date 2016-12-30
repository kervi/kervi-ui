
import { ControllersFactory } from '../controllers/models/factory'
import { SensorFactory } from '../sensors/models/factory'
import { DashboardFactory } from '../dashboards/models/factory'
export class ComponentFactory{

    public static createComponents(message: any){
        var result=[]
        if (Array.isArray(message)) {
            for (var i = 0; (i < message.length); i++) {
                result=result.concat(this.createComponents(message[i]));
            }
        } else {
            var component=ControllersFactory.createComponents(message);
            if (!component)
                component=SensorFactory.createComponents(message)

            if (!component)
                component=DashboardFactory.create(message)
            
            if (component)
                result.push(component);
        }
        return result;    
    }
}