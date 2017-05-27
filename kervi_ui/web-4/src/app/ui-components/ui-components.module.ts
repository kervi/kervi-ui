import { NgModule } from '@angular/core';
import { SparklineComponent } from './sparkline/sparkline.component'

@NgModule({
  declarations: [
    SparklineComponent,
  ],
  exports:[
      SparklineComponent,
  ],
  imports: [
    
  ],
  providers: [],
  bootstrap: []
})
export class UIComponentsModule {
  constructor (){}
}
