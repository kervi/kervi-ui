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
import { ImageViewerComponent } from './image-viewer/image-viewer.component' 
import { ActionComponent } from './action/action.component' 
import { DateTimeComponent } from './datetimepicker/datetimepicker.component' 
import { NgxGaugeModule } from 'ngx-gauge';

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
    ImageViewerComponent,
    ActionComponent,
    DateTimeComponent
  ],
  exports:[
      SparklineComponent,
      SliderComponent,
      GaugeComponent,
      ChartComponent,
      SwitchButtonComponent,
      ButtonComponent,
      CamViewerComponent,
      ActionComponent,
      DateTimeComponent
  ],
  imports: [
    CommonModule,
    NgxGaugeModule
  ],
  providers: [],
  bootstrap: []
})
export class UIComponentsModule {
  constructor (){}
}
