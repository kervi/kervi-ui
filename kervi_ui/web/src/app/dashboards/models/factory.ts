import {DashboardModel, DashboardSectionModel} from './dashboard.model'
export class DashboardFactory{

    public static create(message){
        return new DashboardModel(message);
    }

}