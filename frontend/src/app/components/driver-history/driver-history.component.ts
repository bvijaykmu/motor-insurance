import {Component, OnInit} from '@angular/core';
import {faFile} from '@fortawesome/free-solid-svg-icons';
import {Driver} from '../driver/driver.model';

@Component({
	selector: 'app-driver-history',
	templateUrl: './driver-history.component.html',
	styleUrls: ['./driver-history.component.css']
})
export class DriverHistoryComponent implements OnInit {
	faFile = faFile;
	driverHistory: Driver;

	constructor() {
	}

	ngOnInit() {
	}

}
