import {Component, OnInit, Input} from '@angular/core';
import {Coverage} from '../variants.model';

@Component({
	selector: 'app-coverage',
	templateUrl: './coverage.component.html',
	styleUrls: ['./coverage.component.scss']
})
export class CoverageComponent implements OnInit {
	@Input() coverage: Coverage;

	constructor() {
	}

	ngOnInit() {
	}

}
