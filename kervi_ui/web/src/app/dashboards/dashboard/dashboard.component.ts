import { Component, OnInit, OnDestroy } from '@angular/core';
import { KerviService } from "../../kervi.service";
import { DashboardsService } from "../dashboards.service";
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardModel, DashboardSectionModel } from '../models/dashboard.model'
import { ControllerModel } from '../../controllers/models/controller.model'
@Component({
  selector: 'app-dashboard',
  //providers: [ KerviService ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  public dashboardId:string;
  public dashboard:DashboardModel;
  public sections: DashboardSectionModel[] = [];
  public sectionRows: any[]=[];
  public camera: ControllerModel = null;
  public dashboardSectionsHidden:boolean=false;
  private routeSubscription;
  
  constructor(private kerviService:KerviService, private dashboardsService:DashboardsService, private router:Router, private activatedRoute:ActivatedRoute) {
      console.log("db c");
   }

  ngOnInit() {
    console.log("db nginit");
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
      console.log("cb,rp",params);
      this.dashboardId = params['name']; 
      this.dashboard=this.dashboardsService.getDashboardById(this.dashboardId);
      console.log("dbs",this.dashboard);
      if (this.dashboard.background.type=="camera"){
        this.dashboardSectionsHidden=true;
        this.camera=this.kerviService.getComponent(this.dashboard.background.cameraId) as ControllerModel;
      }
      var rowSize=3;
      this.sectionRows=[]
      var currentRow=[];
      this.sectionRows.push(currentRow);
      for(var section of this.dashboard.sections){
           currentRow.push(section);
           if (currentRow.length==rowSize){
             currentRow= [];
             this.sectionRows.push(currentRow);
           }
      }
      console.log("dbi",this.sectionRows,this.dashboard);
    });
  }

  ngOnDestroy(){
    this.routeSubscription.unsubscribe();
  }
}
