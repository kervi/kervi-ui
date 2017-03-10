import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
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
  public cameraId: string = null;
  public cameraParameters:any = null;
  public dashboardSectionsHidden:boolean=false;
  public showSectionController:boolean;
  private routeSubscription;
  
  constructor(private zone:NgZone, private kerviService:KerviService, private dashboardsService:DashboardsService, private router:Router, private activatedRoute:ActivatedRoute) {
      
   }

  ngOnInit() {
    console.log("db init", this);
    if (!this.kerviService.connected$.value)
      this.router.navigate(['/connect']);
    
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
      this.dashboardId = params['name']; 
      this.setupDashboard();

      this.dashboardsService.getDashboards$().subscribe(function(v){
        this.setupDashboard()
      })

    });
    
  }

  ngOnDestroy(){
    this.routeSubscription.unsubscribe();
  }

  private setupDashboard(){
    console.log("setup dashboard")
    this.dashboard=this.dashboardsService.getDashboardById(this.dashboardId);
    if (this.dashboard){
      this.dashboardSectionsHidden=false;
      this.showSectionController=false;
        this.cameraId=null;
        this.cameraParameters=null;
      
      if (this.dashboard.backgroundSection){
        if (this.dashboard.backgroundSection.components.length > 0)
        {
          this.dashboardSectionsHidden=true;
          this.showSectionController=true;
          this.cameraId=this.dashboard.backgroundSection.components[0].componentId;
          this.cameraParameters=this.dashboard.backgroundSection.components[0].parameters;
        }
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
    console.log("dbbcx", this.cameraId, this.cameraParameters);
  }
}
