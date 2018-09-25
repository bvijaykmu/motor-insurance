import {TestBed, inject} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

import {DriverService} from './driver.service';


describe('DriverService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [DriverService],
			imports: [HttpClientModule]
		});
	});

	it('should be created', inject([DriverService], (service: DriverService) => {
		expect(service).toBeTruthy();
	}));
});
