import { Component, OnInit, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

import {
  merge,
  Observable,
  of as observableOf,
} from 'rxjs';
import {
  catchError,
  startWith,
  switchMap,
  tap,
} from 'rxjs/operators';

import { ForecastService } from 'src/app/infrastructure/core/services/forecast.service';
import {
  IWeatherForecastList,
  WeatherForecastList,
} from 'src/app/infrastructure/models/weatherForecast';

@Component({
  template: `
    <s3-forecast-list-presentation
      [forecasts]="(forecastList$ | async)"
      [isLoadingResults]="isLoadingResults"
      (emitUpdateList)="updateList()"
    ></s3-forecast-list-presentation>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastListComponent implements OnInit {
  public emitUpdate = new EventEmitter<void>();
  public forecastList$: Observable<IWeatherForecastList>;
  public isLoadingResults = false;

  constructor(private forecastService: ForecastService) {}

  public ngOnInit(): void {
    this.getWeatherForecast();
  }

  public updateList(): void {
    this.emitUpdate.emit();
  }

  private getWeatherForecast(): void {
    this.forecastList$ = merge(this.emitUpdate).pipe(
      startWith({}),
      switchMap(() => {
        this.isLoadingResults = true;
        return this.forecastService.getForecast();
      }),
      tap(() => (this.isLoadingResults = false)),
      catchError(() => {
        this.isLoadingResults = false;
        return observableOf(new WeatherForecastList());
      })
    );
  }
}
