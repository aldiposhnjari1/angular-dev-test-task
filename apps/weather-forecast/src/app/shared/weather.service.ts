import { Subject } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class WeatherForecastService {
	readonly api: string = '';

	results$ = new Subject();

	constructor(private http: HttpClient) {}

	filterHourly(houer?: string) {
		console.log(houer);
	}

	filterDaily(cityName?: string, day?: string) {
		console.log(day);
		this.http
			.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${environment.apiKey}`)
			.pipe(
				take(1),
				map(result => {
					this.results$.next(result);
				})
			)
			.subscribe();
	}

	filterByText(cityName: string) {
		this.http
			.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${environment.apiKey}&lang=PT&units=metric`
			)
			.pipe(
				take(1),
				map(result => {
					this.results$.next(result);
				})
			)
			.subscribe();
	}
}
