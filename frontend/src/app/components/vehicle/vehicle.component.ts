import {Component, OnInit} from '@angular/core';
import {Vehicle, Make, Model, ProductionYear, Type} from './vehicle.model';
import {VehicleService} from '../../services/vehicle.service';
import {DictionaryService} from '../../services/dictionary.service';
import {faCar} from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-vehicle',
	templateUrl: './vehicle.component.html',
	styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
	faCar = faCar;
	vehicle: Vehicle;
	productionYearList: ProductionYear[];
	makeList: Make[];
	typeList: Type[];
	modelList: Model[];

	constructor(private vehicleService: VehicleService, private dictionary: DictionaryService) {
	}

	ngOnInit() {
		this.vehicleService.getVehicle()
			.subscribe((data: Vehicle) => {
					this.vehicle = data;
					this.initializeDictionaries();
				}
			);
	}

	initializeDictionaries() {
		this.dictionary.getProductionYearDictionary().subscribe(
			(data: ProductionYear[]) => {
				this.productionYearList = data;
			}
		);
		if (this.vehicle.productionYear) {
			this.dictionary.getMakeDictionary(this.vehicle.productionYear).subscribe((data: Make[]) => {
				this.makeList = data;
			});
		}
		if (this.vehicle.makeId) {
			this.dictionary.getTypeDictionary(this.vehicle.makeId).subscribe((data: Type[]) => {
				this.typeList = data;
			});
		}
		if (this.vehicle.typeId) {
			this.dictionary.getModelDictionary(this.vehicle.typeId).subscribe((data: Model[]) => {
				this.modelList = data;
			});
		}
	}

}
