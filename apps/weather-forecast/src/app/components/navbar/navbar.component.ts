import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
	@Input() name: string | undefined;
	@Input() version: string | undefined;

	constructor() {}

	ngOnInit() {}
}
