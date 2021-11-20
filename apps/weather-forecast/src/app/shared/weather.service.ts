import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WeatherForecastService {
	readonly api: string = '';

	constructor(private http: HttpClient) {}

	filterHourly(houer: string) {
		console.log(houer);
	}

	filterDaily(day: string) {
		console.log(day);
	}

	filterByText(cityName: string) {
		const headers = new HttpHeaders();
		headers.set('Content-Type', 'application/json');

		//api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

		this.http
			.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${environment.apiKey}`)
			.subscribe(val => {
				console.log(val);
			});
	}
}
