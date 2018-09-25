import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import {CalendarModule} from 'primeng/components/calendar/calendar';
import {SelectButtonModule} from 'primeng/primeng';
import {TooltipModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {KeyFilterModule} from 'primeng/primeng';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {AppComponent} from './app.component';
import {FormComponent} from './components/form/form.component';
import {VariantsComponent} from './components/variants/variants.component';
import {DriverComponent} from './components/driver/driver.component';
import {VehicleComponent} from './components/vehicle/vehicle.component';
import {DriverHistoryComponent} from './components/driver-history/driver-history.component';
import { CoverageComponent } from './components/variants/coverage/coverage.component';
import { DiscountComponent } from './components/variants/discount/discount.component';

import {DriverService} from './services/driver.service';
import {VehicleService} from './services/vehicle.service';
import {DictionaryService} from './services/dictionary.service';

@NgModule({
	declarations: [
		AppComponent,
		FormComponent,
		VariantsComponent,
		DriverComponent,
		VehicleComponent,
		DriverHistoryComponent,
		CoverageComponent,
		DiscountComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		CalendarModule,
		SelectButtonModule,
		DropdownModule,
		TooltipModule,
		KeyFilterModule,
		FontAwesomeModule,
		HttpClientModule
	],
	exports: [
		FormComponent,
		VariantsComponent,
		DriverComponent,
		VehicleComponent,
		DriverHistoryComponent,
		CoverageComponent,
		DiscountComponent
	],
	providers: [DriverService, VehicleService, DictionaryService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
