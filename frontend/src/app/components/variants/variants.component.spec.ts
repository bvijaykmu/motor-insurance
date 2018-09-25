import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {VariantsComponent} from './variants.component';

describe('VariantsComponent', () => {
	let component: VariantsComponent;
	let fixture: ComponentFixture<VariantsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [VariantsComponent],
			schemas: [ NO_ERRORS_SCHEMA ]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(VariantsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
