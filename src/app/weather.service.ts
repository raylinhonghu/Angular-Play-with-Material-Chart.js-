import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(private _http: HttpClient) { }

  dailyForecast(){
    return this._http.get("http://localhost:4200/assets/weather.json")
      .map(result => result);
  }
}
