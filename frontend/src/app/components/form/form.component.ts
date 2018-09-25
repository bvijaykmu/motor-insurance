import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {faBars, faCar, faFile} from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {
	accidentCount: number;
	trafficTicketsCount: number;
	licenceObtainedAtAge: number;

	faBars = faBars;
	faFile = faFile;


	constructor() {
	}

	ngOnInit() {
	}

}
