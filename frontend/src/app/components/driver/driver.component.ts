import {Component, OnInit} from '@angular/core';
import {Driver} from './driver.model';
import {DriverService} from '../../services/driver.service';

import {faUser, faMars, faVenus} from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-driver',
	templateUrl: './driver.component.html',
	styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
	faUser = faUser;
	faMars = faMars;
	faVenus = faVenus;
	driver: Driver;
	genderList: any[];

	constructor(private driverService: DriverService) {
		this.genderList = [
			{label: 'Male', value: 'M', icon: this.faMars},
			{label: 'Female', value: 'F', icon: this.faVenus}
		];
	}

	ngOnInit() {
		this.driverService.getDriver()
			.subscribe((data: Driver) => {
					this.driver = data;
					this.driver.dateOfBirth = new Date(data.dateOfBirth);
				}
			);
	}

}
