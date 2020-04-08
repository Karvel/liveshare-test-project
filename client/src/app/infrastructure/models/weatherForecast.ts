export interface IWeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

export class WeatherForecast implements IWeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;

  constructor() {
    this.date = '';
    this.temperatureC = 0;
    this.temperatureF = 0;
    this.summary = '';
  }
}

export interface IWeatherForecastList {
  results: IWeatherForecast[];
}

export class WeatherForecastList implements IWeatherForecastList {
  results: IWeatherForecast[];

  constructor() {
    this.results = [];
  }
}
