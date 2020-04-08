import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * Wrapper component for all `ForecastModule` routes.
 */
@Component({
  templateUrl: './forecast-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastLayoutComponent { }
