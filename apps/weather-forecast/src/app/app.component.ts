import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'bp-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'weather-forecast';
	version = '1.0';

	constructor() {}
	ngOnInit(): void {
		console.log('test');
	}
}
