import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { IWeatherForecastList } from '../../models/weatherForecast';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  private controllerRoute = 'weatherforecast';
  private url = '';

  constructor(private httpClient: HttpClient) {
    this.url = `${environment.apiRoute}${this.controllerRoute}`;
  }

  public getForecast(): Observable<IWeatherForecastList> {
    const endpoint = `${this.url}`;
    return this.httpClient.get<IWeatherForecastList>(endpoint);
  }
}
