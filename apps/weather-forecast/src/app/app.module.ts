import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { WeatherForecastService } from './shared/weather.service';
import { AppComponent } from './app.component';

// components
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterFormComponent } from './components/form/form.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
	declarations: [AppComponent, NavbarComponent, FilterFormComponent, SidebarComponent, CardComponent],
	imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, FormsModule],
	providers: [WeatherForecastService],
	bootstrap: [AppComponent],
})
export class AppModule {}
