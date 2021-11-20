import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { WeatherForecastService } from '../../shared/weather.service';

@Component({
	selector: 'filter-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss'],
})
export class FilterFormComponent implements OnInit {
	weatherForm = this.fb.group({
		searchField: [''],
		hourly: [''],
		daily: [''],
	});

	constructor(private fb: FormBuilder, public srs: WeatherForecastService) {}

	ngOnInit() {
		this.weatherForm;
	}
}
