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
  public showSectionController:boolean;
  private routeSubscription;
  
  constructor(private kerviService:KerviService, private dashboardsService:DashboardsService, private router:Router, private activatedRoute:ActivatedRoute) {
      
   }

  ngOnInit() {
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
      this.dashboardId = params['name']; 
      this.dashboard=this.dashboardsService.getDashboardById(this.dashboardId);
      if (this.dashboard){
        this.dashboardSectionsHidden=false;
        this.showSectionController=false;
        if (this.dashboard.background.type==="camera"){
          this.dashboardSectionsHidden=true;
          this.showSectionController=true;
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
      }
    });
    
  }

  ngOnDestroy(){
    this.routeSubscription.unsubscribe();
  }
}
