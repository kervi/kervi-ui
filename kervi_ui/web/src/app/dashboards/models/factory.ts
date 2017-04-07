import {DashboardModel, DashboardSectionModel, DashboardMessageModel} from './dashboard.model'
export class DashboardFactory{

    public static create(message){
        return new DashboardModel(message);
    }

    public static createLogMessages(message){
        var result:DashboardMessageModel[] = [];
        for(var item of message){
            result.push(new DashboardMessageModel(item));
        }
        return result;
    }

}