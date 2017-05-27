import { NgModule } from '@angular/core';
import { DynamicNumberComponent} from './number-value/number-value.component'
import { UIComponentsModule} from '../ui-components/ui-components.module'
@NgModule({
  declarations: [
    DynamicNumberComponent
  ],
  exports:[
      DynamicNumberComponent
  ],
  imports: [
    UIComponentsModule
  ],
  providers: [],
  bootstrap: []
})
export class ValuesModule {
  constructor (){}
}
