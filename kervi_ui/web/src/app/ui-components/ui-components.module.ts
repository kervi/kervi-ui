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

@NgModule({
  declarations: [
    SparklineComponent,
    SliderComponent,
    GaugeComponent,
    ChartComponent,
    SwitchButtonComponent,
    ButtonComponent,
    CamViewerComponent,
    MPEGViewerComponent
  ],
  exports:[
      SparklineComponent,
      SliderComponent,
      GaugeComponent,
      ChartComponent,
      SwitchButtonComponent,
      ButtonComponent,
      CamViewerComponent
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
