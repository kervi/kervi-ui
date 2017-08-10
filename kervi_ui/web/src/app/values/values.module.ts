import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicNumberComponent} from './number-value/number-value.component'
import { DynamicBooleanComponent} from './boolean-value/boolean-value.component'
import { DynamicStringComponent} from './string-value/string-value.component'
import { DynamicValueComponent} from './dynamic-value/dynamic-value.component'
import { UIComponentsModule} from '../ui-components/ui-components.module'
@NgModule({
  declarations: [
    DynamicNumberComponent,
    DynamicValueComponent,
    DynamicBooleanComponent,
    DynamicStringComponent
  ],
  exports:[
      DynamicNumberComponent,
      DynamicValueComponent,
      DynamicBooleanComponent,
      DynamicStringComponent
  ],
  imports: [
    UIComponentsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ValuesModule {
  constructor (){}
}
