import { NgModule } from '@angular/core';

import {
  ForecastRoutingModule,
  components as forecastComponents,
} from './forecast-routing.module';
import { SharedModule } from '../../infrastructure/shared/shared.module';

/**
 * Feature module for all `Forecast` components.
 */
@NgModule({
  declarations: [
    forecastComponents,
  ],
  imports: [
    SharedModule,
    ForecastRoutingModule,
  ],
})
export class ForecastModule { }
