import { NgModule } from '@angular/core';
import { SparklineComponent } from './sparkline/sparkline.component';
import { SliderComponent } from './slider/slider.component';
import { GaugeComponent } from './gauge/gauge.component';
import { ChartComponent } from './chart/chart.component'
import { CommonModule } from '@angular/common';
import { SwitchButtonComponent} from './switch-button/switch-button.component'
import { ButtonComponent} from './button/button.component'
import { CamViewerComponent } from './cam-viewer/cam-viewer.component'
import { MPEGViewerComponent } from './mpeg-viewer/mpeg-viewer.component' 
import { ActionComponent } from './action/action.component' 

@NgModule({
  declarations: [
    SparklineComponent,
    SliderComponent,
    GaugeComponent,
    ChartComponent,
    SwitchButtonComponent,
    ButtonComponent,
    CamViewerComponent,
    MPEGViewerComponent,
    ActionComponent
  ],
  exports:[
      SparklineComponent,
      SliderComponent,
      GaugeComponent,
      ChartComponent,
      SwitchButtonComponent,
      ButtonComponent,
      CamViewerComponent,
      ActionComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class UIComponentsModule {
  constructor (){}
}
