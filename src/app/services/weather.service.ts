import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  private api_key = '3aeaa7cdbd59dcfd1b68d8debed1eab4';

  private api_url = 'http://api.openweathermap.org';

  getLatLon(city: string) {

    let url = `${this.api_url}/geo/1.0/direct?q=${city},BRL&limit=5&appid=${this.api_key}`;
  
    return this.httpClient.get(url);
  }

  getWeather(lat: number, lon: number) {
    let url = `${this.api_url}/data/2.5/weather?lat=${lat}&lon=${lon}&exclude=hourly&units=metric&lang=pt&appid=${this.api_key}`;

    return this.httpClient.get(url);
  }
}
