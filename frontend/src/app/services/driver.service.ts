import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DriverService {
	configUrl = 'api/';

	constructor(private http: HttpClient) {
	}

	getDriver() {
		return this.http.get(this.configUrl + 'driver');
	}
}
