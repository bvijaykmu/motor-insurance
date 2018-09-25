import {Component, OnInit, Input} from '@angular/core';
import {Discount} from '../variants.model';

@Component({
	selector: 'app-discount',
	templateUrl: './discount.component.html',
	styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {
	@Input() discount: Discount;

	constructor() {
	}

	ngOnInit() {
	}

}
