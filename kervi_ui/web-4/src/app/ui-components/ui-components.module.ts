import { NgModule } from '@angular/core';
import { SparklineComponent } from './sparkline/sparkline.component';
import { SliderComponent } from './slider/slider.component';
import { GaugeComponent } from './gauge/gauge.component';
import { ChartComponent } from './chart/chart.component'
import { CommonModule } from '@angular/common';
import { SwitchButtonComponent} from './switch-button/switch-button.component'
import { ButtonComponent} from './button/button.component'

@NgModule({
  declarations: [
    SparklineComponent,
    SliderComponent,
    GaugeComponent,
    ChartComponent,
    SwitchButtonComponent,
    ButtonComponent
  ],
  exports:[
      SparklineComponent,
      SliderComponent,
      GaugeComponent,
      ChartComponent,
      SwitchButtonComponent,
      ButtonComponent
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
