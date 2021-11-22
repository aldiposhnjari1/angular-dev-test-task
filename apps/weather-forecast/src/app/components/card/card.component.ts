import { Component, OnInit } from '@angular/core';
import { WeatherForecastService } from '../../shared/weather.service';
//import { map, take } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
	selector: 'card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
	//data$: Observable<any>;
	rowData$ = new Subject();
	weather = {
		emptySection: '../../../assets/media/weather_illustrator.svg',
	};

	constructor(private src: WeatherForecastService) {
		console.log('card');
	}

	ngOnInit() {
		this.src.results$.subscribe((data: any) => this.rowData$.next(data));
	}
}
