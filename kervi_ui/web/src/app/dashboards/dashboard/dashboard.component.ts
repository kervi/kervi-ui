import { Component, OnInit, OnDestroy, NgZone, ElementRef } from '@angular/core';
import { KerviService } from "../../kervi.service";
import { DashboardsService } from "../dashboards.service";
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardModel, DashboardSectionModel } from '../models/dashboard.model'
import { ControllerModel, DynamicNumberModel } from '../../controllers/models/controller.model'
declare var jQuery: any;

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
  private padSize = 180;
  private moveLeftDelayTimer = null;
  private moveRightDelayTimer = null;
  private showLeftPad = false
  private showRightPad = false
  private inLeftPadDrag:boolean = false;
  private inRightPadDrag:boolean = false;

  constructor(private elementRef:ElementRef, private zone:NgZone, private kerviService:KerviService, private dashboardsService:DashboardsService, private router:Router, private activatedRoute:ActivatedRoute) {
      
   }

   padPress(pad:string){
     if (pad=="left")
        this.inLeftPadDrag=true;

      console.log("pp", this.inLeftPadDrag)
   }

   padRelease(pad:string){
     if (pad=="left")
        this.inLeftPadDrag=false;
      console.log("pr", this.inLeftPadDrag)
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
    var self = this;
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

      if (this.dashboard.LeftPadXSection && this.dashboard.LeftPadXSection.components.length || this.dashboard.LeftPadYSection && this.dashboard.LeftPadYSection.components.length){
        this.showLeftPad = true;
        var xValue = null;
        var yValue = null
        if (self.dashboard.LeftPadXSection.components.length)
          xValue=self.dashboard.LeftPadXSection.components[0].component as DynamicNumberModel
        if (self.dashboard.LeftPadYSection.components.length)
          yValue=self.dashboard.LeftPadYSection.components[0].component as DynamicNumberModel
        console.log("lc",self.dashboard.LeftPadXSection, self.dashboard.LeftPadYSection,xValue,yValue)
                

        if (xValue){
          xValue.value$.subscribe(function (v) {
            if (!this.inLeftPadDrag)
              jQuery("input[name='left-x']", self.elementRef.nativeElement).val(v).change();
          });
        }

        if (yValue){
          yValue.value$.subscribe(function (v) {
            if (!this.inLeftPadDrag)
              jQuery("input[name='left-y']", self.elementRef.nativeElement).val(v).change();
          });
        }


        setTimeout(function() {

          var h = window.innerHeight;
          var w = window.innerWidth;
          jQuery(".left-pad-area", self.elementRef.nativeElement).css({ top: h / 2 - (self.padSize/2), left:  w / 4 - (self.padSize / 2) });

          jQuery(window).bind('resize', function () {
            var h = window.innerHeight;
            var w = window.innerWidth;
            jQuery(".left-pad-area", self.elementRef.nativeElement).css({ top: h / 2 - self.padSize/2, left: w / 4 - self.padSize/2 });
          });

           jQuery("input[name='left-x']", self.elementRef.nativeElement).val(xValue.value$.value).change();
          jQuery("input[name='left-y']", self.elementRef.nativeElement).val(yValue.value$.value).change();
          
          var color = "rgba(255,255,255,.5)";
          console.log("lpx", jQuery('#leftPad'));
          var p = jQuery('#leftPad').xy({
            displayPrevious: false
            , min: -100
            , max: 100
            , width: self.padSize
            , height: self.padSize
            , fgColor: color
            , bgColor: color
            , change: function (value) {
                if (self.moveLeftDelayTimer) {
                  clearTimeout(self.moveLeftDelayTimer);
                }
              
                self.moveLeftDelayTimer = setTimeout(function () {
                  console.log("lcx",xValue,yValue)
                  if (xValue && self.inLeftPadDrag)
                    self.kerviService.spine.sendCommand(xValue.command, value[0]);
                  if (yValue && self.inLeftPadDrag)
                    self.kerviService.spine.sendCommand(yValue.command, value[1]);
                }, 200);
              }
            })
            .css({ 'border': '2px solid ' + color });
      }, 0);
    }
    

    if (this.dashboard.RightPadXSection && this.dashboard.RightPadXSection.components.length || this.dashboard.RightPadYSection && this.dashboard.RightPadYSection.components.length){
        this.showRightPad = true;

        var xValueRight = null;
        var yValueRight = null
        if (self.dashboard.RightPadXSection.components.length)
          xValueRight=self.dashboard.RightPadXSection.components[0].component as DynamicNumberModel
        if (self.dashboard.RightPadYSection.components.length)
          yValueRight=self.dashboard.RightPadYSection.components[0].component as DynamicNumberModel
        
        console.log("lc",self.dashboard.RightPadXSection, self.dashboard.RightPadYSection, xValue, yValue)

        if (xValueRight){
          xValueRight.value$.subscribe(function (v) {
            if (!this.inLeftPadDrag)
              jQuery("input[name='right-x']", self.elementRef.nativeElement).val(v).change();
          });
        }

        if (yValueRight){
          yValueRight.value$.subscribe(function (v) {
            if (!this.inLeftPadDrag)
              jQuery("input[name='right-y']", self.elementRef.nativeElement).val(v).change();
          });
        }



        setTimeout(function() {
          var color = "rgba(255,255,255,.5)";
          console.log("lpx", jQuery('#rightPad'));
          
          var h = window.innerHeight;
          var w = window.innerWidth;
          jQuery(".right-pad-area", self.elementRef.nativeElement).css({ top: h / 2 - (self.padSize/2), left: w - (w / 4) - (self.padSize / 2) });

          jQuery(window).bind('resize', function () {
            var h = window.innerHeight;
            var w = window.innerWidth;
            jQuery(".right-pad-area", self.elementRef.nativeElement).css({ top: h / 2 - self.padSize/2, left: w -(w / 4) - self.padSize/2 });
          });
          
          jQuery("input[name='right-x']", self.elementRef.nativeElement).val(xValueRight.value$.value).change();
          jQuery("input[name='right-y']", self.elementRef.nativeElement).val(yValueRight.value$.value).change();
          var p = jQuery('#rightPad').xy({
            displayPrevious: false,
            min: -100,
            max: 100,
            width: self.padSize,
            height: self.padSize,
            fgColor: color,
            bgColor: color,
            change: function (value) {
                if (self.moveLeftDelayTimer) {
                  clearTimeout(self.moveRightDelayTimer);
                }
              
                
                self.moveRightDelayTimer = setTimeout(function () {
                  console.log("rcx",xValueRight,yValueRight)
                  if (xValueRight )
                    self.kerviService.spine.sendCommand(xValueRight.command, value[0]);
                  if (yValueRight)
                    self.kerviService.spine.sendCommand(yValueRight.command, value[1]);
                }, 200);
              }
            })
            .css({ 'border': '2px solid ' + color });
      }, 0);
    }

    }

    console.log("dbbcx", this.cameraId, this.cameraParameters);
  }
}
