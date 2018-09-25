import {Component} from '@angular/core';
import {Variant} from './variants.model';

@Component({
	selector: 'app-variants',
	templateUrl: './variants.component.html',
	styleUrls: ['./variants.component.scss']
})
export class VariantsComponent {
	variants: Variant[];

	constructor() {
		this.variants = [
			{
				code: 'BRONZE',
				coverages: [
					{
						code: 'BI',
						description: 'Bodily injury liability provides protection if you injure or kill someone while operating your car.',
						limitLeft: 30000,
						limitRight: 50000,
						name: 'Bodily Injury Liability',
						position: 1,
						premium: 129.78
					},
					{
						code: 'PD',
						description: 'Property damage liability protects you if your car damages someone else\'s property. ' +
							'It also provides you with legal defense if another party files a lawsuit against you.',
						limitLeft: 25000,
						limitRight: null,
						name: 'Property Damage Liability',
						position: 2,
						premium: 100
					},
					{
						code: 'MED',
						description: 'Medical payments, no-fault or personal injury protection coverage usually pays for ' +
							'the medical expenses of the injured driver and passengers in your car. There may also be coverage ' +
							'if you are injured by a vehicle as a pedestrian.',
						limitLeft: 2000,
						limitRight: null,
						name: 'Medical Payments',
						position: 3,
						premium: 55
					}
				],
				discounts: [
					{
						code: 'DE',
						name: 'Driving Experience',
						position: 1,
						value: 30
					},
					{
						code: 'GD',
						name: 'Good Driver',
						position: 2,
						value: 20
					}
				],
				order: 1,
				premium: 234.78,
				premiumBeforeDiscounts: 284.78,
			}
		];
	}
}
