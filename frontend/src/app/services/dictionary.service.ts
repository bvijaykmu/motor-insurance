import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {toPromise} from 'rxjs/operator/toPromise';

@Injectable()
export class DictionaryService {
	configUrl = 'api/';

	constructor(private http: HttpClient) {
	}

	getModelDictionary(typeId) {
		return this.http.get(this.configUrl + 'dictionaries/model', {
			params: {
				typeId: typeId
			}
		});
	}

	getMakeDictionary(productionYear) {
		return this.http.get(this.configUrl + 'dictionaries/make', {
			params: {
				productionYear: productionYear
			}
		});
	}

	getProductionYearDictionary = () => this.http.get(this.configUrl + 'dictionaries/productionYear');

	getTypeDictionary(makeId) {
		return this.http.get(this.configUrl + 'dictionaries/type', {
			params: {
				makeId: makeId
			}
		});
	}
}
