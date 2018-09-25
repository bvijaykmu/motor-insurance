import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class VehicleService {
	configUrl = 'api/';

	constructor(private http: HttpClient) {
	}

	getVehicle() {
		return this.http.get(this.configUrl + 'vehicle');
	}

}
